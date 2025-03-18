import { Avatar, Button, Form, Input, message, Radio, Switch, Upload } from "antd";
import { UserOutlined, CheckCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from "react-redux";
import { useLazyGetUserInfoQuery, usePutStudentProfileMutation } from "@/services/internHubApi";
import { useEffect, useState } from "react";
import { setEmail, setFullName, setGender, setMajor, setPhone, setRole, setUserId, setGpa, setAvtUrl } from '@/features/user';
import PdfPreview from "@/components/PdfPreview";
import { Link } from "react-router-dom";
import { uploadToCloudinary } from "@/function";
import VARIABLE from "@/consts/variable";

const EmployeeProfile = () => {
    const [form] = Form.useForm();
    const dispatch = useDispatch();
    const user = useSelector((state) => state.rootReducer.user);
    console.log("user: ", user)
    const [putStudentProfile, { isLoading }] = usePutStudentProfileMutation();
    const [fetchUser , { data: userInfo, isLoading: userInfoLoading }] = useLazyGetUserInfoQuery();
    const [file, setFile] = useState(null);

    useEffect(() => {
        if (userInfo && !userInfoLoading) {
            // Dispatch all user data
            dispatch(setEmail(userInfo.email));
            dispatch(setAvtUrl(userInfo.avtUrl));
            dispatch(setRole(userInfo.role));
            dispatch(setUserId(userInfo.id));
            dispatch(setFullName(userInfo.fullName));
            dispatch(setGender(userInfo.gender));
            dispatch(setMajor(userInfo.major));
            dispatch(setPhone(userInfo.phone));
            dispatch(setGpa(userInfo.gpa));
        }
    }, [userInfo, userInfoLoading, dispatch]);
    useEffect(() => {
        fetchUser();
    }, [fetchUser]);

    const handleUpload = async ({ file, onSuccess, onError }) => {
        try {
            message.loading({ content: "Uploading...", key: "upload" });
            const url = await uploadToCloudinary(file);
            if (url) {
                setFile({
                    uid: file.uid,
                    name: file.name,
                    status: 'done',
                    url: url,
                });
                message.success({ content: "Upload thành công!", key: "upload" });
                onSuccess("ok");
            } else {
                message.error({ content: "Upload thất bại!", key: "upload" });
                onError(new Error("Upload failed"));
            }
        } catch (error) {
            message.error("Đã xảy ra lỗi khi upload!");
            onError(error);
        }
    };

    const onFinish = async (values) => {
        const valuesSubmit = {
            email: values.email,
            avtUrl: file ? file.url : values.avtUrl,
            fullName: values.fullName,
            gender: values.gender,
            gpa: values.gpa,
            major: values.major,
            phone: values.phone,
        };
        try {
            await putStudentProfile({ id: user.userId, credentials: valuesSubmit }).unwrap();
            await fetchUser ().unwrap();
        } catch (error) {
            console.error('Cập nhật thất bại:', error);
        }
    };

    const handleRemove = () => {
        setFile(null);
    };

    return (
        <div className="mx-20">
            <div className="container mx-auto mt-10">
                <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-8 border border-solid p-5 rounded-lg">
                        <div className="font-bold text-xl">Cài đặt thông tin cá nhân</div>
                        <div className="my-2">
                            <span className="text-red-500">(*) </span>
                            Các thông tin bắt buộc
                        </div>
                        <Form
                            form={form}
                            initialValues={{
                                fullName: user?.fullName,
                                phone: user?.phone,
                                email: user?.email,
                                gender: user?.gender,
                                major: user?.major,
                                gpa: user?.gpa,
                                avtUrl: user?.avtUrl,
                            }}
                            onFinish={onFinish}
                            name="validateOnly"
                            layout="vertical"
                            autoComplete="off"
                        >
                            <Form.Item
                                name="fullName"
                                label="Họ và tên"
                                rules={[{ required: true }]}
                            >
                                <Input placeholder="Nhập họ và tên" className="rounded-lg" />
                            </Form.Item>
                            <Form.Item
                                name="phone"
                                label="Số điện thoại"
                                rules={[{ required: true }]}
                            >
                                <Input placeholder="Nhập số điện thoại" className="rounded-lg" />
                            </Form.Item>
                            <Form.Item
                                name="major"
                                label="Chuyên ngành"
                                rules={[{ required: true }]}
                            >
                                <Input placeholder="Nhập chuyên ngành" className="rounded-lg" />
                            </Form.Item>
                            <Form.Item
                                name="gpa"
                                label="GPA"
                                rules={[{ required: true }]}
                            >
                                <Input placeholder="Nhập gpa" className="rounded-lg" />
                            </Form.Item>
                            <Form.Item
                                name="email"
                                label="Email"
                                rules={[{ required: true }]}
                            >
                                <Input disabled className="rounded-lg" />
                            </Form.Item>
                            <div className="grid grid-cols-2">
                                <Form.Item
                                    name="gender"
                                    label="Giới tính"
                                    rules={[{ required: true }]}
                                >
                                    <Radio.Group>
                                        <Radio value={true}>Nam</Radio>
                                        <Radio value={false}>Nữ</Radio>
                                    </Radio.Group>
                                </Form.Item>
                                <Form.Item label="Upload Avatar" valuePropName="fileList">
                                    <Upload
                                        listType="picture-card"
                                        customRequest={handleUpload}
                                        fileList={file ? [file] : []}
                                        onPreview={() => window.open(file?.url, "_blank")}
                                        onRemove={handleRemove}
                                        showUploadList={{
                                            showRemoveIcon: true,
                                        }}
                                    >
                                        {!file && (
                                            <div className="flex flex-col items-center">
                                                <PlusOutlined className="text-xl" />
                                                <div style={{ marginTop: 8 }}>Upload</div>
                                            </div>
                                        )}
                                    </Upload>
                                </Form.Item>
                            </div>
                            <Form.Item>
                                <Button type="primary" htmlType="submit" loading={isLoading}>
                                    Submit
                                </Button>
                            </Form.Item>
                        </Form>
                        <div>
                            <div className="text-xl font-bold">CV đã tạo</div>
                            <div className="mt-5 w-[350px]">
                                <Link to={user?.resume}>
                                    <PdfPreview pdfUrl={user?.resume} />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-4 border border-solid p-5 rounded-lg">
                        <div className="grid grid-cols-12 gap-2">
                            <div className="col-span-4">
                                <Avatar size={96} src={user?.avtUrl || VARIABLE.AVT_USER} />
                            </div>
                            <div className="col-span-8">
                                <div>Chào mừng bạn trở lại</div>
                                <div className="font-bold">{user?.fullName}</div>
                                <div className="border p-1 bg-green-400 w-2/3 text-center text-white">
                                    Tài khoản Education
                                </div>
                            </div>
                        </div>
                        <div className="border border-solid border-gray-50 w-full mt-5"></div>
                        <div className="flex items-center">
                            <Switch className="mr-2" />
                            Đang Tắt tìm việc
                        </div>
                        <div className="mt-2">
                            Bật tìm việc giúp hồ sơ của bạn nổi bật hơn và được chú ý nhiều hơn trong danh sách tìm kiếm của NTD.
                        </div>
                        <div className="flex items-center mt-2">
                            <Switch defaultChecked onChange={(checked) => console.log(`Switch to ${checked}`)} className="mr-2" />
                            <div className="text-green-400 font-bold">Cho phép NTD tìm kiếm hồ sơ</div>
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
    );
};

export default EmployeeProfile;