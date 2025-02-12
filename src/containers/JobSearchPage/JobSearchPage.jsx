import React from "react";
import JobSearchBar from "@/components/JobSearchBar";
import { useSelector } from "react-redux";

export default function JobSearchPage() {
  const { industry, jobFunction, location, searchText } = useSelector((state) => state.rootReducer.user.search)
  return (
    <div>
      <h1 className="text-2xl font-bold">Job Search</h1>
      <JobSearchBar 
        initialIndustry={industry} 
        initialJobFunction={jobFunction} 
        initialLocation={location}
        initialSearchText={searchText}
      />
    </div>
  );
}