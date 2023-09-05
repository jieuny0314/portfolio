import { createReducer, combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storageSession from "redux-persist/lib/storage/session";
import { setNaviValue } from "./action";

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
  storage: storageSession,
  whitelist: ["naviValue"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
