import React from 'react';
import settingIcon from '@/assets/sidebarIcon/settingIcon.svg';
import { Link } from 'react-router-dom';

const CompanyProfile = ({ 
  name = "FPT Software",
  email = "FA.HCM@fpt.com",
  logo = "/path-to-fpt-logo.png",
  address = "Saigon Hi-tech Park, Tan Phu Ward, Thu Duc, Ho Chi Minh City",
  phone = "028.3736.2323",
  website = "https://www.fpt-software.com/",
  employeeCount = "10000+ employees",
  description = "FPT Software is a member company of FPT Corporation. Established in 1999, FPT Software is currently a company specializing in providing software services and solutions to international customers with more than 28,000 employees, present in 27 countries worldwide. For many years, FPT Software has been voted the Most Favorite Employer and is in the TOP of companies with the best working environment in Asia."
}) => {
  return (
    <div className="w-[320px] p-6 border-l bg-white">
      <div className="space-y-6">
        {/* Header with Settings */}
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-[#1a2b6d]">Company profile</h2>
          <Link to={'recruiter-profile'} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <img src={settingIcon} alt="Settings" className="w-5 h-5 text-gray-600" />
          </Link>
        </div>

        {/* Company Logo and Name */}
        <div className="text-center">
          <img 
            src={logo} 
            alt={name} 
            className="h-16 mx-auto mb-3"
          />
          <h3 className="text-xl font-bold text-[#2E58FF]">{name}</h3>
          <p className="text-gray-600">{email}</p>
        </div>

        {/* Company Details */}
        <div className="space-y-4">
          {/* Location */}
          <div className="flex items-start gap-3">
            <svg className="w-5 h-5 mt-1 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <p className="text-sm text-gray-600">{address}</p>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-3">
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <p className="text-sm text-gray-600">{phone}</p>
          </div>

          {/* Website */}
          <div className="flex items-center gap-3">
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
            </svg>
            <a 
              href={website}
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-blue-600 hover:underline"
            >
              {website}
            </a>
          </div>

          {/* Employee Count */}
          <div className="flex items-center gap-3">
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <p className="text-sm text-gray-600">{employeeCount}</p>
          </div>
        </div>

        <hr className="my-6 border-black" />

        {/* Company Description */}
        <div className="text-sm text-gray-600">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default CompanyProfile;