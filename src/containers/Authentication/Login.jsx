import GoogleIcon from '../../assets/loginPageIcon/GoogleIcon.png';
import LoginSideImage from '../../assets/LoginSideImage.png';
import InternLogo from '../../assets/orgLogo/InternLogoColored.png';
import EmailIcon from '../../assets/loginPageIcon/Email_Icon.svg';
import PasswordIcon from '../../assets/loginPageIcon/PasswordIcon.svg';
import { useLazyGetUserInfoQuery, useLoginMutation } from '@/services/internHubApi';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useToast } from '@/hooks/use-toast';
import { useEffect, useState } from 'react';
import { GOOGLE_AUTH_URL } from '@/consts/urlconst';
import { setAccessToken, setEmail, setFullName, setGender, setMajor, setPhone, setRole, setUserId, setResume, setGpa, setAvtUrl } from '@/features/user';

const Login = () => {
  const dispatch = useDispatch();
  const { toast } = useToast();
  const navigate = useNavigate();
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [login, { isLoading: loginLoading }] = useLoginMutation();
  const [fetchUser, { data: userInfo, isLoading: userInfoLoading }] = useLazyGetUserInfoQuery();

  // Handle user info changes and navigation
  useEffect(() => {
    if (userInfo && loginSuccess && !userInfoLoading) {
      
      // Dispatch all user data
      dispatch(setEmail(userInfo.email));
      dispatch(setAvtUrl(userInfo.avtUrl));
      dispatch(setRole(userInfo.role));
      dispatch(setUserId(userInfo.id));
      dispatch(setFullName(userInfo.fullName));
      dispatch(setGender(userInfo.gender));
      dispatch(setMajor(userInfo.major));
      dispatch(setPhone(userInfo.phone));
      dispatch(setResume(userInfo.resume));
      dispatch(setGpa(userInfo.gpa));
      // Show success toast
      toast({
        title: 'Đăng Nhập Thành Công',
        description: `Xin chào ${userInfo.fullName}, cảm ơn đã sử dụng dịch vụ của InternHub`,
      });

      // Navigate based on role
      const routes = {
        STUDENT: '/',
        RECRUITER: '/recruiter',
        UNIVERSITY: '/university',
        ADMIN: '/admin',
      };
      navigate(routes[userInfo.role] || '/');
    }
  }, [userInfo, loginSuccess, userInfoLoading, dispatch, navigate, toast]);

  const handleSubmit = async (values) => {
    try {
      // First, attempt login
      const res = await login(values).unwrap();
      // If login successful, set token
      dispatch(setAccessToken(res.token));

      // Then fetch user info
      await fetchUser().unwrap();
      // Mark login as successful to trigger navigation
      setLoginSuccess(true);
    } catch (error) {
      console.error('Login error:', error);
      toast({
        variant: 'destructive',
        title: 'Đăng nhập thất bại',
        description: error.data?.message || 'Có lỗi xảy ra',
      });
      setLoginSuccess(false);
    }
  };

  const handleGoogleLogin = async () => {
    window.location.href = GOOGLE_AUTH_URL;
  };

  return (
    <div className="flex h-screen">
      {/* Left Section - Login Form */}
      <div className="w-1/2 p-12 flex flex-col justify-between">
        <div>
          {/* Logo and Welcome Text */}
          <Link to="/" className="flex items-center mb-8">
            <img src={InternLogo} alt="InternHub Logo" className="h-8" />
            <span className="ml-2 text-xl font-bold text-[#19267D]">InternHub</span>
          </Link>
          <h1 className="text-3xl font-bold text-[#19267D] mb-2">CHÀO!</h1>
          <h2 className="text-3xl font-bold text-[#19267D] mb-2">Chào mừng trở lại</h2>
          <p className="text-gray-500 mb-8">Nhận công việc đầu tiên của bạn ở đây</p>

          {/* Google Login */}
          <button
            onClick={handleGoogleLogin}
            disabled={loginLoading || userInfoLoading}
            className="w-full flex items-center justify-center gap-2 border border-gray-300 rounded-lg p-3 mb-4 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {(loginLoading || userInfoLoading) ? (
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-gray-600" />
            ) : (
              <>
                <img src={GoogleIcon} alt="Google" className="w-5 h-5" />
                <span>Đăng nhập bằng Google</span>
              </>
            )}
          </button>

          <div className="w-full h-1 mb-4 bg-gradient-to-r from-[#BFB0FF] via-[#0B00B9] to-[#BFB0FF]"></div>

          {/* Login Form */}
          <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={Yup.object({
              email: Yup.string().email('Email không hợp lệ').required('Bắt buộc nhập'),
              password: Yup.string().required('Bắt buộc nhập'),
            })}
            onSubmit={handleSubmit}
          >
            {({ errors, touched, isSubmitting }) => (
              <Form className="flex flex-col">
                <div className="relative mb-4">
                  <img src={EmailIcon} alt="Email" className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5" />
                  <Field
                    type="email"
                    name="email"
                    placeholder="Email"
                    disabled={loginLoading || userInfoLoading}
                    className={`w-full p-3 pl-12 border rounded-lg ${errors.email && touched.email ? 'border-red-500' : 'border-gray-300'
                      } disabled:opacity-50 disabled:cursor-not-allowed`}
                  />
                  {errors.email && touched.email && <div className="text-red-500 text-sm mt-1">{errors.email}</div>}
                </div>

                <div className="relative mb-6">
                  <img src={PasswordIcon} alt="Mật khẩu" className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5" />
                  <Field
                    type="password"
                    name="password"
                    placeholder="Mật khẩu"
                    disabled={loginLoading || userInfoLoading}
                    className={`w-full p-3 pl-12 border rounded-lg ${errors.password && touched.password ? 'border-red-500' : 'border-gray-300'
                      } disabled:opacity-50 disabled:cursor-not-allowed`}
                  />
                  {errors.password && touched.password && <div className="text-red-500 text-sm mt-1">{errors.password}</div>}
                </div>

                <button
                  type="submit"
                  disabled={loginLoading || userInfoLoading || isSubmitting}
                  className="w-full bg-[#1F41BB] text-white rounded-lg p-3 hover:bg-[#1a379d] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {(loginLoading || userInfoLoading) ? (
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" />
                  ) : (
                    'Đăng nhập'
                  )}
                </button>
              </Form>
            )}
          </Formik>

          {/* Sign Up Link */}
          <p className="text-center mt-6 text-gray-600">
            Chưa có tài khoản? <Link to="/signup" className="text-[#1F41BB] hover:underline">Tạo tài khoản</Link>
          </p>
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
