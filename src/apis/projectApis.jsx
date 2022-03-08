import axios from "./index";

const getAllProjects = async () => {
    return await axios.get("project/get-all-projects");
};

const getProjectById = async (id) => {
    return await axios.get(`project/get-project-by-id?id=${id}`);
};

const getProjectByType = async (type) => {
    return await axios.get(`project/get-project-by-type?typeProject=${type}`);
};

const addNewProject = async (data) => {
    return await axios.post("project/add-new-project", data);
};

const updateProject = async (data) => {
    return await axios.put("project/update-project", data);
};

const deleteProject = async (id) => {
    return await axios.delete(`project/delete-project-by-id?id=${id}`);
};

export default {
    getAllProjects,
    getProjectById,
    getProjectByType,
    addNewProject,
    updateProject,
    deleteProject,
};
