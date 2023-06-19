import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import { DataGrid, GridCellParams } from '@mui/x-data-grid';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import TabPanel from '@mui/lab/TabPanel';
import { useState, useEffect } from 'react';
import './styles.css';
import { Card, Space } from 'antd';
import Muuri from 'muuri';

export default function ProjectDetail() {



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
                    // onClick={() => handleIconClick('edit', params.row)}
                    >
                        <EditIcon />
                    </IconButton>
                </div>
            ),
        },
    ];

    const handleCellClick = (GridCellParams) => {
        // Xử lý logic khi ô được nhấp vào
        // console.log('Cell clicked:', params);

    };

    const handleIconClick = (rows, row) => {
        console.log(row.id);
        removeItem(row.id);
    }

    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div>
            <p style={{ fontSize: '1.5rem', fontWeight: 'bold', paddingBottom: '10px' }}>
                E-Commerce Website
            </p>
            <Box sx={{ width: '100%', typography: 'body1' }}>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList onChange={handleChange} aria-label="lab API tabs example">
                            <Tab label="Task" value="1" />
                            <Tab label="Overview" value="2" />
                        </TabList>
                    </Box>
                    <TabPanel value="1">
                        <div>
                            <div className="board">
                                <div className="board-column new">
                                    <div className="board-column-container">
                                        <div className="board-column-header">New Task</div>
                                        <div className="board-column-content-wrapper">
                                            <div className="board-column-content">
                                                <div className="board-item">
                                                    <Space direction="vertical" size={16}>
                                                        <Card
                                                            size="small"
                                                            title="Small size card"
                                                            style={{
                                                                width: 246,
                                                            }}
                                                        >
                                                            <p>Card content</p>
                                                            <p>Card content</p>
                                                            <p>Card content</p>
                                                        </Card>
                                                    </Space>
                                                </div>
                                                <div className="board-item">
                                                    <Space direction="vertical" size={16}>
                                                        <Card
                                                            size="small"
                                                            title="Small size card"
                                                            style={{
                                                                width: 246,
                                                            }}
                                                        >
                                                            <p>Card content</p>
                                                            <p>Card content</p>
                                                            <p>Card content</p>
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
                                                    <Space direction="vertical" size={16}>
                                                        <Card
                                                            size="small"
                                                            title="Small size card"
                                                            style={{
                                                                width: 246,
                                                            }}
                                                        >
                                                            <p>Card content</p>
                                                            <p>Card content</p>
                                                            <p>Card content</p>
                                                        </Card>
                                                    </Space>
                                                </div>
                                                <div className="board-item">
                                                    <Space direction="vertical" size={16}>
                                                        <Card
                                                            size="small"
                                                            title="Small size card"
                                                            style={{
                                                                width: 246,
                                                            }}
                                                        >
                                                            <p>Card content</p>
                                                            <p>Card content</p>
                                                            <p>Card content</p>
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
                                                    <Space direction="vertical" size={16}>
                                                        <Card
                                                            size="small"
                                                            title="Small size card"
                                                            style={{
                                                                width: 246,
                                                            }}
                                                        >
                                                            <p>Card content</p>
                                                            <p>Card content</p>
                                                            <p>Card content</p>
                                                        </Card>
                                                    </Space>
                                                </div>
                                                <div className="board-item">
                                                    <Space direction="vertical" size={16}>
                                                        <Card
                                                            size="small"
                                                            title="Small size card"
                                                            style={{
                                                                width: 246,
                                                            }}
                                                        >
                                                            <p>Card content</p>
                                                            <p>Card content</p>
                                                            <p>Card content</p>
                                                        </Card>
                                                    </Space>
                                                </div>
                                                <div className="board-item">
                                                    <Space direction="vertical" size={16}>
                                                        <Card
                                                            size="small"
                                                            title="Small size card"
                                                            style={{
                                                                width: 246,
                                                            }}
                                                        >
                                                            <p>Card content</p>
                                                            <p>Card content</p>
                                                            <p>Card content</p>
                                                        </Card>
                                                    </Space>
                                                </div>
                                                <div className="board-item">
                                                    <Space direction="vertical" size={16}>
                                                        <Card
                                                            size="small"
                                                            title="Small size card"
                                                            style={{
                                                                width: 246,
                                                            }}
                                                        >
                                                            <p>Card content</p>
                                                            <p>Card content</p>
                                                            <p>Card content</p>
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
                                                <div className="board-item"><div className="board-item-content"><span>Item #</span>11</div></div>
                                                <div className="board-item"><div className="board-item-content"><span>Item #</span>12</div></div>
                                                <div className="board-item"><div className="board-item-content"><span>Item #</span>13</div></div>
                                                <div className="board-item"><div className="board-item-content"><span>Item #</span>14</div></div>
                                                <div className="board-item"><div className="board-item-content"><span>Item #</span>15</div></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel value="2" >
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