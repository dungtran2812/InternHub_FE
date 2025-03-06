import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  avtUrl: "",
  jobTitle: "",
  personalInfo: {
    fullName: "",
    gender: "",
    email: "",
    phone: "",
    socialLink: "",
    location: "",
  },
  education: {
    schoolName: "",
    major: "",
    startDate: "",
    endDate: "",
    description: "",
  },
  skills: {
    hardSkills: [],
    softSkills: [],
  },
  experience: {
    items: [
      {
        startDate: "",
        endDate: "",
        companyName: "",
        position: "",
        description: "",
      }
    ]
  },
  certificates: {
    items: [
      {
        date: "",
        title: "",
      }
    ]
  },
  honorsAndAwards: {
    items: [
      {
        date: "",
        title: "",
      }
    ]
  }
};
const cvSlice = createSlice({
  name: "cv",
  initialState,
  reducers: {
    setAvt: (state, action) => {
        state.avtUrl = action.payload;;
    },
    setJobTitle: (state, action) => {
        state.jobTitle = action.payload;;
    },
    // Personal Information
    updatePersonalInfo: (state, action) => {
      state.personalInfo = { ...state.personalInfo, ...action.payload };
    },

    // Education
    updateEducation: (state, action) => {
      state.education = { ...state.education, ...action.payload };
    },

    // Skills
    addPrimarySkill: (state, action) => {
      state.skills.hardSkills.push(action.payload);
    },
    updatePrimarySkill: (state, action) => {
      const { index, value } = action.payload;
      state.skills.hardSkills[index] = value;
    },
    removePrimarySkill: (state, action) => {
      if (typeof action.payload === 'number') {
        // Remove by index
        state.skills.hardSkills = state.skills.hardSkills.filter((_, index) => index !== action.payload);
      } else {
        // Remove by value
        state.skills.hardSkills = state.skills.hardSkills.filter(skill => skill !== action.payload);
      }
    },
    addSecondarySkill: (state, action) => {
      state.skills.softSkills.push(action.payload);
    },
    updateSecondarySkill: (state, action) => {
      const { index, value } = action.payload;
      state.skills.softSkills[index] = value;
    },
    removeSecondarySkill: (state, action) => {
      if (typeof action.payload === 'number') {
        // Remove by index
        state.skills.softSkills = state.skills.softSkills.filter((_, index) => index !== action.payload);
      } else {
        // Remove by value
        state.skills.softSkills = state.skills.softSkills.filter(skill => skill !== action.payload);
      }
    },

    // Experience
    addExperience: (state, action) => {
      state.experience.items.push(action.payload);
    },
    updateExperience: (state, action) => {
      const { index, data } = action.payload;
      state.experience.items[index] = { ...state.experience.items[index], ...data };
    },
    removeExperience: (state, action) => {
      state.experience.items = state.experience.items.filter(
        (_, index) => index !== action.payload
      );
    },

    // Certificates
    addCertificate: (state, action) => {
      state.certificates.items.push(action.payload);
    },
    updateCertificate: (state, action) => {
      const { index, data } = action.payload;
      state.certificates.items[index] = { ...state.certificates.items[index], ...data };
    },
    removeCertificate: (state, action) => {
      state.certificates.items = state.certificates.items.filter(
        (_, index) => index !== action.payload
      );
    },

    // Honors and Awards
    addHonorAward: (state, action) => {
      state.honorsAndAwards.items.push(action.payload);
    },
    updateHonorAward: (state, action) => {
      const { index, data } = action.payload;
      state.honorsAndAwards.items[index] = { ...state.honorsAndAwards.items[index], ...data };
    },
    removeHonorAward: (state, action) => {
      state.honorsAndAwards.items = state.honorsAndAwards.items.filter(
        (_, index) => index !== action.payload
      );
    }
  }
});
export const {
  setAvt, 
  setJobTitle,
  addExperience,
  updateEducation,
  updatePersonalInfo,
  updateExperience, 
  removeExperience, 
  addCertificate, 
  updateCertificate, 
  removeCertificate, 
  addHonorAward, 
  updateHonorAward, 
  removeHonorAward,
  addPrimarySkill,
  updatePrimarySkill,
  removePrimarySkill,
  addSecondarySkill,
  updateSecondarySkill,
  removeSecondarySkill
} = cvSlice.actions;

export default cvSlice.reducer;
