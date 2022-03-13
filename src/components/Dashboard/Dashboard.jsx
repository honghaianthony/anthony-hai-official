import React, { useState, useEffect } from "react";
import Table from "../Table/Table";
import { Link } from "react-router-dom";
import blogApis from "../../apis/blogApis";
import projectApis from "../../apis/projectApis";
import { toast } from "react-toastify";
import "./Dashboard.scss";
const blogData = {
    title: ["id", "title", "created at", "updated at", "update", "delete"],
};

const projectDataTitle = {
    title: [
        "id",
        "title",
        "author name",
        "link project",
        "type project",
        "created at",
        "updated at",
        "update",
        "delete",
    ],
};

const renderOrderTitle = (item, index) => <th key={index}>{item}</th>;

function getFormattedDate(date) {
    return new Date(date).toLocaleDateString();
}

function Dashboard() {
    const [data, setData] = useState([]);
    const [projectData, setProjectData] = useState([]);

    useEffect(() => {
        async function asyncProject() {
            const res = await blogApis.getAllBlogs();
            setData(res);
        }
        asyncProject();
    }, []);
    useEffect(() => {
        async function asyncProject() {
            const res = await projectApis.getAllProjects();
            setProjectData(res);
        }
        asyncProject();
    }, []);

    const handleDelete = async (blog) => {
        try {
            const res = await blogApis.deleteBlogById(blog._id);
            if (res && res.errCode === 0) {
                const successList = await blogApis.getAllBlogs();
                setData(successList);
                toast.success("Deleted successfully");
            } else {
                toast.error("Deleted failed");
            }
        } catch (error) {
            console.log(error);
        }
    };

    const handleProjectDelete = async (project) => {
        try {
            const res = await projectApis.deleteProject(project._id);
            if (res && res.errCode === 0) {
                const successList = await projectApis.getAllProjects();
                setProjectData(successList);
                toast.success("Deleted successfully");
            } else {
                toast.error("Deleted failed");
            }
        } catch (error) {
            console.log(error);
        }
    };

    const renderOrderContent = (item, index) => (
        <tr key={index}>
            <td>{item._id}</td>
            <td>{item.title}</td>
            <td>{getFormattedDate(item.createdAt)}</td>
            <td>{getFormattedDate(item.updatedAt)}</td>
            <td>
                <Link to={`/blog-admin/update/${item._id}`}>
                    <button className="view-btn">Update</button>
                </Link>
            </td>
            <td>
                <Link to="/admin">
                    <button
                        className="view-btn-delete"
                        onClick={() => handleDelete(item)}
                    >
                        Delete
                    </button>
                </Link>
            </td>
        </tr>
    );

    const renderOrderProjectContent = (item, index) => (
        <tr key={index}>
            <td>{item._id}</td>
            <td>{item.title}</td>
            <td>{item.authorName}</td>
            <td>{item.linkProject}</td>
            <td>{item.typeProject}</td>
            <td>{getFormattedDate(item.createdAt)}</td>
            <td>{getFormattedDate(item.updatedAt)}</td>
            <td>
                <Link to={`/project-admin/update/${item._id}`}>
                    <button className="view-btn">Update</button>
                </Link>
            </td>
            <td>
                <Link to="/admin">
                    <button
                        className="view-btn-delete"
                        onClick={() => handleProjectDelete(item)}
                    >
                        Delete
                    </button>
                </Link>
            </td>
        </tr>
    );

    return (
        <div className="col-12">
            <div className="table-appearance">
                <div className="blog-table-header">Blog Lists</div>
                <div className="blog-table-content">
                    {data.length > 0 ? (
                        <Table
                            titleTable={blogData.title}
                            renderTitle={(item, index) =>
                                renderOrderTitle(item, index)
                            }
                            contentData={data}
                            renderData={(item, index) =>
                                renderOrderContent(item, index)
                            }
                            limit="3"
                        />
                    ) : (
                        ""
                    )}
                </div>
            </div>
            <div className="table-appearance">
                <div className="project-table-header">Project Lists</div>
                <div className="project-table-content">
                    {projectData.length > 0 ? (
                        <Table
                            titleTable={projectDataTitle.title}
                            renderTitle={(item, index) =>
                                renderOrderTitle(item, index)
                            }
                            contentData={projectData}
                            renderData={(item, index) =>
                                renderOrderProjectContent(item, index)
                            }
                            limit="3"
                        />
                    ) : (
                        ""
                    )}
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
