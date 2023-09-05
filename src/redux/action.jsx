import { createAction } from "@reduxjs/toolkit";

const setNaviValue = createAction("naviValue/setNaviValue");
const setProjectsScroll = createAction("ProjectsScroll/setProjectsScroll");
export { setNaviValue, setProjectsScroll };
