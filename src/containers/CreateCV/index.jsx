import { useSelector, useDispatch } from 'react-redux';
import Certificate from '@/components/CV/CertificateCard';
import EducationCard from '@/components/CV/Education';
import ExperienceCard from '@/components/CV/ExperienceCard';
import HonorsAndAwards from '@/components/CV/HonorsAndAwards';
import InfoCard from '@/components/CV/InfoCard';
import Skills from '@/components/CV/Skills';
import { Form, Input, Button } from 'antd';
import { setJobTitle, updatePersonalInfo } from '@/features/cv';
import { generatePDF } from '@/utils/generateCV';
import { useEffect } from 'react';

const CreateCV = () => {
    const dispatch = useDispatch();
    
    // Get user data from Redux store
    const userProfile = useSelector((state) => state.rootReducer.user);
    const cv = useSelector((state) => state.rootReducer.cv);
    console.log(cv)
    // Combine data cv with user base info
    const combinedData = {
        fullname: cv.personalInfo.fullName || userProfile.fullname,
        email: cv.personalInfo.email || userProfile.email,
        phone: cv.personalInfo.phone,
        gender: cv.personalInfo.gender || userProfile.gender,
        avatar: cv.avtUrl || userProfile.avatar,
        major: cv.education.major,
    };

    useEffect(() => {
        // Initialize CV data with user data if CV fields are empty
        if (!cv.personalInfo.fullName && userProfile.fullname) {
            dispatch(updatePersonalInfo({
                fullName: userProfile.fullname,
                email: userProfile.email,
                gender: userProfile.gender
            }));
        }
    }, [userProfile, cv.personalInfo, dispatch]);

    const handleJobTitleChange = (e) => {
        dispatch(setJobTitle(e.target.value));
    };

    const handlePersonalInfoChange = (field, value) => {
        dispatch(updatePersonalInfo({ [field]: value }));
    };

    const onFinish = (values) => {
        dispatch(updatePersonalInfo({
            fullName: values.fullName,
            email: values.email,
            gender: values.gender,
            phone: values.phone,
            socialLink: values.socialLink,
            location: values.location
        }));
    };

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
                                fullName: combinedData.fullname,
                                email: combinedData.email,
                                gender: combinedData.gender,
                                phone: combinedData.phone,
                                jobTitle: cv.jobTitle,
                                ...cv.personalInfo
                            }}
                            onFinish={onFinish}
                            autoComplete="off"
                        >
                            <div className="grid grid-cols-12 gap-10">
                                <div className="col-span-4">
                                    <img 
                                        src={combinedData.avatar || "https://static.topcv.vn/cv-builder/assets/default-avatar.fc9c40ba.png"} 
                                        alt="Avatar" 
                                    />
                                </div>
                                <div className="col-span-8">
                                    <div className="text-2xl text-green-600 font-semibold my-5">
                                        {combinedData.fullname || "Your Name"}
                                    </div>
                                    <Form.Item
                                        name="jobTitle"
                                        rules={[{ required: true, message: 'Please input your job title!' }]}
                                    >
                                        <Input 
                                            defaultValue={cv.jobTitle}
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
                                    email={combinedData.email}
                                    gender={combinedData.gender}
                                    fullname={combinedData.fullname}
                                    onFieldChange={handlePersonalInfoChange}
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
                                <Button 
                                    className="ml-2" 
                                    type="default" 
                                    onClick={() => generatePDF(cv, combinedData)}
                                >
                                    Download PDF
                                </Button>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateCV;
