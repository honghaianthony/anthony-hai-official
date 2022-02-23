import React, { useState } from "react";

import "./Table.scss";

function Table(props) {
    const initData =
        props.limit && props.contentData
            ? props.contentData.slice(0, Number(props.limit))
            : props.contentData;

    const [data, setData] = useState(initData);

    let pages = 1,
        range = [];

    if (props.limit !== undefined) {
        let page = Math.floor(props.contentData.length / Number(props.limit));
        pages =
            props.contentData.length % Number(props.limit) === 0
                ? page
                : page + 1;
        range = [...Array(pages).keys()];
    }

    const [currentPage, setCurrentPage] = useState(0);

    const selectPage = (page) => {
        const start = Number(props.limit) * page;
        const end = start + Number(props.limit);

        setData(props.contentData.slice(start, end));

        setCurrentPage(page);
    };
    return (
        <div>
            <div className="table-container">
                <table>
                    {props.titleTable && props.renderTitle ? (
                        <thead>
                            <tr>
                                {props.titleTable.map((item, index) =>
                                    props.renderTitle(item, index)
                                )}
                            </tr>
                        </thead>
                    ) : null}
                    {props.contentData && props.renderData ? (
                        <tbody>
                            {data.map((item, index) =>
                                props.renderData(item, index)
                            )}
                        </tbody>
                    ) : null}
                </table>
            </div>
            {pages > 1 ? (
                <div className="table-page-number">
                    {range.map((item, index) => (
                        <div
                            key={index}
                            className={`table-page-number-detail ${
                                currentPage === index ? "active" : ""
                            }`}
                            onClick={() => selectPage(index)}
                        >
                            {item + 1}
                        </div>
                    ))}
                </div>
            ) : null}
        </div>
    );
}

export default Table;
