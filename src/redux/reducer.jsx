import { createReducer, combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storageSession from "redux-persist/lib/storage/session";
import { setNaviValue, setPopUp, setProjectNum } from "./action";

const initialState = {
  naviValue: 0,
  projectsScroll: false,
  popUp: false,
  projectNum: 0,
};

const naviValueReducer = createReducer(initialState.naviValue, (builder) => {
  builder.addCase(setNaviValue, (state, action) => action.payload);
});

const popUpReducer = createReducer(initialState.popUp, (builder) => {
  builder.addCase(setPopUp, (state, action) => action.payload);
});

const projectNumReducer = createReducer(initialState.projectNum, (builder) => {
  builder.addCase(setProjectNum, (state, action) => action.payload);
});

const rootReducer = combineReducers({
  naviValue: naviValueReducer,
  popUp: popUpReducer,
  projectNum: projectNumReducer,
});

const persistConfig = {
  key: "root",
  storage: storageSession,
  whitelist: ["naviValue", "projectNum"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
