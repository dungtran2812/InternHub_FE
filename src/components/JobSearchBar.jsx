import { useState } from 'react';
import locationIcon from '../assets/locationIcon.svg';

const JobSearchBar = () => {
  const [industry, setIndustry] = useState('');
  const [location, setLocation] = useState('');
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    console.log('Tìm kiếm:', { searchText, industry, location });
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="flex items-center bg-white rounded-lg border border-gray-200 p-3">
        {/* Industry Select */}
        <div className="flex-1 px-4">
          <select
            value={industry}
            onChange={(e) => setIndustry(e.target.value)}
            className="w-full outline-none px-2 py-3 text-base bg-transparent cursor-pointer"
          >
            <option value="">Ngành nghề</option>
            <option value="tech">Công nghệ</option>
            <option value="finance">Tài chính</option>
            <option value="healthcare">Chăm sóc sức khỏe</option>
          </select>
        </div>

        {/* Vertical Divider */}
        <div className="w-px h-12 bg-black mx-2" />

        {/* Location Select with Icon */}
        <div className="flex-1 px-4">
          <div className="flex items-center gap-3">
            <img src={locationIcon} alt="Location" className="w-5 h-5" />
            <select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full outline-none py-3 text-base bg-transparent cursor-pointer"
            >
              <option value="">Địa điểm</option>
              <option value="ny">New York</option>
              <option value="sf">San Francisco</option>
              <option value="la">Los Angeles</option>
            </select>
          </div>
        </div>

        {/* Vertical Divider */}
        <div className="w-px h-12 bg-black mx-2" />

        {/* Search Text Input */}
        <div className="flex-1 px-4">
          <input
            type="text"
            placeholder="Nhập từ khóa tìm kiếm..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="w-full outline-none px-2 py-3 text-base"
          />
        </div>

        {/* Search Button */}
        <button
          onClick={handleSearch}
          className="bg-[#181D97] text-white px-8 py-3 ml-4 rounded-lg hover:opacity-90 transition-opacity"
        >
          Tìm kiếm
        </button>
      </div>
    </div>
  );
};

export default JobSearchBar;
