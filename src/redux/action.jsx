import { createAction } from "@reduxjs/toolkit";

const setNaviValue = createAction("naviValue/setNaviValue");
const setPopUp = createAction("popUp/setPopUp");
const setProjectNum = createAction("projectNum/setProjectNum");
export { setNaviValue, setPopUp, setProjectNum };
