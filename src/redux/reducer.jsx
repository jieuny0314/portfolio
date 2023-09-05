import { createReducer, combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storageSession from "redux-persist/lib/storage/session";
import { setNaviValue, setProjectsScroll } from "./action";

const initialState = {
  naviValue: 0,
  projectsScroll: false,
};

const naviValueReducer = createReducer(initialState.naviValue, (builder) => {
  builder.addCase(setNaviValue, (state, action) => action.payload);
});

const rootReducer = combineReducers({
  naviValue: naviValueReducer,
});

const persistConfig = {
  key: "root",
  storage: storageSession, // 사용할 스토리지를 정의해요.
  whitelist: ["naviValue"], // 유지 할 데이터를 정의해요
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
// reducer와 위에서 설정 한 persist설정을 합쳐요

export default persistedReducer;
