import React, { useState } from 'react';
import GoogleIcon from '@/assets/loginPageIcon/GoogleIcon.png';
import LoginSideImage from '@/assets/LoginSideImage.png';
import InternLogo from '@/assets/orgLogo/InternLogoColored.png';
import EmailIcon from '@/assets/loginPageIcon/Email_Icon.svg';
import PasswordIcon from '@/assets/loginPageIcon/PasswordIcon.svg';
import { Link } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useSignupMutation } from '@/services/internHubApi';

const SignUp = () => {
  const [signup, {isLoading}] = useSignupMutation();

  const validationSchema = Yup.object({
    fullName: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string().required('Required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Required'),
    agreedToTerms: Yup.boolean()
      .oneOf([true], 'You must accept the terms and conditions')
  });

  const handleGoogleSignUp = () => {
    // Implement Google signup logic
  };

  const handleSubmit = async (values) => {
    try {
      console.log('Signup data:', values);
      await signup(values).unwrap();
      // Handle successful signup (e.g., redirect or show a success message)
    } catch (error) {
      console.error('Signup failed:', error);
      // Handle error (e.g., show an error message)
    }
  };

  return (
    <div className="flex h-screen">
      {/* Bên trái - Form Đăng Ký */}
      <div className="w-1/2 p-12 flex flex-col justify-between">
        <div>
          {/* Logo và Văn bản Chào Mừng */}
          <div className="mb-8">
            <div className="flex items-center mb-8">
              <img src={InternLogo} alt="Logo InternHub" className="h-8" />
              <span className="ml-2 text-xl font-bold text-[#19267D]">InternHub</span>
            </div>
            <h1 className="text-3xl font-bold text-[#19267D] mb-2">Tạo tài khoản</h1>
            <p className="text-gray-500 mb-8">Bắt đầu hành trình của bạn với chúng tôi</p>
          </div>

          {/* Container Form Đăng Ký */}
          <div className="w-[90%]">
            {/* Nút Đăng Ký bằng Google */}
            <button
              onClick={handleGoogleSignUp}
              className="w-full flex items-center justify-center gap-2 border border-gray-300 rounded-lg p-3 mb-4 hover:bg-gray-50"
            >
              <img src={GoogleIcon} alt="Google" className="w-5 h-5" />
              <span>Đăng nhập bằng Google</span>
            </button>

            <div className="w-full h-1 mb-4" style={{background: "linear-gradient(270deg, #BFB0FF 0%, #0B00B9 49%, #BFB0FF 100%)"}}></div>

            {/* Replace the old form with Formik form */}
            <Formik
              initialValues={{ 
                fullName: '', 
                email: '', 
                password: '', 
                confirmPassword: '',
                agreedToTerms: false 
              }}
              validationSchema={validationSchema}
              onSubmit={(values) => handleSubmit(values)}
            >
              {({ isSubmitting, errors, touched }) => (
                <Form className="flex flex-col">
                  <div className={`relative ${errors.fullName && touched.fullName ? 'mb-8' : 'mb-4'}`}>
                    <img 
                      src={EmailIcon} 
                      alt="Full Name" 
                      className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
                    />
                    <Field
                      type="text"
                      name="fullName"
                      placeholder="Full Name"
                      className={`w-full p-3 pl-12 border ${errors.fullName && touched.fullName ? 'border-red-500' : 'border-gray-300'} rounded-lg`}
                    />
                    {errors.fullName && touched.fullName && (
                      <div className="text-red-500 text-sm mt-1 absolute">{errors.fullName}</div>
                    )}
                  </div>

                  <div className={`relative ${errors.email && touched.email ? 'mb-8' : 'mb-4'}`}>
                    <img 
                      src={EmailIcon} 
                      alt="Email" 
                      className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
                    />
                    <Field
                      type="email"
                      name="email"
                      placeholder="Email"
                      className={`w-full p-3 pl-12 border ${errors.email && touched.email ? 'border-red-500' : 'border-gray-300'} rounded-lg`}
                    />
                    {errors.email && touched.email && (
                      <div className="text-red-500 text-sm mt-1 absolute">{errors.email}</div>
                    )}
                  </div>

                  <div className="flex gap-4 mb-6">
                    <div className={`flex-1 relative ${errors.password && touched.password ? 'mb-8' : ''}`}>
                      <img 
                        src={PasswordIcon} 
                        alt="Password" 
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
                      />
                      <Field
                        type="password"
                        name="password"
                        placeholder="Password"
                        className={`w-full p-3 pl-12 border ${errors.password && touched.password ? 'border-red-500' : 'border-gray-300'} rounded-lg`}
                      />
                      {errors.password && touched.password && (
                        <div className="text-red-500 text-sm mt-1 absolute">{errors.password}</div>
                      )}
                    </div>

                    <div className={`flex-1 relative ${errors.confirmPassword && touched.confirmPassword ? 'mb-8' : ''}`}>
                      <img 
                        src={PasswordIcon} 
                        alt="Confirm Password" 
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
                      />
                      <Field
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        className={`w-full p-3 pl-12 border ${errors.confirmPassword && touched.confirmPassword ? 'border-red-500' : 'border-gray-300'} rounded-lg`}
                      />
                      {errors.confirmPassword && touched.confirmPassword && (
                        <div className="text-red-500 text-sm mt-1 absolute">{errors.confirmPassword}</div>
                      )}
                    </div>
                  </div>

                  <div className="mb-4 flex items-start gap-2">
                    <Field
                      type="checkbox"
                      name="agreedToTerms"
                      className="mt-0.5"
                    />
                    <label htmlFor="agreedToTerms" className="text-sm text-gray-600">
                      I agree to the{' '}
                      <Link to="/terms" className="text-[#1F41BB] hover:underline">
                        Terms of Use
                      </Link>{' '}
                      and{' '}
                      <Link to="/privacy" className="text-[#1F41BB] hover:underline">
                        Privacy Policy
                      </Link>{' '}
                      of InternHub
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#1F41BB] text-white rounded-lg p-3 hover:bg-[#1a379d] disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    ) : (
                      'Sign up'
                    )}
                  </button>
                </Form>
              )}
            </Formik>

            {/* Liên kết Đăng Nhập */}
            <p className="text-center mt-6 text-gray-600">
              Already have an account?{' '}
              <a href="/login" className="text-[#1F41BB] hover:underline">
                Log in
              </a>
            </p>
          </div>
        </div>

        {/* Văn bản bản quyền */}
        <div className="text-[#6C757D] text-base font-light leading-5 tracking-[-0.32px]">
          Bản quyền © Công ty trách nhiệm hữu hạn KALOCS
        </div>
      </div>

      {/* Bên phải - Hình ảnh */}
      <div className="w-1/2 flex items-center justify-center">
        <img
          src={LoginSideImage}
          alt="Hình minh họa đăng ký"
          className="max-w-[80%] h-auto"
        />
      </div>
    </div>
  );
};

export default SignUp;
