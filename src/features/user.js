import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  isFirstLogin: false,
  accessToken: "",
  userId: "",
  username: "",
  fullName: "",
  role: "",
  avatar: "",
  major: "",
  phone: "",
  accessTokenExpired: false,
  email: "",
  gender: "", // Thêm field gender
  search: {
    industry: null,
    jobFunction: null,
    location: null,
    searchText: null
  },
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
    setAvatar(state, action) {
      state.avatar = action.payload;
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
      state.accessToken = action.payload;
    },
    setSearch(state, action) {
      state.search = action.payload;
    },
    signout(state) {
      state.isLoggedIn = false;
      state.isFirstLogin = false;
      state.accessToken = "";
      state.username = "";
      state.avatar = "";
      state.role = "";
      state.email = "";
      state.major ="";
      state.phone = "";
      state.fullName = ""
      state.gender = ""; // Reset gender khi đăng xuất
      localStorage.removeItem("user");
    },
    setUser(state, action) {
      const { username, avatar, role, email, accessToken, isLoggedIn, isFirstLogin, accessTokenExpired, gender, search, major, phone, fullName } = action.payload;
      state.username = username;
      state.phone = phone;
      state.fullName = fullName;
      state.major = major;
      state.avatar = avatar;
      state.role = role;
      state.email = email;
      state.accessToken = accessToken;
      state.isLoggedIn = isLoggedIn;
      state.isFirstLogin = isFirstLogin;
      state.accessTokenExpired = accessTokenExpired;
      state.gender = gender; // Cập nhật gender
      state.search = search;
    }
  },
});

export const {
  setUser,
  setMajor,
  setPhone,
  setFullName,
  setAvatar,
  setIsLoggedIn,
  setUserId,
  setFirstLogin,
  setAccessToken,
  setUsername,
  setEmail,
  setRole,
  setGender, // Export action mới
  signout,
  setAccessTokenExpired,
  setSearch
} = userSlice.actions;

export default userSlice.reducer;
