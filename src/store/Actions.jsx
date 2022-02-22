import { LOGIN, LOGOUT, RELOAD } from "./constants";

export const login = (payload) => {
  return {
    type: LOGIN,
    payload,
  };
};
export const logout = (payload) => {
  return {
    type: LOGOUT,
    payload,
  };
};
export const reload = (payload) => {
  return {
    type: RELOAD,
    payload,
  };
};
