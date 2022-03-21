import axios from "./index";

const getAllBlogs = async () => {
    return await axios.get("blog/get-all-blogs");
};

const getBlogById = async (id) => {
    return await axios.get(`blog/get-blog-by-id?id=${id}`);
};

const addNewBlog = async (data) => {
    return await axios.post("blog/add-new-blog", data, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
};

const uploads = async () => {
    return await axios.post("blog/uploads");
};

const updateBlog = async (data) => {
    return await axios.put("blog/update-blog", data, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
};

const deleteBlogById = async (id) => {
    return await axios.delete(`blog/delete-blog-by-id?id=${id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
};

export default {
    getAllBlogs,
    getBlogById,
    addNewBlog,
    uploads,
    deleteBlogById,
    updateBlog,
};
