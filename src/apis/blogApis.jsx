import axios from "./index";

const getAllBlogs = async () => {
    return await axios.get("blog/get-all-blogs");
};

const getBlogById = async (id) => {
    return await axios.getBlogById(`blog/get-blog-by-id?id=${id}`);
};

export default {
    getAllBlogs,
    getBlogById,
};
