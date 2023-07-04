import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { DataGrid } from '@mui/x-data-grid';
import NativeSelect from '@mui/material/NativeSelect';
import Button from '@mui/material/Button';
import { projectDetail } from '../../../_mock/project_data';

function Overview() {

    const [selectedRowId, setSelectedRowId] = useState(null);
    const [selectedPositions, setSelectedPositions] = useState({});
    const positionOptions = [
        { value: 'Administrator', label: 'Administrator' },
        { value: 'Implementer', label: 'Implementer' },
        { value: 'Viewer', label: 'Viewer' },
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

    const handleIconClick = (rows, row) => {
        console.log(row.id);
        removeItem(row.id);
    }
    const handleRowClick = (id) => {
        setSelectedRowId(id);
    }
    const columns = [
        { field: 'id', headerName: 'No.', width: 70 },
        { field: 'name', headerName: 'Name', width: 200 },
        { field: 'email', headerName: 'E-Mail', width: 250 },
        { field: 'role', headerName: 'Role', width: 150, renderCell: renderPositionCell, onClick: (params) => handleRowClick(params.row.id) },
    ];

    const [rows, setRows] = useState(projectDetail[1].member);

    const removeItem = (id) => {
        const updatedRows = rows.filter(row => row.id !== id);
        setRows(updatedRows);
    }

    return (
        <div>
            <div style={{ display: 'flex' }}>
                <p style={{ fontWeight: 'bold', marginRight: '10px' }}>Description: </p>
                <p>{projectDetail[1].description}</p>
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
            {/* <div style={{float:'right'}}>
                <Button variant="contained">Save</Button>
            </div> */}
        </div>
    );
}
export default Overview;