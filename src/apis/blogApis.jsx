import axios from "./index";

const getAllBlogs = async () => {
    return await axios.get("blog/get-all-blogs");
};

const getBlogById = async (id) => {
    return await axios.get(`blog/get-blog-by-id?id=${id}`);
};

const addNewBlog = async (data) => {
    return await axios.post("blog/add-new-blog", data);
};

const uploads = async () => {
    return await axios.post("blog/uploads");
};

export default {
    getAllBlogs,
    getBlogById,
    addNewBlog,
    uploads,
};
