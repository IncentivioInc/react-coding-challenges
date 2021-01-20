import iReducer from "../redux/i.slice";
import nReducer from "../redux/n.slice";
import cReducer from "../redux/c.slice";
import eReducer from "../redux/e.slice";
import tReducer from "../redux/t.slice";
import vReducer from "../redux/v.slice";
import oReducer from "../redux/o.slice";
import resultsReducer from "./results.slice";
import { combineReducers } from "@reduxjs/toolkit";

export default combineReducers({
  i: iReducer,
  n: nReducer,
  c: cReducer,
  e: eReducer,
  t: tReducer,
  v: vReducer,
  o: oReducer,
  results: resultsReducer,
});
