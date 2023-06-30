import { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import NativeSelect from '@mui/material/NativeSelect';
import Button from '@mui/material/Button';

function Overview() {

    const [selectedRowId, setSelectedRowId] = useState(null);
    const [selectedPositions, setSelectedPositions] = useState({});
    const positionOptions = [
        { value: 'Administrator', label: 'Administrator' },
        { value: 'Implementer', label: 'Implementer' },
        { value: 'Approver', label: 'Approver' },
        { value: 'Supporter', label: 'Supporter' },
        { value: 'Assignee', label: 'Assignee' },
    ];
    const renderPositionCell = (params) => {
        const { id } = params.row;
        const handleChange = (event) => {
            setSelectedPositions((prevState) => ({
                ...prevState,
                [id]: event.target.value,
            }));
        };

        if (selectedRowId === id) {
            return (
                <NativeSelect value={selectedPositions[id] || ''} onChange={handleChange}>
                    {positionOptions.map((option) => (
                        <option value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </NativeSelect>
            );
        }
        return params.value;
    }

    const handleRowClick = (id) => {
        setSelectedRowId(id);
    }
    const columns = [
        { field: 'id', headerName: 'No.', width: 70 },
        { field: 'name', headerName: 'Name', width: 200 },
        { field: 'email', headerName: 'E-Mail', width: 250 },
        { field: 'position', headerName: 'Position', width: 150, renderCell: renderPositionCell, onClick: (params) => handleRowClick(params.row.id) },
    ];

    const [rows, setRows] = useState([
        { id: 1, name: 'Sarah Thompson', email: 'sarah.thompson@example.com', position: 'Adminstrator' },
        { id: 2, name: 'David Anderson', email: ' david.anderson@example.com', position: 'Approver' },
        { id: 3, name: 'Olivia Martinez', email: ' olivia.martinez@example.com', position: 'Assignee' },
        { id: 4, name: 'William Taylor', email: 'william.taylor@example.com', position: 'Implementer' },
        { id: 5, name: 'Sophia Lee', email: 'sophia.lee@example.com', position: 'Supporter' },
    ]);

    return (
        <div>
            <div style={{ display: 'flex' }}>
                <p style={{ fontWeight: 'bold', marginRight: '10px' }}>Description: </p>
                <p> The AI Chat Application project is an innovative software application that leverages artificial intelligence (AI) technologies to provide a conversational interface for users. This application aims to facilitate seamless communication between users and the computer system by enabling natural language conversations.</p>
            </div>
            <div>
                <p style={{ fontWeight: 'bold', marginTop: '10px' }}>Member </p>
                <div style={{ height: 400, width: '100%' }}>
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        initialState={{
                            pagination: {
                                paginationModel: { page: 0, pageSize: 5 },
                            },
                        }}
                        pageSizeOptions={[5, 10]}
                    />

                </div>
            </div>
            {/* <div style={{ float: 'right' }}>
                <Button variant="contained">Save</Button>
            </div> */}
        </div>
    );
}
export default Overview;