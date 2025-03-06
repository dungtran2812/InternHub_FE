import { combineReducers } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import userReducer from "../features/user";
import appReducer from "../features/app";
import cvReducer from "../features/cv";

const userPersistConfig = {
  key: "user",
  storage: storage,
  // blacklist: ['isLoading']
};
const cvPersistConfig = {
  key: "cv",
  storage: storage,
};

const combinedReducer = combineReducers({
  app: appReducer,
  user: persistReducer(userPersistConfig, userReducer),
  cv: persistReducer(cvPersistConfig, cvReducer),
});

const rootReducer = (state, action) => {
  if (action.type === 'LOGOUT') {
    state = {};
  }
  return combinedReducer(state, action);
};
export default rootReducer;