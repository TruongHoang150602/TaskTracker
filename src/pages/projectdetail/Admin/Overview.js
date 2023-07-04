import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { DataGrid } from '@mui/x-data-grid';
import NativeSelect from '@mui/material/NativeSelect';
import Button from '@mui/material/Button';
import QuesDialog from '../../../components/toast/quesdialog';
import AlertDialog from '../../../components/toast/dialog';
import { projectDetail } from '../../../_mock/project_data';

function Overview() {

    // const [alter, setAlter] = useState(false);
    const [selectedRowId, setSelectedRowId] = useState(null);
    const [selectedPositions, setSelectedPositions] = useState({});
    // const [open, setOpen] = useState(false);
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

    const handleIconClick = (rows, row) => {
        console.log(row.id);
        // setAlter(true);
        // setOpen(true);
        removeItem(row.id);
    }
    // const hdlcl = () => {
    //     setAlter(false);
    //     setOpen(false);
    // }
    const handleRowClick = (id) => {
        setSelectedRowId(id);
    }
    const columns = [
        { field: 'id', headerName: 'No.', width: 70 },
        { field: 'name', headerName: 'Name', width: 200 },
        { field: 'email', headerName: 'E-Mail', width: 250 },
        { field: 'role', headerName: 'Role', width: 150, renderCell: renderPositionCell, onClick: (params) => handleRowClick(params.row.id) },
        {
            field: 'actions',
            headerName: 'Actions',
            width: 120,
            renderCell: (params) => (
                <div>
                    <IconButton
                        color="primary"
                        onClick={() => handleIconClick(rows, params.row)}
                    >
                        <DeleteIcon />
                        {/* {
                            alter &&
                            <QuesDialog open={open} handleClose={hdlcl} title="Dialog" ques="Do you want to delete ?" />
                        } */}
                    </IconButton>
                    <IconButton
                        color="primary"
                        onClick={() => handleRowClick(params.row.id)}
                    >
                        <EditIcon />
                    </IconButton>
                </div>
            ),
        },
    ];

    const [rows, setRows] = useState(projectDetail[0].member);

    const removeItem = (id) => {
        const updatedRows = rows.filter(row => row.id !== id);
        setRows(updatedRows);
    }

    return (
        <div>
            <div style={{ display: 'flex' }}>
                <p style={{ fontWeight: 'bold', marginRight: '10px' }}>Description: </p>
                <p>{projectDetail[0].description}</p>
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
            <div style={{ float: 'right' }}>
                <AlertDialog title="Save" ques="Notifications" content="Do you want to save all changes ?" />
            </div>
        </div>
    );
}
export default Overview;