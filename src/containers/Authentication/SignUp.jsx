import React, { useState } from 'react';
import GoogleIcon from '../../assets/loginPageIcon/GoogleIcon.png';
import LoginSideImage from '../../assets/LoginSideImage.png';
import InternLogo from '../../assets/orgLogo/InternLogoColored.png';
import EmailIcon from '../../assets/loginPageIcon/Email_Icon.svg';
import PasswordIcon from '../../assets/loginPageIcon/PasswordIcon.svg';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const handleGoogleSignUp = () => {
    // Implement Google signup logic
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    // Implement regular signup logic
  };

  return (
    <div className="flex h-screen">
      {/* Left side - SignUp Form */}
      <div className="w-1/2 p-12 flex flex-col justify-between">
        <div>
          {/* Logo and Welcome Text */}
          <div className="mb-8">
            <div className="flex items-center mb-8">
              <img src={InternLogo} alt="InternHub Logo" className="h-8" />
              <span className="ml-2 text-xl font-bold text-[#19267D]">InternHub</span>
            </div>
            <h1 className="text-3xl font-bold text-[#19267D] mb-2">Create Account</h1>
            <p className="text-gray-500 mb-8">Start your journey with us</p>
          </div>

          {/* SignUp Form Container */}
          <div className="w-[90%]">
            {/* Google SignUp Button */}
            <button
              onClick={handleGoogleSignUp}
              className="w-full flex items-center justify-center gap-2 border border-gray-300 rounded-lg p-3 mb-4 hover:bg-gray-50"
            >
              <img src={GoogleIcon} alt="Google" className="w-5 h-5" />
              <span>Login by Google</span>
            </button>

            <div className="w-full h-1 mb-4" style={{background: "linear-gradient(270deg, #BFB0FF 0%, #0B00B9 49%, #BFB0FF 100%)"}}></div>

            {/* SignUp Form */}
            <form onSubmit={handleSignUp}>
              <div className="mb-4 relative">
                <img 
                  src={EmailIcon} 
                  alt="Full Name" 
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
                />
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Full Name"
                  className="w-full p-3 pl-12 border border-gray-300 rounded-lg"
                />
              </div>
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
              <div className="flex gap-4 mb-6">
                <div className="flex-1 relative">
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
                <div className="flex-1 relative">
                  <img 
                    src={PasswordIcon} 
                    alt="Confirm Password" 
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
                  />
                  <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Confirm Password"
                    className="w-full p-3 pl-12 border border-gray-300 rounded-lg"
                  />
                </div>
              </div>
              <div className="mb-4 flex items-start gap-2">
                <input
                  type="checkbox"
                  id="terms"
                  checked={agreedToTerms}
                  onChange={(e) => setAgreedToTerms(e.target.checked)}
                  className="mt-0.5"
                />
                <label htmlFor="terms" className="text-sm text-gray-600">
                  I agree to the{' '}
                  <a href="/terms" className="text-[#1F41BB] hover:underline">
                    Terms of Use
                  </a>{' '}
                  and{' '}
                  <a href="/privacy" className="text-[#1F41BB] hover:underline">
                    Privacy Policy
                  </a>{' '}
                  of InternHub
                </label>
              </div>
              <button
                type="submit"
                className="w-full bg-[#1F41BB] text-white rounded-lg p-3 hover:bg-[#1a379d]"
                disabled={!agreedToTerms}
              >
                Sign up
              </button>
            </form>

            {/* Login Link */}
            <p className="text-center mt-6 text-gray-600">
              Already have an account?{' '}
              <a href="/login" className="text-[#1F41BB] hover:underline">
                Log in
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
          alt="Sign up illustration"
          className="max-w-[80%] h-auto"
        />
      </div>
    </div>
  );
};

export default SignUp;
