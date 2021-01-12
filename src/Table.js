import {AgGridReact} from "ag-grid-react";
import React, {useState} from "react";
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import faker from "faker";

const columns = [
    {
        headerName: "First Name",
        field: "firstName"
    },
]

let currentId = 0;

const generateData = () =>
    Array.from({length: 1}, () => ({
        id: currentId++,
        firstName: faker.name.firstName()
    }))

export const Table = () => {

    const [rowData, setRowData] = useState(generateData());

    const changeData = () => {
        setRowData(generateData())
    }

    return <div style={{height: 'calc(90vh)'}}
                className="ag-theme-balham colour-lever-table">
        <button onClick={changeData} data-testid="change-data-button">Change data</button>
        <AgGridReact
            rowData={rowData}
            columnDefs={columns}
            immutableData={true}
            getRowNodeId={(data) => data.id}
        />
    </div>;
}