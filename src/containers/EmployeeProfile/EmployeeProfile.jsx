import { Avatar, Button, Form, Input, Radio, Space } from "antd";
import { UserOutlined, CheckCircleOutlined } from '@ant-design/icons';
import { Switch } from 'antd';
import { getUserDataFromLocalStorage } from "@/consts/variable";
const EmployeeProfile = () => {
    const [form] = Form.useForm();
    const onChange = (checked) => {
        console.log(`switch to ${checked}`);
    };
    const user = getUserDataFromLocalStorage();
    return (
        <div className="mx-5">
            <div className="container mx-auto mt-10">
                <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-8 border border-solid p-5 rounded-lg">
                        <div className="font-bold text-xl">
                            Cài đặt thông tin cá nhân
                        </div>
                        <div className=" my-2">
                            <span className="text-red-500">(*) </span>
                            Các thông tin bắt buộc
                        </div>
                        <div>
                            <Form form={form} name="validateOnly" layout="vertical" autoComplete="off">
                                <Form.Item name="fullname"
                                    label={<>Họ và tên</>} rules={[{ required: true }]}>
                                    <Input placeholder="Nhập họ và tên" className="rounded-lg" />
                                </Form.Item>
                                <Form.Item name="phone" label={<>Số điện thoại</>} rules={[{ required: true }]}>
                                    <Input placeholder="Nhập số điện thoại" className="rounded-lg" />
                                </Form.Item>
                                <Form.Item name="email" label={<>Email</>} rules={[{ required: true }]}>
                                    <Input disabled defaultValue={user.email} className="rounded-lg" />
                                </Form.Item>
                                <Form.Item name="gender" label={<>Gender</>} rules={[{ required: true }]}>
                                    <Input disabled defaultValue={user.gender} className="rounded-lg" />
                                </Form.Item>
                                <Form.Item>
                                    <Radio.Group
                                        options={[
                                            { value: 1, label: "A" },
                                            { value: 2, label: "B" },
                                        ]}
                                    />
                                </Form.Item>
                            </Form>
                        </div>
                    </div>
                    <div className="col-span-4 border border-solid p-5 rounded-lg">
                        <div className="grid grid-cols-12 gap-2">
                            <div className="col-span-4">
                                <Avatar size={96} icon={<UserOutlined />} />
                            </div>
                            <div className="col-span-8">
                                <div>
                                    Chào mừng bạn trở lại
                                </div>
                                <div className="font-bold">
                                    {user.fullname}
                                </div>
                                <div className="border p-1 bg-green-400 w-2/3 text-center text-white">
                                    Tài khoản Education
                                </div>
                            </div>

                        </div>
                        <div className="border border-solid border-gray-50 w-full mt-5">
                        </div>
                        <div className="flex items-center">
                            <Switch onChange={onChange} className="mr-2" />
                            Đang Tắt tìm việc
                        </div>
                        <div className="mt-2">
                            Bật tìm việc giúp hồ sơ của bạn nổi bật hơn và được chú ý nhiều hơn trong danh sách tìm kiếm của NTD.
                        </div>
                        <div className="flex items-center mt-2">
                            <Switch defaultChecked onChange={onChange} className="mr-2" />
                            <div className="text-green-400 font-bold">
                                Cho phép NTD tìm kiếm hồ sơ
                            </div>
                        </div>
                        <div className="mt-2">
                            Khi có cơ hội việc làm phù hợp, NTD sẽ liên hệ và trao đổi với bạn qua:
                        </div>
                        <div className="flex mt-2">
                            <CheckCircleOutlined className="text-xl text-green-400 mr-2" />
                            Nhắn tin qua Top Connect trên TopCV
                        </div>
                        <div className="flex mt-2">
                            <CheckCircleOutlined className="text-xl text-green-400 mr-2" />
                            Email và Số điện thoại của bạn
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EmployeeProfile
