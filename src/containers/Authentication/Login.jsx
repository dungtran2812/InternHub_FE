import GoogleIcon from '../../assets/loginPageIcon/GoogleIcon.png';
import LoginSideImage from '../../assets/LoginSideImage.png';
import InternLogo from '../../assets/orgLogo/InternLogoColored.png';
import EmailIcon from '../../assets/loginPageIcon/Email_Icon.svg';
import PasswordIcon from '../../assets/loginPageIcon/PasswordIcon.svg';
import { useLoginMutation, useGetUserInfoQuery } from '@/services/internHubApi';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
import { setAccessToken, setAvatar, setEmail, setFullname, setRole, setUserId } from '@/features/user';
import { useDispatch } from 'react-redux';
import { useToast } from '@/hooks/use-toast';
import { useEffect, useState } from 'react';
import { GOOGLE_AUTH_URL } from '@/consts/urlconst';

const Login = () => {
  const dispatch = useDispatch();
  const { toast } = useToast();
  const navigate = useNavigate();
  const [tokenValid, setTokenValid] = useState(false);
  const [login, { isLoading: isLoginLoading }] = useLoginMutation();

  const { data: userInfo, isLoading: isUserInfoLoading, refetch } = useGetUserInfoQuery(undefined, {
    skip: !tokenValid, // Fetch only if tokenValid is true
  });

  const validationSchema = Yup.object({
    email: Yup.string().email('Email không hợp lệ').required('Bắt buộc nhập'),
    password: Yup.string().required('Bắt buộc nhập'),
  });

  const handleGoogleLogin = async () => {
    window.location.href = GOOGLE_AUTH_URL;
    await refetch()
    if (userInfo) {
      dispatch(setEmail(userInfo.email));
      dispatch(setAvatar(userInfo.avtUrl));
      dispatch(setRole(userInfo.role));
      dispatch(setUserId(userInfo.id));
      dispatch(setFullname(userInfo.fullName));

      toast({
        title: 'Đăng Nhập Thành Công',
        description: `Xin chào ${userInfo.fullName}, cảm ơn đã sử dụng dịch vụ của internhub`,
      });
  };

  const handleSubmit = async (values) => {
    try {
      const res = await login(values).unwrap();
      dispatch(setAccessToken(res.token));
      setTokenValid(true); // Enable fetching user info
    } catch (error) {
      console.error('Đăng nhập thất bại:', error);
      toast({
        variant: 'destructive',
        title: 'Đăng nhập thất bại',
        description: `Error: ${error.data?.message || 'Có lỗi xảy ra'}`,
      });
    }
  };

  useEffect(() => {
    if (tokenValid) {
      refetch(); // Fetch user info after login
    }
  }, [tokenValid, refetch]);

  useEffect(() => {
    if (userInfo) {
      dispatch(setEmail(userInfo.email));
      dispatch(setAvatar(userInfo.avtUrl));
      dispatch(setRole(userInfo.role));
      dispatch(setUserId(userInfo.id));
      dispatch(setFullname(userInfo.fullName));

      toast({
        title: 'Đăng Nhập Thành Công',
        description: `Xin chào ${userInfo.fullName}, cảm ơn đã sử dụng dịch vụ của internhub`,
      });

      switch (userInfo.role) {
        case 'STUDENT':
          navigate('/');
          break;
        case 'RECRUITER':
          navigate('/recruiter');
          break;
        case 'UNIVERSITY':
          navigate('/university');
          break;
        case 'ADMIN':
          navigate('/admin');
          break;
        default:
          navigate('/');
      }
    }
  }, [userInfo, dispatch, navigate, toast]);

  return (
    <div className="flex h-screen">
      {/* Left section - Login form */}
      <div className="w-1/2 p-12 flex flex-col justify-between">
        <div>
          {/* Logo and Welcome Text */}
          <div className="mb-8">
            <Link to="/">
              <div className="flex items-center mb-8">
                <img src={InternLogo} alt="Logo InternHub" className="h-8" />
                <span className="ml-2 text-xl font-bold text-[#19267D]">InternHub</span>
              </div>
            </Link>
            <h1 className="text-3xl font-bold text-[#19267D] mb-2">CHÀO!</h1>
            <h2 className="text-3xl font-bold text-[#19267D] mb-2">Chào mừng trở lại</h2>
            <p className="text-gray-500 mb-8">Nhận công việc đầu tiên của bạn ở đây</p>
          </div>

          {/* Login Form Container */}
          <div className="w-[90%]">
            {/* Google Login Button */}
            <button
              onClick={handleGoogleLogin}
              disabled={isLoginLoading || isUserInfoLoading}
              className="w-full flex items-center justify-center gap-2 border border-gray-300 rounded-lg p-3 mb-4 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <img src={GoogleIcon} alt="Google" className="w-5 h-5" />
              <span>Đăng nhập bằng Google</span>
            </button>

            <div
              className="w-full h-1 mb-4"
              style={{
                background: 'linear-gradient(270deg, #BFB0FF 0%, #0B00B9 49%, #BFB0FF 100%)',
              }}
            ></div>

            {/* Login Form */}
            <Formik initialValues={{ email: '', password: '' }} validationSchema={validationSchema} onSubmit={handleSubmit}>
              {({ isSubmitting, errors, touched }) => (
                <Form className="flex flex-col">
                  <div className={`relative ${errors.email && touched.email ? 'mb-8' : 'mb-4'}`}>
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                      <img src={EmailIcon} alt="Email" className="w-5 h-5" />
                    </div>
                    <Field
                      type="email"
                      name="email"
                      placeholder="Email"
                      disabled={isLoginLoading || isUserInfoLoading}
                      className={`w-full p-3 pl-12 border ${errors.email && touched.email ? 'border-red-500' : 'border-gray-300'} rounded-lg`}
                    />
                    {errors.email && touched.email && <div className="text-red-500 text-sm mt-1 absolute">{errors.email}</div>}
                  </div>

                  <div className={`relative ${errors.password && touched.password ? 'mb-10' : 'mb-6'}`}>
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                      <img src={PasswordIcon} alt="Mật khẩu" className="w-5 h-5" />
                    </div>
                    <Field
                      type="password"
                      name="password"
                      placeholder="Mật khẩu"
                      disabled={isLoginLoading || isUserInfoLoading}
                      className={`w-full p-3 pl-12 border ${errors.password && touched.password ? 'border-red-500' : 'border-gray-300'} rounded-lg`}
                    />
                    {errors.password && touched.password && <div className="text-red-500 text-sm mt-1 absolute">{errors.password}</div>}
                  </div>

                  <div className="mt-8">
                    <button
                      type="submit"
                      className="w-full bg-[#1F41BB] text-white rounded-lg p-3 hover:bg-[#1a379d] flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                      disabled={isLoginLoading || isUserInfoLoading || isSubmitting}
                    >
                      {isLoginLoading || isSubmitting ? <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div> : 'Đăng nhập'}
                    </button>
                  </div>
                </Form>
              )}
            </Formik>

            {/* Sign Up Link */}
            <p className="text-center mt-6 text-gray-600">
              Chưa có tài khoản? <Link to="/signup" className="text-[#1F41BB] hover:underline">Tạo tài khoản</Link>
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="text-[#6C757D] text-base font-light">Bản quyền © Công ty TNHH KALOCS</div>
      </div>

      {/* Right Section - Image */}
      <div className="w-1/2 flex items-center justify-center">
        <img src={LoginSideImage} alt="Minh họa đăng nhập" className="max-w-[80%] h-auto" />
      </div>
    </div>
  );
};

export default Login;
