import { Form, Field } from 'formik';
import * as Yup from 'yup';
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import InternLogo from '@/assets/orgLogo/InternLogoColored.png';
import LoginSideImage from '@/assets/LoginSideImage.png';
import { Formik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import { useRecruiterSignupMutation } from '@/services/internHubApi';

const RecruiterRegister = () => {
  const navigate = useNavigate();
  const [ recruiterSignup, { isLoading, isError } ] = useRecruiterSignupMutation();
  const validationSchema = Yup.object({
    email: Yup.string().email('Địa chỉ email không hợp lệ').required('Vui lòng nhập địa chỉ email'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Vui lòng nhập mật khẩu'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Vui lòng nhập mật khẩu'),
    fullName: Yup.string().required('Vui lòng nhập Họ và tên'),
    phone: Yup.string().required('Vui lòng nhập Số điện thoại '),
    location: Yup.string().required('Vui lòng nhập Địa điểm'),
    termsAccepted: Yup.boolean().oneOf([true], 'Bạn cần đồng ý với điều khoản dịch vụ'),
  })
  const initialValues = {
    email: '',
    password: '',
    confirmPassword: '',
    fullName: '',
    gender: '0',
    phone: '',
    company: '',
    location: '',
    district: '',
    termsAccepted: false,
  }
  const handleSubmit = async (values) => {
    try {
      const response = await recruiterSignup(values).unwrap();
      if (response.ok) {
        navigate('/login');
      }
    } catch (error) {
      console.error('Signup failed:', error);
      // Handle error (e.g., show an error message)
    }
  };

  return (
    <div className="flex">
      <div className="w-2/3 p-12 flex flex-col justify-between">
        <div>
          <div className="mb-8">
            <Link to='/'>
              <div className="flex items-center mb-8">
                <img src={InternLogo} alt="Logo InternHub" className="h-8" />
                <span className="ml-2 text-xl font-bold text-[#19267D]">InternHub</span>
              </div>
            </Link>
            <h1 className="text-3xl font-bold text-[#19267D] mb-2">Đăng ký tài khoản </h1>
            <h2 className="text-3xl font-bold text-[#19267D] mb-2">Nhà tuyển dụng</h2>
            <p className="text-gray-500 mb-8">Tìm kiếm những tài năng triển vọng</p>
          </div>

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ errors, touched }) => (
              <Form className="w-[90%] space-y-6">
                {/* Tài khoản Section */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-4">Tài khoản</h3>
                  <div className="mb-2 flex items-center">
                    <Label htmlFor="email" className="block font-medium mb-1 w-1/3">Email đăng nhập *</Label>
                    <Field
                      as={Input}
                      type="email"
                      name="email"
                      required
                      placeholder="Email đăng nhập *"
                      className="w-2/3 mt-1"
                    />
                    </div>
                    {touched.email && errors.email ? (
                      <div className="text-red-500">{errors.email}</div>
                    ) : null}
                  
                  <div className="mb-2 flex items-center">
                    <Label htmlFor="password" className="block font-medium mb-1 w-1/3">Mật khẩu *</Label>
                    <Field
                      as={Input}
                      type="password"
                      name="password"
                      required
                      placeholder="Mật khẩu *"
                      className="w-2/3 mt-1"
                    />
                    </div>
                    {touched.password && errors.password ? (
                      <div className="text-red-500">{errors.password}</div>
                    ) : null}
                  
                  <div className="mb-2 flex items-center">
                    <Label htmlFor="confirmPassword" className="block font-medium mb-1 w-1/3">Nhập lại mật khẩu *</Label>
                    <Field
                      as={Input}
                      type="password"
                      name="confirmPassword"
                      required
                      placeholder="Nhập lại mật khẩu *"
                      className="w-2/3 mt-1"
                    />
                  </div>
                  {touched.confirmPassword && errors.confirmPassword ? (
                    <div className="text-red-500 mb-4">{errors.confirmPassword}</div>
                  ) : null}
                </div>

                {/* Thông tin nhà tuyển dụng Section */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-4">Thông tin nhà tuyển dụng</h3>
                  <div className="mb-4 flex items-center">
                    <Label htmlFor="fullName" className="block font-medium mb-1 w-1/3">Họ và tên *</Label>
                    <Field
                      as={Input}
                      type="text"
                      name="fullName"
                      required
                      placeholder="Họ và tên *"
                      className="w-2/3 mt-1"
                    />
                    </div>
                    {touched.fullName && errors.fullName ? (
                      <div className="text-red-500 mb-2">{errors.fullName}</div>
                    ) : null}
                  
                  <div className="mb-2 flex items-center">
                    <Label className="block font-medium mb-1 w-1/3">Giới tính *</Label>
                    <div className="flex gap-4">
                      <div className="flex gap-6">
                        <Label className="flex items-center">
                          <Field type="radio" name="gender" value="0" id="r1" className="mr-2"/>
                          Nam
                        </Label>
                        <Label className="flex items-center">
                          <Field type="radio" name="gender" value="1" id="r2" className="mr-2"/>
                          Nữ
                        </Label>
                      </div>
                    </div>
                  </div>
                  <div className="mb-2 flex items-center">
                    <Label htmlFor="phone" className="block font-medium mb-1 w-1/3">Số điện thoại cá nhân *</Label>
                    <Field
                      as={Input}
                      type="tel"
                      name="phone"
                      required
                      placeholder="Số điện thoại cá nhân *"
                      className="w-2/3 mt-1"
                    />
                    </div>
                    {touched.phone && errors.phone ? (
                      <div className="text-red-500">{errors.phone}</div>
                    ) : null}
                  <div className="mb-2 flex items-center">
                    <Label htmlFor="location" className="block font-medium mb-1 w-1/3">Địa điểm làm việc *</Label>
                    <Field
                      as={Input}
                      type="text"
                      name="location"
                      required
                      placeholder="Địa điểm làm việc *"
                      className="w-2/3 mt-1"
                    />
                    </div>
                    {touched.location && errors.location ? (
                      <div className="text-red-500">{errors.location}</div>
                    ) : null}
                </div>

                <div className="flex items-center mb-6">
                  <Field
                    name="termsAccepted"
                    type="checkbox"
                  />
                  <Label className="ml-2 mb-1">
                    Tôi đã đọc và đồng ý với Điều khoản dịch vụ và Chính sách bảo mật của InternHub
                  </Label>
                  </div>
                  {touched.termsAccepted && errors.termsAccepted ? (
                    <div className="text-red-500">{errors.termsAccepted}</div>
                  ) : null}

                <button type="submit" className="w-full bg-[#1F41BB] text-white py-2 rounded hover:bg-[#1a379d]">
                  Hoàn tất
                </button>

                <div className="text-center mt-4">
                  <span>Đã có tài khoản? </span>
                  <a href="/login" className="text-[#1F41BB] hover:underline">Đăng nhập ngay</a>
                </div>
              </Form>
            )}
          </Formik>
        </div>

        <div className="text-[#6C757D] text-base font-light leading-5 tracking-[-0.32px]">
          Bản quyền © Công ty trách nhiệm hữu hạn KALOCS
        </div>
      </div>

      <div className="w-1/3 flex items-center justify-center">
        <img
          src={LoginSideImage}
          alt="Minh họa đăng ký"
          className="max-w-[80%] h-auto"
        />
      </div>
    </div>
  );
};

export default RecruiterRegister;
