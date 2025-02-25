import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  isFirstLogin: false,
  accessToken: "",
  userId: "",
  username: "",
  fullname: "",
  role: "",
  avatar: "",
  accessTokenExpired: false,
  email: "",
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
    setFullname(state, action) {
      state.fullname = action.payload;
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
    setAccessTokenExpired(state, action) {
      state.accessToken = action.payload;
    },
    setSearch(state, action) {
      state.search = action.payload
    },
    signout(state) {
      state.isLoggedIn = false;
      state.isFirstLogin = false;
      state.accessToken = "";
      state.username = "";
      state.avatar = "";
      state.role = [];
      state.email = "";
      localStorage.removeItem("user");
    },
    setUser(state, action) {
      const { username, avatar, role, email, accessToken, isLoggedIn, isFirstLogin, accessTokenExpired, search } = action.payload;
      state.username = username;
      state.avatar = avatar;
      state.role = role;
      state.email = email;
      state.accessToken = accessToken;
      state.isLoggedIn = isLoggedIn;
      state.isFirstLogin = isFirstLogin;
      state.accessTokenExpired = accessTokenExpired;
      state.search = search;
    }
  },
});

export const {
  setUser,
  setFullname,
  setAvatar,
  setIsLoggedIn,
  setUserId,
  setFirstLogin,
  setAccessToken,
  setUsername,
  setEmail,
  setRole,
  signout,
  setAccessTokenExpired,
  setSearch
} = userSlice.actions;

export default userSlice.reducer;
