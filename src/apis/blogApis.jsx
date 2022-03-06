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

const updateBlog = async (data) => {
    return await axios.put("blog/update-blog", data);
};

const deleteBlogById = async (id) => {
    return await axios.delete(`blog/delete-blog-by-id?id=${id}`);
};

export default {
    getAllBlogs,
    getBlogById,
    addNewBlog,
    uploads,
    deleteBlogById,
    updateBlog,
};
