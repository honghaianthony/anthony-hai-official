import React, { useState, useEffect } from "react";
import Table from "../Table/Table";
import { Link, useParams } from "react-router-dom";
import blogApis from "../../apis/blogApis";
import { toast } from "react-toastify";
import "./Dashboard.scss";
const blogData = {
    title: ["id", "title", "created at", "updated at", "see details", "delete"],
};

const renderOrderTitle = (item, index) => <th key={index}>{item}</th>;

function getFormattedDate(date) {
    return new Date(date).toLocaleDateString();
}

function Dashboard() {
    const [data, setData] = useState([]);
    const { id } = useParams();
    useEffect(async () => {
        const res = await blogApis.getAllBlogs();
        setData(res);
    }, []);

    const handleDelete = async (blog) => {
        try {
            const res = await blogApis.deleteBlogById(blog.id);
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

    const renderOrderContent = (item, index) => (
        <tr key={index}>
            <td>{item.id}</td>
            <td>{item.title}</td>
            <td>{getFormattedDate(item.createdAt)}</td>
            <td>{getFormattedDate(item.updatedAt)}</td>
            <td>
                <Link to={`/blog-admin/update/${item.id}`}>
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
                            limit="5"
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
