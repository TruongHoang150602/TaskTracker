import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import TabPanel from '@mui/lab/TabPanel';
import { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import './styles.css';
import { Card, Space, Avatar, Tooltip } from 'antd';
import Muuri from 'muuri';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import { AntDesignOutlined, UserOutlined } from '@ant-design/icons';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { Stack, Button } from '@mui/material';
import Iconify from '../../components/iconify';
import Filter from '../../components/Filter';
import HeaderBreadcrumbs from '../../components/HeaderBreadcrumbs';


export default function ProjectDetail() {

    const handleAddTask = () => {
        console.log("add task");
    }
    const handleAddMember = () => {
        console.log("add member");
    }

    useEffect(() => {
        const dragContainer = document.querySelector('.drag-container');
        const itemContainers = Array.from(document.querySelectorAll('.board-column-content'));
        const columnGrids = [];
        let boardGrid;

        // Init the column grids so we can drag those items around.
        itemContainers.forEach((container) => {
            const grid = new Muuri(container, {
                items: '.board-item',
                dragEnabled: true,
                dragSort: () => columnGrids,
                dragContainer,
                dragAutoScroll: {
                    targets: (item) => [
                        { element: window, priority: 0 },
                        { element: item.getGrid().getElement().parentNode, priority: 1 },
                    ],
                },
            })
                .on('dragInit', (item) => {
                    item.getElement().style.width = `${item.getWidth()}px`;
                    item.getElement().style.height = `${item.getHeight()}px`;
                })
                .on('dragReleaseEnd', (item) => {
                    item.getElement().style.width = '';
                    item.getElement().style.height = '';
                    item.getGrid().refreshItems([item]);
                })
                .on('layoutStart', () => {
                    boardGrid.refreshItems().layout();
                });

            columnGrids.push(grid);
        });

        // Init board grid so we can drag those columns around.
        boardGrid = new Muuri('.board', {
            dragEnabled: true,
            dragHandle: '.board-column-header',
        });

        // Clean up
        return () => {
            columnGrids.forEach((grid) => grid.destroy());
            boardGrid.destroy();
        };
    }, []);

    const [rows, setRows] = useState([
        { id: 1, name: 'Nguyễn Trọng Quang', email: 'quang.nt205118@sis.hust.edu.vn', position: 'Administrator' },
        { id: 2, name: 'Hoàng Vân Trường', email: 'truong.hv205034@sis.hust.edu.vn', position: 'Implementer' },
        { id: 3, name: 'Tống Văn Phúc', email: 'phuc.tv200409@sis.hust.edu.vn', position: 'Implementer' },
        { id: 4, name: 'Trần Khắc Tuân', email: 'tuan.tk200440@sis.hust.edu.vn', position: 'Implementer' },
        { id: 5, name: 'Lê Duy Quý', email: 'quy.ld205018@sis.hust.edu.vn', position: 'Implementer' },
        { id: 6, name: 'Nguyễn Thị Quỳnh Nga', email: 'nga.ntq204734@sis.hust.edu.vn', position: 'Viewer' },
    ]);

    const removeItem = (id) => {
        const updatedRows = rows.filter(row => row.id !== id);
        setRows(updatedRows);
        // Cập nhật state hoặc thực hiện các thao tác khác với mảng mới updatedRows
    }

    const columns = [
        { field: 'id', headerName: 'No.', width: 70 },
        { field: 'name', headerName: 'Name', width: 200 },
        { field: 'email', headerName: 'E-Mail', width: 250 },
        { field: 'position', headerName: 'Position', width: 150 },
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
                    </IconButton>
                    <IconButton
                        color="primary"
                    >
                        <EditIcon />
                    </IconButton>
                </div>
            ),
        },
    ];

    const handleIconClick = (rows, row) => {
        console.log(row.id);
        removeItem(row.id);
    }

    const [value, setValue] = React.useState('1');
    const [status, setStatus] = useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
        setStatus(newValue);
    };

    return (
        <div>
            <HeaderBreadcrumbs
                heading="E-Commerce Website"
                // links={[{ name: 'Dashboard', href: '' }, { name: 'Calendar' }]}
                action={
                    <Stack direction="row" spacing={2}>

                        <Filter data={['task', 'team']} />
                        {status === '1' ? (
                            <Button
                                variant="contained"
                                startIcon={<Iconify icon={'eva:plus-fill'} width={20} height={20} />}
                                onClick={handleAddTask}
                            >
                                New Task
                            </Button>
                        ) : (
                            <Button
                                variant="contained"
                                startIcon={<Iconify icon={'eva:plus-fill'} width={20} height={20} />}
                                onClick={handleAddMember}
                            >
                                Add Member
                            </Button>
                        )}

                    </Stack>

                }
            />
            <Box sx={{ width: '100%', typography: 'body1' }}>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList onChange={handleChange} aria-label="lab API tabs example">
                            <Tab label="Task" value="1" />
                            <Tab label="Overview" value="2" />
                        </TabList>
                    </Box>
                    <TabPanel value="1" style={{ padding: '0px', paddingTop: '20px' }}>
                        {/* <div> */}
                        <div className="board">
                            <div className="board-column new">
                                <div className="board-column-container">
                                    <div className="board-column-header">New Task</div>
                                    <div className="board-column-content-wrapper">
                                        <div className="board-column-content">
                                            <div className="board-item">
                                                <Space className="board-item-content" direction="vertical" size={16}>
                                                    <Card
                                                        size="small"
                                                        title="Shopping card interface code"
                                                        style={{
                                                            width: 165,
                                                        }}
                                                    >
                                                        <Avatar.Group>
                                                            <Tooltip title="Hoàng Trường">
                                                                <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1" />
                                                            </Tooltip>
                                                            <Tooltip title="Văn Phúc">
                                                                <Avatar
                                                                    style={{
                                                                        backgroundColor: '#f56a00',
                                                                    }}
                                                                >
                                                                    K
                                                                </Avatar>
                                                            </Tooltip>
                                                            <Tooltip title="Khắc Tuân" placement="top">
                                                                <Avatar
                                                                    style={{
                                                                        backgroundColor: '#87d068',
                                                                    }}
                                                                    icon={<UserOutlined />}
                                                                />
                                                            </Tooltip>
                                                            <Tooltip title="Duy Quý" placement="top">

                                                                <Avatar
                                                                    style={{
                                                                        backgroundColor: '#1677ff',
                                                                    }}
                                                                    icon={<AntDesignOutlined />}
                                                                />
                                                            </Tooltip>
                                                        </Avatar.Group>
                                                        <Space wrap>
                                                            <AccessAlarmIcon style={{ color: 'red' }} /> <p style={{ color: 'red' }}>June 22, 2023</p>
                                                            <Button style={{ backgroundColor: 'red', color: 'white' }} className="custom-button">
                                                                Hight
                                                            </Button>
                                                        </Space>
                                                    </Card>
                                                </Space>
                                            </div>
                                            <div className="board-item">
                                                <Space className="board-item-content" direction="vertical" size={16}>
                                                    <Card
                                                        size="small"
                                                        title="Write API for shopping cart interface"
                                                        style={{
                                                            width: 165,
                                                        }}
                                                    >
                                                        <Avatar.Group>
                                                            <Tooltip title="Hoàng Trường">
                                                                <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1" />
                                                            </Tooltip>
                                                            <Tooltip title="Văn Phúc">
                                                                <Avatar
                                                                    style={{
                                                                        backgroundColor: '#f56a00',
                                                                    }}
                                                                >
                                                                    K
                                                                </Avatar>
                                                            </Tooltip>
                                                            <Tooltip title="Khắc Tuân" placement="top">
                                                                <Avatar
                                                                    style={{
                                                                        backgroundColor: '#87d068',
                                                                    }}
                                                                    icon={<UserOutlined />}
                                                                />
                                                            </Tooltip>
                                                            <Tooltip title="Duy Quý" placement="top">

                                                                <Avatar
                                                                    style={{
                                                                        backgroundColor: '#1677ff',
                                                                    }}
                                                                    icon={<AntDesignOutlined />}
                                                                />
                                                            </Tooltip>
                                                        </Avatar.Group>
                                                        <Space wrap>
                                                            <AccessAlarmIcon style={{ color: 'red' }} /> <p style={{ color: 'red' }}>June 22, 2023</p>
                                                            <Button style={{ backgroundColor: '#ffba53', color: 'white' }} className="custom-button">
                                                                Medium
                                                            </Button>
                                                        </Space>
                                                    </Card>
                                                </Space>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="board-column todo">
                                <div className="board-column-container">
                                    <div className="board-column-header">In Progress</div>
                                    <div className="board-column-content-wrapper">
                                        <div className="board-column-content">
                                            <div className="board-item">
                                                <Space className="board-item-content" direction="vertical" size={16}>
                                                    <Card
                                                        size="small"
                                                        title="Code for login and registration interface"
                                                        style={{
                                                            width: 165,
                                                        }}
                                                    >
                                                        <Avatar.Group>
                                                            <Tooltip title="Hoàng Trường">
                                                                <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1" />
                                                            </Tooltip>
                                                            <Tooltip title="Văn Phúc">
                                                                <Avatar
                                                                    style={{
                                                                        backgroundColor: '#f56a00',
                                                                    }}
                                                                >
                                                                    K
                                                                </Avatar>
                                                            </Tooltip>
                                                            <Tooltip title="Khắc Tuân" placement="top">
                                                                <Avatar
                                                                    style={{
                                                                        backgroundColor: '#87d068',
                                                                    }}
                                                                    icon={<UserOutlined />}
                                                                />
                                                            </Tooltip>
                                                            <Tooltip title="Duy Quý" placement="top">

                                                                <Avatar
                                                                    style={{
                                                                        backgroundColor: '#1677ff',
                                                                    }}
                                                                    icon={<AntDesignOutlined />}
                                                                />
                                                            </Tooltip>
                                                        </Avatar.Group>
                                                        <Space wrap>
                                                            <AccessAlarmIcon style={{ color: 'red' }} /> <p style={{ color: 'red' }}>June 15, 2023</p>
                                                            <Button style={{ backgroundColor: 'red', color: 'white' }} className="custom-button">
                                                                Hight
                                                            </Button>
                                                        </Space>
                                                    </Card>
                                                </Space>
                                            </div>
                                            <div className="board-item">
                                                <Space className="board-item-content" direction="vertical" size={16}>
                                                    <Card
                                                        size="small"
                                                        title="Write API for login and registration"
                                                        style={{
                                                            width: 165,
                                                        }}
                                                    >
                                                        <Avatar.Group>
                                                            <Tooltip title="Hoàng Trường">
                                                                <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1" />
                                                            </Tooltip>
                                                            <Tooltip title="Văn Phúc">
                                                                <Avatar
                                                                    style={{
                                                                        backgroundColor: '#f56a00',
                                                                    }}
                                                                >
                                                                    K
                                                                </Avatar>
                                                            </Tooltip>
                                                            <Tooltip title="Khắc Tuân" placement="top">
                                                                <Avatar
                                                                    style={{
                                                                        backgroundColor: '#87d068',
                                                                    }}
                                                                    icon={<UserOutlined />}
                                                                />
                                                            </Tooltip>
                                                            <Tooltip title="Duy Quý" placement="top">

                                                                <Avatar
                                                                    style={{
                                                                        backgroundColor: '#1677ff',
                                                                    }}
                                                                    icon={<AntDesignOutlined />}
                                                                />
                                                            </Tooltip>
                                                        </Avatar.Group>
                                                        <Space wrap>
                                                            <AccessAlarmIcon style={{ color: 'red' }} /> <p style={{ color: 'red' }}>June 16, 2023</p>
                                                            <Button style={{ backgroundColor: '#68da6c', color: 'white' }} className="custom-button">
                                                                Easy
                                                            </Button>
                                                        </Space>
                                                    </Card>
                                                </Space>
                                            </div>
                                            <div className="board-item">
                                                <Space className="board-item-content" direction="vertical" size={16}>
                                                    <Card
                                                        size="small"
                                                        title="Home page interface code"
                                                        style={{
                                                            width: 165,
                                                        }}
                                                    >
                                                        <Avatar.Group>
                                                            <Tooltip title="Hoàng Trường">
                                                                <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1" />
                                                            </Tooltip>
                                                            <Tooltip title="Văn Phúc">
                                                                <Avatar
                                                                    style={{
                                                                        backgroundColor: '#f56a00',
                                                                    }}
                                                                >
                                                                    K
                                                                </Avatar>
                                                            </Tooltip>
                                                            <Tooltip title="Khắc Tuân" placement="top">
                                                                <Avatar
                                                                    style={{
                                                                        backgroundColor: '#87d068',
                                                                    }}
                                                                    icon={<UserOutlined />}
                                                                />
                                                            </Tooltip>
                                                            <Tooltip title="Duy Quý" placement="top">

                                                                <Avatar
                                                                    style={{
                                                                        backgroundColor: '#1677ff',
                                                                    }}
                                                                    icon={<AntDesignOutlined />}
                                                                />
                                                            </Tooltip>
                                                        </Avatar.Group>
                                                        <Space wrap>
                                                            <AccessAlarmIcon style={{ color: 'red' }} /> <p style={{ color: 'red' }}>June 18, 2023</p>
                                                            <Button style={{ backgroundColor: 'red', color: 'white' }} className="custom-button">
                                                                Hight
                                                            </Button>
                                                        </Space>
                                                    </Card>
                                                </Space>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="board-column working">
                                <div className="board-column-container">
                                    <div className="board-column-header">Submitted</div>
                                    <div className="board-column-content-wrapper">
                                        <div className="board-column-content">
                                            <div className="board-item">
                                                <Space className="board-item-content" direction="vertical" size={16}>
                                                    <Card
                                                        size="small"
                                                        title="Database design"
                                                        style={{
                                                            width: 165,
                                                        }}
                                                    >
                                                        <Avatar.Group>
                                                            <Tooltip title="Hoàng Trường">
                                                                <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1" />
                                                            </Tooltip>
                                                            <Tooltip title="Văn Phúc">
                                                                <Avatar
                                                                    style={{
                                                                        backgroundColor: '#f56a00',
                                                                    }}
                                                                >
                                                                    K
                                                                </Avatar>
                                                            </Tooltip>
                                                            <Tooltip title="Khắc Tuân" placement="top">
                                                                <Avatar
                                                                    style={{
                                                                        backgroundColor: '#87d068',
                                                                    }}
                                                                    icon={<UserOutlined />}
                                                                />
                                                            </Tooltip>
                                                            <Tooltip title="Duy Quý" placement="top">

                                                                <Avatar
                                                                    style={{
                                                                        backgroundColor: '#1677ff',
                                                                    }}
                                                                    icon={<AntDesignOutlined />}
                                                                />
                                                            </Tooltip>
                                                        </Avatar.Group>
                                                        <Space wrap>
                                                            <AccessAlarmIcon style={{ color: 'red' }} /> <p style={{ color: 'red' }}>June 01, 2023</p>
                                                            <Button style={{ backgroundColor: '#6f6f6f', color: 'white' }} className="custom-button">
                                                                Submitted
                                                            </Button>
                                                        </Space>
                                                    </Card>
                                                </Space>
                                            </div>
                                            <div className="board-item">
                                                <Space className="board-item-content" direction="vertical" size={16}>
                                                    <Card
                                                        size="small"
                                                        title="Add data to the database"
                                                        style={{
                                                            width: 165,
                                                        }}
                                                    >
                                                        <Avatar.Group>
                                                            <Tooltip title="Hoàng Trường">
                                                                <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1" />
                                                            </Tooltip>
                                                            <Tooltip title="Văn Phúc">
                                                                <Avatar
                                                                    style={{
                                                                        backgroundColor: '#f56a00',
                                                                    }}
                                                                >
                                                                    K
                                                                </Avatar>
                                                            </Tooltip>
                                                            <Tooltip title="Khắc Tuân" placement="top">
                                                                <Avatar
                                                                    style={{
                                                                        backgroundColor: '#87d068',
                                                                    }}
                                                                    icon={<UserOutlined />}
                                                                />
                                                            </Tooltip>
                                                            <Tooltip title="Duy Quý" placement="top">

                                                                <Avatar
                                                                    style={{
                                                                        backgroundColor: '#1677ff',
                                                                    }}
                                                                    icon={<AntDesignOutlined />}
                                                                />
                                                            </Tooltip>
                                                        </Avatar.Group>
                                                        <Space wrap>
                                                            <AccessAlarmIcon style={{ color: 'red' }} /> <p style={{ color: 'red' }}>June 01, 2023</p>
                                                            <Button style={{ backgroundColor: '#6f6f6f', color: 'white' }} className="custom-button">
                                                                Submitted
                                                            </Button>
                                                        </Space>
                                                    </Card>
                                                </Space>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="board-column done">
                                <div className="board-column-container">
                                    <div className="board-column-header">Completed</div>
                                    <div className="board-column-content-wrapper">
                                        <div className="board-column-content">
                                            <div className="board-item">
                                                <Space className="board-item-content" direction="vertical" size={16}>
                                                    <Card
                                                        size="small"
                                                        title="Write a specification for the project"
                                                        style={{
                                                            width: 165,
                                                        }}
                                                    >
                                                        <Avatar.Group>
                                                            <Tooltip title="Hoàng Trường">
                                                                <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1" />
                                                            </Tooltip>
                                                            <Tooltip title="Văn Phúc">
                                                                <Avatar
                                                                    style={{
                                                                        backgroundColor: '#f56a00',
                                                                    }}
                                                                >
                                                                    K
                                                                </Avatar>
                                                            </Tooltip>
                                                            <Tooltip title="Khắc Tuân" placement="top">
                                                                <Avatar
                                                                    style={{
                                                                        backgroundColor: '#87d068',
                                                                    }}
                                                                    icon={<UserOutlined />}
                                                                />
                                                            </Tooltip>
                                                            <Tooltip title="Duy Quý" placement="top">

                                                                <Avatar
                                                                    style={{
                                                                        backgroundColor: '#1677ff',
                                                                    }}
                                                                    icon={<AntDesignOutlined />}
                                                                />
                                                            </Tooltip>
                                                        </Avatar.Group>
                                                        <Space wrap>
                                                            <CheckCircleOutlineIcon style={{ color: 'green' }} /> <p style={{ color: 'green' }}>FINISHED!</p>
                                                            <Button style={{ backgroundColor: '#48409e', color: 'white' }} className="custom-button">
                                                                100
                                                            </Button>
                                                        </Space>
                                                    </Card>
                                                </Space>
                                            </div>
                                            <div className="board-item">
                                                <Space className="board-item-content" direction="vertical" size={16}>
                                                    <Card
                                                        size="small"
                                                        title="Design the interface of all websites"
                                                        style={{
                                                            width: 165,
                                                        }}
                                                    >
                                                        <Avatar.Group>
                                                            <Tooltip title="Hoàng Trường">
                                                                <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1" />
                                                            </Tooltip>
                                                            <Tooltip title="Văn Phúc">
                                                                <Avatar
                                                                    style={{
                                                                        backgroundColor: '#f56a00',
                                                                    }}
                                                                >
                                                                    K
                                                                </Avatar>
                                                            </Tooltip>
                                                            <Tooltip title="Khắc Tuân" placement="top">
                                                                <Avatar
                                                                    style={{
                                                                        backgroundColor: '#87d068',
                                                                    }}
                                                                    icon={<UserOutlined />}
                                                                />
                                                            </Tooltip>
                                                            <Tooltip title="Duy Quý" placement="top">

                                                                <Avatar
                                                                    style={{
                                                                        backgroundColor: '#1677ff',
                                                                    }}
                                                                    icon={<AntDesignOutlined />}
                                                                />
                                                            </Tooltip>
                                                        </Avatar.Group>
                                                        <Space wrap>
                                                            <CheckCircleOutlineIcon style={{ color: 'green' }} /> <p style={{ color: 'green' }}>FINISHED!</p>
                                                            <Button style={{ backgroundColor: '#48409e', color: 'white' }} className="custom-button">
                                                                90
                                                            </Button>
                                                        </Space>
                                                    </Card>
                                                </Space>
                                            </div>
                                            <div className="board-item">
                                                <Space className="board-item-content" direction="vertical" size={16}>
                                                    <Card
                                                        size="small"
                                                        title="API design"
                                                        style={{
                                                            width: 165,
                                                        }}
                                                    >
                                                        <Avatar.Group>
                                                            <Tooltip title="Hoàng Trường">
                                                                <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1" />
                                                            </Tooltip>
                                                            <Tooltip title="Văn Phúc">
                                                                <Avatar
                                                                    style={{
                                                                        backgroundColor: '#f56a00',
                                                                    }}
                                                                >
                                                                    K
                                                                </Avatar>
                                                            </Tooltip>
                                                            <Tooltip title="Khắc Tuân" placement="top">
                                                                <Avatar
                                                                    style={{
                                                                        backgroundColor: '#87d068',
                                                                    }}
                                                                    icon={<UserOutlined />}
                                                                />
                                                            </Tooltip>
                                                            <Tooltip title="Duy Quý" placement="top">

                                                                <Avatar
                                                                    style={{
                                                                        backgroundColor: '#1677ff',
                                                                    }}
                                                                    icon={<AntDesignOutlined />}
                                                                />
                                                            </Tooltip>
                                                        </Avatar.Group>
                                                        <Space wrap>
                                                            <CheckCircleOutlineIcon style={{ color: 'green' }} /> <p style={{ color: 'green' }}>FINISHED!</p>
                                                            <Button style={{ backgroundColor: '#48409e', color: 'white' }} className="custom-button">
                                                                95
                                                            </Button>
                                                        </Space>
                                                    </Card>
                                                </Space>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* </div> */}
                    </TabPanel>
                    <TabPanel value="2">
                        <div style={{ display: 'flex' }}>
                            <p style={{ fontWeight: 'bold', marginRight: '10px' }}>Describe: </p>
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
                    </TabPanel>
                </TabContext>
            </Box>
        </div>
    );
}