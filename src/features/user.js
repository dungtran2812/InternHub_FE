import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  isFirstLogin: false,
  accessToken: "",
  userId: "",
  username: "",
  fullName: "",
  role: "",
  avtUrl: "",
  major: "",
  phone: "",
  accessTokenExpired: false,
  email: "",
  gender: "",
  gpa: null, 
  company: {
    id: ""
  },
  search: {
    industry: null,
    jobFunction: null,
    location: null,
    searchText: null
  },
  isPremium: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setPhone(state, action) {
      state.phone = action.payload;
    },
    setMajor(state, action) {
      state.major = action.payload;
    },
    setResume(state, action) {
      state.resume = action.payload;
    },
    setGpa(state, action) {
      state.gpa = action.payload;
    },
    setIsLoggedIn(state, action) {
      state.isLoggedIn = action.payload;
    },
    setFirstLogin(state, action) {
      state.isFirstLogin = action.payload;
    },
    setAccessToken(state, action) {
      state.accessToken = action.payload;
    },
    setUserId(state, action) {
      state.userId = action.payload;
    },
    setUsername(state, action) {
      state.username = action.payload;
    },
    setFullName(state, action) {
      state.fullName = action.payload;
    },
    setAvtUrl(state, action) {
      state.avtUrl = action.payload;
    },
    setRole(state, action) {
      state.role = action.payload;
    },
    setEmail(state, action) {
      state.email = action.payload;
    },
    setGender(state, action) {
      state.gender = action.payload;
    },
    setAccessTokenExpired(state, action) {
      state.accessTokenExpired = action.payload;
    },
    setSearch(state, action) {
      state.search = action.payload;
    },
    setCompany(state, action) {
      state.company = action.payload;
    },
    setIsPremium(state, action) {
      state.isPremium = action.payload;
    },
    clearUserInfo(state) {
      state.isLoggedIn = false;
      state.isFirstLogin = false;
      state.accessToken = "";
      state.username = "";
      state.avtUrl = "";
      state.role = "";
      state.email = "";
      state.major = "";
      state.phone = "";
      state.fullName = "";
      state.gender = ""; 
      state.resume = ""; 
      state.gpa = null;
      state.company = { id: "" }; // Reset company khi đăng xuất
      state.isPremium = null;
    },
    setUser(state, action) {
      const { 
        username, avtUrl, role, email, accessToken, isLoggedIn, 
        isFirstLogin, accessTokenExpired, gender, search, major, 
        phone, fullName, resume, gpa, company 
      } = action.payload;
      
      state.username = username;
      state.phone = phone;
      state.fullName = fullName;
      state.major = major;
      state.avtUrl = avtUrl;
      state.role = role;
      state.email = email;
      state.accessToken = accessToken;
      state.isLoggedIn = isLoggedIn;
      state.isFirstLogin = isFirstLogin;
      state.accessTokenExpired = accessTokenExpired;
      state.gender = gender; 
      state.resume = resume; 
      state.search = search;
      state.gpa = gpa;
      state.company = company || { id: "" }; // Cập nhật company, nếu không có thì giữ giá trị mặc định
    }
  },
});

export const {
  setUser,
  setMajor,
  setPhone,
  setFullName,
  setIsLoggedIn,
  setUserId,
  setFirstLogin,
  setAccessToken,
  setUsername,
  setEmail,
  setRole,
  setGender,
  setResume,
  setAvtUrl,
  setGpa,
  setCompany,
  clearUserInfo,
  setAccessTokenExpired,
  setSearch,
  setIsPremium
} = userSlice.actions;

export default userSlice.reducer;
