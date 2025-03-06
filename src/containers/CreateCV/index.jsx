import { PDFDocument, rgb } from 'pdf-lib';
import fontkit from '@pdf-lib/fontkit';
import { saveAs } from 'file-saver';
import { useSelector, useDispatch } from 'react-redux';
import Certificate from '@/components/CV/CertificateCard';
import EducationCard from '@/components/CV/Education';
import ExperienceCard from '@/components/CV/ExperienceCard';
import HonorsAndAwards from '@/components/CV/HonorsAndAwards';
import InfoCard from '@/components/CV/InfoCard';
import Skills from '@/components/CV/Skills';
import { Form, Input, Button } from 'antd';
import { setJobTitle, updatePersonalInfo } from '@/features/cv';

const CreateCV = () => {
    const dispatch = useDispatch();
    
    // Get user data from Redux store
    const {
        fullname,
        email,
        avatar,
        gender
    } = useSelector((state) => state.rootReducer.user);

    // Get CV data from Redux store
    const {
        jobTitle,
        personalInfo,
        education,
        skills,
        experience,
        certificates,
        honorsAndAwards
    } = useSelector((state) => state.rootReducer.cv);

    const handleJobTitleChange = (e) => {
        dispatch(setJobTitle(e.target.value));
    };

    const handlePersonalInfoChange = (field, value) => {
        dispatch(updatePersonalInfo({ [field]: value }));
    };

    const onFinish = (values) => {
        // Update all CV data at once if needed
        dispatch(updatePersonalInfo({
            fullName: values.fullName || fullname,
            email: values.email || email,
            gender: values.gender || gender,
            phone: values.phone,
            socialLink: values.socialLink,
            location: values.location
        }));
    };

    const generatePDF = async () => {
        const pdfDoc = await PDFDocument.create();
        pdfDoc.registerFontkit(fontkit);
        const fontBytes = await fetch('src/assets/Roboto-Regular.ttf').then(res => res.arrayBuffer())
        const fontBoldBytes = await fetch('src/assets/Roboto-Bold.ttf').then(res => res.arrayBuffer())
        pdfDoc.registerFontkit(fontkit)
        const regularFont = await pdfDoc.embedFont(fontBytes)
        const boldFont = await pdfDoc.embedFont(fontBoldBytes)
        const page = pdfDoc.addPage([595, 842]); // A4 size
        const { height } = page.getSize();

        // Helper functions
        const drawText = (text, x, y, { size = 11, isBold = false, color = rgb(0, 0, 0) } = {}) => {
            if (!text) return;
            
            try {
                page.drawText(text, {
                    x,
                    y: height - y,
                    size,
                    font: isBold ? boldFont : regularFont,
                    color,
                    lineHeight: size * 1.2
                });
            } catch (error) {
                console.error('Error drawing text:', text, error);
            }
        };

        // Function to measure text width
        const measureText = (text, size, isTitle = false) => {
            const font = isTitle ? boldFont : regularFont;
            return font.widthOfTextAtSize(text, size);
        };

        // Function to wrap text with proper width calculation
        const wrapText = (text, maxWidth, x, y, options = {}) => {
            if (!text) return 0;
            
            const words = text.split(' ');
            let line = '';
            let lineY = 0;
            const fontSize = options.size || 11;
            
            words.forEach(word => {
                const testLine = line + word + ' ';
                const testWidth = measureText(testLine, fontSize, options.isBold);
                
                if (testWidth > maxWidth) {
                    drawText(line, x, y + lineY, options);
                    line = word + ' ';
                    lineY += fontSize * 1.5;
                } else {
                    line = testLine;
                }
            });
            
            if (line) {
                drawText(line, x, y + lineY, options);
            }
            
            return lineY;
        };

        // Add profile photo
        if (avatar) {
            try {
                const imageBytes = await fetch(avatar).then(res => res.arrayBuffer());
                const image = await pdfDoc.embedJpg(imageBytes);
                const scale = 100 / image.width; // Scale to 100pt width
                page.drawImage(image, {
                    x: 40,
                    y: height - 130,
                    width: 100,
                    height: image.height * scale
                });
            } catch (error) {
                console.error('Error loading avatar:', error);
            }
        }

        // Header Section
        drawText(personalInfo.fullName || fullname, 170, 60, { size: 20, isBold: true });
        drawText(jobTitle || "Front-end developer", 170, 85, { size: 13 });

        // Contact Information
        const contactY = 110;
        drawText(personalInfo.phone || "", 170, contactY, { size: 11 });
        drawText(personalInfo.email || email, 170, contactY + 20, { size: 11 });
        drawText(personalInfo.socialLink || "", 170, contactY + 40, { size: 11 });

        // Left Column (40-280)
        const leftX = 40;
        
        // Skills Section
        drawText("CÁC KỸ NĂNG", leftX, 180, { size: 13, isBold: true });
        let skillY = 210;

        // Programming Languages
        drawText("Ngôn ngữ lập trình:", leftX, skillY, { isBold: true });
        skills.hardSkills.forEach((skill, index) => {
            drawText(`• ${skill}`, leftX + 10, skillY + ((index + 1) * 20));
        });

        // Soft Skills
        skillY += (skills.hardSkills.length + 2) * 20;
        drawText("Các kỹ năng khác:", leftX, skillY, { isBold: true });
        skills.softSkills.forEach((skill, index) => {
            drawText(`• ${skill}`, leftX + 10, skillY + ((index + 1) * 20));
        });

        // Projects Section
        drawText("DỰ ÁN", leftX, 350, { size: 13, isBold: true });
        let projectY = 380;
        experience.items.forEach((exp, index) => {
            drawText(exp.position, leftX, projectY, { size: 12, isBold: true });
            drawText(`${exp.startDate} - ${exp.endDate}`, leftX, projectY + 20);
            drawText(exp.companyName, leftX, projectY + 40);
            
            const descriptionHeight = wrapText(
                exp.description,
                230, // max width
                leftX,
                projectY + 60,
                { size: 11 }
            );
            
            projectY += 80 + descriptionHeight;
        });

        // Right Column (300-540)
        const rightX = 300;

        // Education Section
        drawText("HỌC VẤN", rightX, 180, { size: 13, isBold: true });
        drawText(education.schoolName, rightX, 210, { isBold: true });
        drawText(education.major, rightX, 230);
        drawText(`${education.startDate} - ${education.endDate}`, rightX, 250);
        drawText(education.description, rightX, 270);

        // Certificates Section
        drawText("CHỨNG CHỈ", rightX, 350, { size: 13, isBold: true });
        let certY = 380;
        certificates.items.forEach((cert, index) => {
            drawText(cert.title, rightX, certY, { isBold: true });
            drawText(cert.date, rightX, certY + 20);
            certY += 50;
        });

        // Honors and Awards Section
        drawText("GIẢI THƯỞNG", rightX, Math.max(certY + 30, 500), { size: 13, isBold: true });
        let awardY = Math.max(certY + 60, 530);
        honorsAndAwards.items.forEach((award, index) => {
            drawText(award.title, rightX, awardY, { isBold: true });
            drawText(award.date, rightX, awardY + 20);
            awardY += 50;
        });

        // Save and download
        const pdfBytes = await pdfDoc.save();
        const blob = new Blob([pdfBytes], { type: 'application/pdf' });
        const fileName = `${personalInfo.fullName || 'CV'}.pdf`;
        saveAs(blob, fileName);
    }

    return (
        <div className='bg-gray-100'>
            <div className="mx-5 pt-10">
                <div className="container mx-auto justify-items-center">
                    <div className="border border-solid w-[800px] py-10 px-5 bg-white rounded-lg">
                        <Form
                            name="basic"
                            labelCol={{ span: 8 }}
                            wrapperCol={{ span: 16 }}
                            initialValues={{
                                fullName: fullname,
                                email: email,
                                gender: gender,
                                ...personalInfo
                            }}
                            onFinish={onFinish}
                            autoComplete="off"
                        >
                            <div className="grid grid-cols-12 gap-10">
                                <div className="col-span-4">
                                    <img 
                                        src={avatar || "https://static.topcv.vn/cv-builder/assets/default-avatar.fc9c40ba.png"} 
                                        alt="Avatar" 
                                    />
                                </div>
                                <div className="col-span-8">
                                    <div className="text-2xl text-green-600 font-semibold my-5">
                                        {fullname || "Your Name"}
                                    </div>
                                    <Form.Item
                                        name="jobTitle"
                                        rules={[{ required: true, message: 'Please input your job title!' }]}
                                    >
                                        <Input 
                                            defaultValue={jobTitle}
                                            onChange={handleJobTitleChange}
                                            className='rounded-lg p-2 text-xs' 
                                            placeholder="Vị trí ứng tuyển" 
                                        />
                                    </Form.Item>
                                    <div className='mt-2 border border-black'></div>
                                </div>
                            </div>

                            <div className='mt-10 grid grid-cols-3'>
                                <InfoCard 
                                    title="Personal Information"
                                    email={email}
                                    gender={gender}
                                    fullname={fullname}
                                    onFieldChange={handlePersonalInfoChange}
                                    personalInfo={personalInfo}
                                />
                                <EducationCard />
                                <Skills />
                            </div>
                            <ExperienceCard />
                            <div className='grid grid-cols-2 mt-5 gap-2'>
                                <Certificate />
                                <HonorsAndAwards />
                            </div>

                            <div className="flex justify-center mt-5">
                                <Button type="primary" htmlType="submit">Save</Button>
                                <Button className="ml-2" type="default" onClick={generatePDF}>Download PDF</Button>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateCV;
