import { reset as cReset } from "./c.slice";
import { reset as eReset } from "./e.slice";
import { reset as iReset } from "./i.slice";
import { reset as nReset } from "./n.slice";
import { reset as oReset } from "./o.slice";
import { reset as tReset } from "./t.slice";
import { reset as vReset } from "./v.slice";

export const resetState = () => (dispatch) => {
  dispatch(cReset());
  dispatch(eReset());
  dispatch(iReset());
  dispatch(nReset());
  dispatch(oReset());
  dispatch(tReset());
  dispatch(vReset());
};
