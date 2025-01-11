import React, { useState } from 'react';
import GoogleIcon from '../../assets/loginPageIcon/GoogleIcon.png';
import LoginSideImage from '../../assets/LoginSideImage.png';
import InternLogo from '../../assets/orgLogo/InternLogoColored.png';
import EmailIcon from '../../assets/loginPageIcon/Email_Icon.svg';
import PasswordIcon from '../../assets/loginPageIcon/PasswordIcon.svg';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleGoogleLogin = () => {
    // Implement Google login logic
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Implement regular login logic
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
              className="w-full flex items-center justify-center gap-2 border border-gray-300 rounded-lg p-3 mb-4 hover:bg-gray-50"
            >
              <img src={GoogleIcon} alt="Google" className="w-5 h-5" />
              <span>Login by Google</span>
            </button>

            <div className="w-full h-1 mb-4" style={{background: "linear-gradient(270deg, #BFB0FF 0%, #0B00B9 49%, #BFB0FF 100%)"}}></div>

            {/* Login Form */}
            <form onSubmit={handleLogin}>
              <div className="mb-4 relative">
                <img 
                  src={EmailIcon} 
                  alt="Email" 
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  className="w-full p-3 pl-12 border border-gray-300 rounded-lg"
                />
              </div>
              <div className="mb-6 relative">
                <img 
                  src={PasswordIcon} 
                  alt="Password" 
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
                />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  className="w-full p-3 pl-12 border border-gray-300 rounded-lg"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#1F41BB] text-white rounded-lg p-3 hover:bg-[#1a379d]"
              >
                Log in
              </button>
            </form>

            {/* Sign Up Link */}
            <p className="text-center mt-6 text-gray-600">
              Not registered yet?{' '}
              <a href="/signup" className="text-[#1F41BB] hover:underline">
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
