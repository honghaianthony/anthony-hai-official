import { LOGIN, LOGOUT, RELOAD } from "./constants";
import jwtDecode from "jwt-decode";

const initState = {
    isAuthenticated: false,
    userId: -1,
    username: null,
    role: -1,
    fullname: "",
};

function Reducer(state, action) {
    switch (action.type) {
        case RELOAD:
            const token = localStorage.getItem("token");
            if (token) {
                const infoReload = jwtDecode(token);
                return {
                    isAuthenticated: true,
                    userId: infoReload.id,
                    username: infoReload.userName,
                    role: infoReload.roleId,
                    fullname: infoReload.fullname,
                };
            } else {
                return initState;
            }
        case LOGIN:
            localStorage.setItem("token", action.payload);
            const info = jwtDecode(action.payload);
            return {
                isAuthenticated: true,
                userId: info.id,
                username: info.userName,
                role: info.roleId,
                fullname: info.fullname,
            };
        case LOGOUT:
            localStorage.removeItem("token");
            return initState;

        default:
            throw new Error("Invalid action");
    }
}

export { initState };
export default Reducer;
