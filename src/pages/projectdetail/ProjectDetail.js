import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { useState, useEffect } from 'react';
import './styles.css';
import Muuri from 'muuri';
import { Stack, Button } from '@mui/material';
import Iconify from '../../components/iconify';
import Filter from '../../components/Filter';
import HeaderBreadcrumbs from '../../components/HeaderBreadcrumbs';
import Overview from './Overview';
import { CardHigh, CardSub, CardCompleted, CardMedium, CardEasy } from './Card';
import NewTask from './NewTask';

export default function ProjectDetail() {

    const [openNewTask, setOpenNewTask] = useState(false);
    const handleOpen = () => {
        setOpenNewTask(true);
    }
    const handleClose = () => setOpenNewTask(false);

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
    const [value, setValue] = useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div>
            <HeaderBreadcrumbs
                heading="E-Commerce Website"
                action={
                    <Stack direction="row" spacing={2}>

                        <Filter data={['task', 'team']} />
                        {value === '1' ? (
                            <Button
                                variant="contained"
                                startIcon={<Iconify icon={'eva:plus-fill'} width={20} height={20} />}
                                onClick={handleOpen}
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

                    <NewTask handleClose={handleClose} handleOpen={handleOpen} open={openNewTask} />

                    <TabPanel value="1" style={{ padding: '0px', paddingTop: '20px' }}>
                        <div className="drag-container"> <p>abc</p> </div>
                        <div className="board">
                            <div className="board-column new">
                                <div className="board-column-container ">
                                    <div className="board-column-header">New Task</div>
                                    <div className="board-column-content-wrapper">
                                        <div className="board-column-content">
                                            <div className="board-item">
                                                <div className='board-item-content'>
                                                    {CardHigh("Shopping cart interface code", "June 22, 2023")}
                                                </div>
                                            </div>
                                            <div className="board-item">
                                                <div className='board-item-content'>

                                                    {CardMedium("Write API for shopping cart interface", "June 22, 2023")}
                                                </div>
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
                                                <div className='board-item-content'>

                                                    {CardHigh("Code for login, registration interface", "June 15, 2023")}
                                                </div>
                                            </div>
                                            <div className="board-item">
                                                <div className='board-item-content'>

                                                    {CardEasy("Write API for login and registration", "June 16, 2023")}
                                                </div>
                                            </div>
                                            <div className="board-item">
                                                <div className='board-item-content'>

                                                    {CardHigh("Home page interface code", "June 18, 2023")}
                                                </div>
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
                                                <div className='board-item-content'>

                                                    {CardSub("Database design", "June 01, 2023")}
                                                </div>
                                            </div>
                                            <div className="board-item">
                                                <div className='board-item-content'>

                                                    {CardSub("Add data to the database", "June 01, 2023")}
                                                </div>
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
                                                <div className='board-item-content'>

                                                    {CardCompleted("Write a specification for the project", "100")}
                                                </div>
                                            </div>
                                            <div className="board-item">
                                                <div className='board-item-content'>

                                                    {CardCompleted("Design the interface of all websites", "90")}
                                                </div>
                                            </div>
                                            <div className="board-item">
                                                <div className='board-item-content'>

                                                    {CardCompleted("API design", "95")}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel value="2">
                        <Overview />
                    </TabPanel>
                </TabContext>
            </Box>
        </div>
    );
}