import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { DataGrid } from '@mui/x-data-grid';
import NativeSelect from '@mui/material/NativeSelect';
import Button from '@mui/material/Button';
import QuesDialog from '../../../components/toast/quesdialog';
import AlertDialog from '../../../components/toast/dialog';

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
        { field: 'position', headerName: 'Position', width: 150, renderCell: renderPositionCell, onClick: (params) => handleRowClick(params.row.id) },
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

    const [rows, setRows] = useState([
        { id: 1, name: 'Nguyễn Trọng Quang', email: 'quang.nt205118@sis.hust.edu.vn', position: 'Administrator' },
        { id: 2, name: 'Hoàng Vân Trường', email: 'truong.hv205034@sis.hust.edu.vn', position: 'Implementer' },
        { id: 3, name: 'Tống Văn Phúc', email: 'phuc.tv200409@sis.hust.edu.vn', position: 'Implementer' },
        { id: 4, name: 'Trần Khắc Tuân', email: 'tuan.tk200440@sis.hust.edu.vn', position: 'Assignee' },
        { id: 5, name: 'Lê Duy Quý', email: 'quy.ld205018@sis.hust.edu.vn', position: 'Approver' },
        { id: 6, name: 'Nguyễn Thị Quỳnh Nga', email: 'nga.ntq204734@sis.hust.edu.vn', position: 'Supporter' },
    ]);

    const removeItem = (id) => {
        const updatedRows = rows.filter(row => row.id !== id);
        setRows(updatedRows);
    }

    return (
        <div>
            <div style={{ display: 'flex' }}>
                <p style={{ fontWeight: 'bold', marginRight: '10px' }}>Description: </p>
                <p> An e-commerce platform is an online marketplace where
                    sellers and buyers can trade products and services.
                    It offers convenience, a wide range of options, and
                    secure transactions.</p>
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