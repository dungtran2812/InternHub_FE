import React from 'react';
import GoogleIcon from '../../assets/loginPageIcon/GoogleIcon.png';
import LoginSideImage from '../../assets/LoginSideImage.png';
import InternLogo from '../../assets/orgLogo/InternLogoColored.png';
import EmailIcon from '../../assets/loginPageIcon/Email_Icon.svg';
import PasswordIcon from '../../assets/loginPageIcon/PasswordIcon.svg';
import { useLoginMutation } from '@/services/internHubApi';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const Login = () => {
  const [login, {isLoading}] = useLoginMutation();

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string().required('Required')
  });

  const handleGoogleLogin = () => {
    // Implement Google login logic
  };

  const handleSubmit = async (values) => {
    try {
      console.log('data', values)
      const response = await login(values).unwrap();
      console.log('Login successful:', response);
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <div className="flex h-screen">
      {/* Left side - Login Form */}
      <div className="w-1/2 p-12 flex flex-col justify-between">
        <div>
          {/* Logo and Welcome Text moved outside max-w container */}
          <div className="mb-8">
            <div className="flex items-center mb-8">
              <img src={InternLogo} alt="InternHub Logo" className="h-8" />
              <span className="ml-2 text-xl font-bold text-[#19267D]">InternHub</span>
            </div>
            <h1 className="text-3xl font-bold text-[#19267D] mb-2">Hi!</h1>
            <h2 className="text-3xl font-bold text-[#19267D] mb-2">Welcome back</h2>
            <p className="text-gray-500 mb-8">Get your first job here</p>
          </div>

          {/* Login Form Container - now 90% width */}
          <div className="w-[90%]">
            {/* Google Login Button */}
            <button
              onClick={handleGoogleLogin}
              disabled={isLoading}
              className="w-full flex items-center justify-center gap-2 border border-gray-300 rounded-lg p-3 mb-4 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <img src={GoogleIcon} alt="Google" className="w-5 h-5" />
              <span>Login by Google</span>
            </button>

            <div className="w-full h-1 mb-4" style={{background: "linear-gradient(270deg, #BFB0FF 0%, #0B00B9 49%, #BFB0FF 100%)"}}></div>

            {/* Login Form */}
            <Formik
              initialValues={{ email: '', password: '' }}
              validationSchema={validationSchema}
              onSubmit={(values) => handleSubmit(values)}
            >
              {({ isSubmitting, errors, touched }) => (
                <Form className="flex flex-col">
                  <div className={`relative ${errors.email && touched.email ? 'mb-8' : 'mb-4'}`}>
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2 flex flex-col items-center justify-center">
                      <img 
                        src={EmailIcon} 
                        alt="Email" 
                        className="w-5 h-5"
                      />
                    </div>
                    <Field
                      type="email"
                      name="email"
                      placeholder="Email"
                      disabled={isLoading}
                      className={`w-full p-3 pl-12 border ${errors.email && touched.email ? 'border-red-500' : 'border-gray-300'} rounded-lg disabled:cursor-not-allowed`}
                    />
                    {errors.email && touched.email && (
                      <div className="text-red-500 text-sm mt-1 absolute">{errors.email}</div>
                    )}
                  </div>
                  <div className={`relative ${errors.password && touched.password ? 'mb-10' : 'mb-6'}`}>
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2 flex flex-col items-center justify-center">
                      <img 
                        src={PasswordIcon} 
                        alt="Password" 
                        className="w-5 h-5"
                      />
                    </div>
                    <Field
                      type="password"
                      name="password"
                      placeholder="Password"
                      disabled={isLoading}
                      className={`w-full p-3 pl-12 border ${errors.password && touched.password ? 'border-red-500' : 'border-gray-300'} rounded-lg disabled:cursor-not-allowed`}
                    />
                    {errors.password && touched.password && (
                      <div className="text-red-500 text-sm mt-1 absolute">{errors.password}</div>
                    )}
                  </div>
                  <div className="mt-8">
                    <button
                      type="submit"
                      className="w-full bg-[#1F41BB] text-white rounded-lg p-3 hover:bg-[#1a379d] flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                      disabled={isLoading || isSubmitting}
                    >
                      {isLoading || isSubmitting ? (
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      ) : (
                        'Log in'
                      )}
                    </button>
                  </div>
                </Form>
              )}
            </Formik>

            {/* Sign Up Link */}
            <p className="text-center mt-6 text-gray-600">
              Not registered yet?{' '}
              <a href="/signup" className={`text-[#1F41BB] hover:underline ${isLoading ? 'pointer-events-none opacity-50' : ''}`}>
                Create an account
              </a>
            </p>
          </div>
        </div>

        {/* Copyright text */}
        <div className="text-[#6C757D] text-base font-light leading-5 tracking-[-0.32px]">
          Copyright © Limited Liability Company KALOCS
        </div>
      </div>

      {/* Right side - Image */}
      <div className="w-1/2 flex items-center justify-center">
        <img
          src={LoginSideImage}
          alt="Login illustration"
          className="max-w-[80%] h-auto"
        />
      </div>
    </div>
  );
};

export default Login;
