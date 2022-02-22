import axios from "./index";

const login = async (data) => {
    return await axios.post("/login", data);
};

export default {
    login,
};
