import Certificate from '@/components/CV/CertificateCard';
import EducationCard from '@/components/CV/Education';
import ExperienceCard from '@/components/CV/ExperienceCard';
import HonorsAndAwards from '@/components/CV/HonorsAndAwards';
import InfoCard from '@/components/CV/InfoCard';
import Skills from '@/components/CV/Skills';
import { Form, Input } from 'antd';
const CreateCV = () => {
    const onFinish = (values) => {
        console.log('Success:', values);
    };
    return (
        <div className='bg-gray-100 '>
            <div className="mx-5 pt-10 ">
                <div className="container mx-auto justify-items-center ">
                    <div className="border boder-solid w-[800px] py-10 px-5 bg-white rounded-lg">
                        <Form
                            name="basic"
                            labelCol={{ span: 8 }}
                            wrapperCol={{ span: 16 }}
                            initialValues={{ remember: true }}
                            onFinish={onFinish}
                            autoComplete="off"
                        >
                            <div className="grid grid-cols-12 gap-10">
                                <div className="col-span-4">
                                    <img src="https://static.topcv.vn/cv-builder/assets/default-avatar.fc9c40ba.png" alt="" />
                                </div>
                                <div className="col-span-8">
                                    <div className="text-2xl text-green-600 font-semibold my-5">
                                        HUYNH PHUOC TAN (K17 CT)
                                    </div>
                                    <Form.Item
                                        name="username"
                                        rules={[{ required: true, message: 'Please input your username!' }]}
                                    >
                                        <Input className='rounded-lg p-2 text-xs' placeholder="Vị trí ứng tuyển " />
                                    </Form.Item>
                                    <div className='mt-2 border border-black'>
                                    </div>
                                </div>
                            </div>

                            <div className='mt-10 grid grid-cols-3'>
                                <InfoCard title={"Thông tin cá nhân"} email={"tanhpce171112@fpt.edu.vn"} />
                                <EducationCard />
                                <Skills />
                            </div>
                            <ExperienceCard />
                            <div className='grid grid-cols-2 mt-5 gap-2 '>
                                <Certificate />
                                <HonorsAndAwards/>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateCV
