import React from 'react'
import DynamicDataTable from '../components/ReactTable/DynamicDataTable';
import { API } from '../hooks/useBaseURL/useBaseURL';
import Backend from '../layouts/Backend'

function ProductList() {


    const columns = [
        { Header: "ID", accessor: "id" },
        { Header: "Product Name", accessor: "product_name" },
        { Header: "Description", accessor: "description" },
        { Header: "Price", accessor: "price" },
        { Header: "Date", accessor: "date_insert" },
    ];

    const endpoint = API + "product";
    console.log(API);
    return (
        <>
            <Backend pageheading="Catalog Page">
                <DynamicDataTable
                    title="Users"
                    columns={columns}
                    apiUrl={endpoint}
                    pageSize={1}
                />
            </Backend>
        </>
    )
}

export default ProductList