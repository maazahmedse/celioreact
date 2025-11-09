import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";
import "./DynamicDataTable.css";
import { useAuth, useClient } from "../../context/authContext";

export default function DynamicDataTable({
    columns,
    apiUrl,
    title = "Data Table",
    pageSize = 5,
}) {
    const [data, setData] = useState([]);
    const [totalPages, setTotalPages] = useState(1);
    const [totalItems, setTotalItems] = useState(0);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState("");

    const getCsrfToken = () => {
        // For Laravel - get from meta tag
        return document.querySelector('meta[name="csrf-token"]')?.getAttribute('content');
    };

    const { user } = useAuth();
    const config = {
        headers: { Authorization: `Bearer ${user?.token}` },
    };

    // ✅ Fetch paginated data from API
    const fetchData = async (page, pageSize) => {
        setLoading(true);
        try {
            const res = await axios.post(apiUrl,
                { page: page },
                config
            );

            const apiData = res.data.data.data || [];
            const apiTotalPages = res.data.data.last_page || 1;
            const apiTotalItems = res.data.data.total || apiData.length;


            setData(apiData);
            setTotalPages(apiTotalPages);
            setTotalItems(apiTotalItems);

        } catch (err) {
            console.error("API Error:", err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData(page, pageSize, search);
    }, [page, pageSize, search, apiUrl]);

    const memoColumns = useMemo(() => columns, [columns]);

    //if (loading) return <div className="loader">Loading...</div>;

    return (
        <>
            <table className="table datatable-pagination">
                <thead>
                    <tr>
                        {memoColumns.map((col) => (
                            <th key={col.accessor}>{col.Header}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.length > 0 && !loading ? (
                        data.map((item, i) => (
                            <tr key={i}>
                                {memoColumns.map((col) => (
                                    <td key={col.accessor}>
                                        {col.accessor.split(".").reduce((o, k) => (o ? o[k] : ""), item)}
                                    </td>
                                ))}
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={memoColumns.length} style={{ textAlign: "center" }}>
                                {(loading) ? <div className="loader">
                                    <img width="44px" height="41px" src="assets/img/pulse-loading.gif" />
                                </div> : "No data Found"}
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>


            <div className="datatable-footer">
                <div
                    className="dataTables_info"
                    id="DataTables_Table_1_info"
                    role="status"
                    aria-live="polite"
                >
                    Showing <strong>{page}</strong> of <strong>{totalPages}</strong> ({totalItems} entries)
                </div>

                <div
                    className="dataTables_paginate paging_simple"
                    id="DataTables_Table_1_paginate"
                >
                    {/* Prev Button */}
                    <a
                        onClick={() => page > 1 && setPage(page - 1)}
                        className={`paginate_button previous ${page === 1 ? "disabled" : ""}`}
                        aria-controls="DataTables_Table_1"
                        data-dt-idx="0"
                        tabIndex="0"
                        id="DataTables_Table_1_previous"
                        style={{
                            pointerEvents: page === 1 ? "none" : "auto",
                            opacity: page === 1 ? 0.5 : 1,
                            cursor: page === 1 ? "not-allowed" : "pointer",
                        }}
                    >
                        ← Prev
                    </a>

                    {/* Next Button */}
                    <a
                        onClick={() => page < totalPages && setPage(page + 1)}
                        className={`paginate_button next ${page === totalPages ? "disabled" : ""}`}
                        aria-controls="DataTables_Table_1"
                        data-dt-idx="1"
                        tabIndex="0"
                        id="DataTables_Table_1_next"
                        style={{
                            pointerEvents: page === totalPages ? "none" : "auto",
                            opacity: page === totalPages ? 0.5 : 1,
                            cursor: page === totalPages ? "not-allowed" : "pointer",
                        }}
                    >
                        Next →
                    </a>
                </div>
            </div>



            {/* <div className="table-container">
                <h2>{title}</h2>

                <table className="custom-table">
                    <thead>
                        <tr>
                            {memoColumns.map((col) => (
                                <th key={col.accessor}>{col.Header}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {data.length > 0 ? (
                            data.map((item, i) => (
                                <tr key={i}>
                                    {memoColumns.map((col) => (
                                        <td key={col.accessor}>
                                            {col.accessor.split(".").reduce((o, k) => (o ? o[k] : ""), item)}
                                        </td>
                                    ))}
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={memoColumns.length} style={{ textAlign: "center" }}>
                                    No data available
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table> */}

            {/* ✅ Server-side pagination controls */}
            {/* <div className="pagination">
                    <button onClick={() => setPage((p) => Math.max(p - 1, 1))} disabled={page === 1}>
                        ◀ Prev
                    </button>
                    <span>
                        Page <strong>{page}</strong> of <strong>{totalPages}</strong>
                    </span>
                    <button
                        onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
                        disabled={page === totalPages}
                    >
                        Next ▶
                    </button>
                </div>
            </div> */}
        </>
    );
}