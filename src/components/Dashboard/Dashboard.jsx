import React from "react";
import Table from "../Table/Table";
import "./Dashboard.scss";
const blogData = {
    title: ["id", "content", "created at", "updated at", "see details"],
    content: [
        {
            id: "#OD1711",
            user: "john doe",
            date: "17 Jun 2021",
            price: "$900",
            status: "shipping",
        },
        {
            id: "#OD1712",
            user: "frank iva",
            date: "1 Jun 2021",
            price: "$400",
            status: "paid",
        },
        {
            id: "#OD1713",
            user: "anthony baker",
            date: "27 Jun 2021",
            price: "$200",
            status: "pending",
        },
        {
            id: "#OD1712",
            user: "frank iva",
            date: "1 Jun 2021",
            price: "$400",
            status: "paid",
        },
        {
            id: "#OD1713",
            user: "anthony baker",
            date: "27 Jun 2021",
            price: "$200",
            status: "refund",
        },
        {
            id: "#OD1711",
            user: "john doe",
            date: "17 Jun 2021",
            price: "$900",
            status: "shipping",
        },
        {
            id: "#OD1712",
            user: "frank iva",
            date: "1 Jun 2021",
            price: "$400",
            status: "paid",
        },
        {
            id: "#OD1713",
            user: "anthony baker",
            date: "27 Jun 2021",
            price: "$200",
            status: "pending",
        },
        {
            id: "#OD1712",
            user: "frank iva",
            date: "1 Jun 2021",
            price: "$400",
            status: "paid",
        },
        {
            id: "#OD1713",
            user: "anthony baker",
            date: "27 Jun 2021",
            price: "$200",
            status: "refund",
        },
    ],
};

const renderOrderTitle = (item, index) => <th key={index}>{item}</th>;

const renderOrderContent = (item, index) => (
    <tr key={index}>
        <td>{item.id}</td>
        <td>{item.user}</td>
        <td>{item.date}</td>
        <td>{item.price}</td>
        <td>{item.status}</td>
    </tr>
);

function Dashboard() {
    return (
        <div className="col-12">
            <div className="table-appearance">
                <div className="blog-table-header">Blog Lists</div>
                <div className="blog-table-content">
                    <Table
                        titleTable={blogData.title}
                        renderTitle={(item, index) =>
                            renderOrderTitle(item, index)
                        }
                        contentData={blogData.content}
                        renderData={(item, index) =>
                            renderOrderContent(item, index)
                        }
                        limit="5"
                    />
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
