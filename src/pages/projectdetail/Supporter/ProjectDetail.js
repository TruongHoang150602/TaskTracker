import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './styles.css';
import Muuri from 'muuri';
import { Stack, Button } from '@mui/material';
import Page from '../../../components/Page';
import Iconify from '../../../components/iconify';
import Filter from '../../../components/Filter';
import HeaderBreadcrumbs from '../../../components/HeaderBreadcrumbs';
import Overview from './Overview';
import { CardTask, CardSub, CardCompleted } from './TaskCard';
import NewTask from './NewTask';
import { projectDetail } from '../../../_mock/project_data';
import events from '../../../_mock/events';


const COLOR_OPTIONS = [
    {
        label: 'None',
        color: '#fff'
    },
    {
        label: 'Low',
        color: '#00AB55'
    },
    {
        label: 'Medium',
        color: '#FFBA53'
    },
    {
        label: 'High',
        color: 'red'
    },
];

const COLOR_OPTIONS2 = [
    {
        label: 'None',
        color: '#fff'
    },
    {
        label: 'Administrator',
        color: '#00AB55'
    },
    {
        label: 'Implementer',
        color: 'Green'
    },
    {
        label: 'Approver',
        color: 'red'
    },
    {
        label: 'Assignee',
        color: '#FFC107'
    },
    {
        label: 'Supporter',
        color: '#04297A'
    },
];

export default function ProjectDetail() {
    // const location = useLocation();
    // const searchParams = new URLSearchParams(location.search);
    // const id = searchParams.get('id');
    const id = 4;
    const [event, setEvent] = useState(events);

    const newTask = projectDetail[id].task.filter((option) => (
        option.status === "New Task"
    ))

    const inProcess = projectDetail[id].task.filter((option) => (
        option.status === "In Progress"
    ))

    const submitted = projectDetail[id].task.filter((option) => (
        option.status === "Submitted"
    ))

    const finished = projectDetail[id].task.filter((option) => (
        option.status === "Completed"
    ))

    const filter = (color) => {
        setEvent(events.filter((event) => (event.color === color)));
        if (color === '#fff') setEvent(events);
    };

    const [openNewTask, setOpenNewTask] = useState(false);
    const handleOpen = () => {
        setOpenNewTask(true);
    }
    const handleClose = () => setOpenNewTask(false);

    const handleAddMember = () => {
        console.log("add member");
    }

    const [value1, setValue1] = useState(0);

    useEffect(() => {
        const initializeGrids = () => {
            const dragContainer = document.querySelector('.drag-container');
            const itemContainers = Array.from(document.querySelectorAll('.board-column-content'));
            const columnGrids = [];
            let boardGrid;

            // Init the column grids so we can drag those items around.
            itemContainers.forEach((container) => {
                const grid = new Muuri(container, {
                    items: '.board-item',
                    dragEnabled: false,
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
                dragEnabled: false,
                dragHandle: '.board-column-header',
            });

            // Clean up
            return () => {
                columnGrids.forEach((grid) => grid.destroy());
                boardGrid.destroy();
            };
        }
        initializeGrids();
    }, [value1]);

    const [value, setValue] = useState('1');

    const handleChange = async (event, newValue) => {
        setValue(newValue);
        console.log(newValue);
        if (newValue === '1') {
            await setValue1(value1 + 1);
        }
        console.log(value1);
    };

    return (
        <Page>
            <HeaderBreadcrumbs
                heading={projectDetail[id].name}
                action={
                    <Stack direction="row" spacing={2}>

                        {value === '1' ? (
                            <Filter data={COLOR_OPTIONS} onClickColor={(event) => filter(event)} />
                        ) : (
                            <Filter data={COLOR_OPTIONS2} onClickColor={(event) => filter(event)} />
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
                                            {newTask.map((option) => (
                                                <div key={option.id} className="board-item">
                                                    {CardTask(option.name, option.assignee, option.priority, option.end, option)}
                                                </div>
                                            ))}

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="board-column todo">
                                <div className="board-column-container">
                                    <div className="board-column-header">In Progress</div>
                                    <div className="board-column-content-wrapper">
                                        <div className="board-column-content">

                                            {inProcess.map((option) => (
                                                <div key={option.id} className="board-item">
                                                    {CardTask(option.name, option.assignee, option.priority, option.end, option)}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="board-column working">
                                <div className="board-column-container">
                                    <div className="board-column-header">Submitted</div>
                                    <div className="board-column-content-wrapper">
                                        <div className="board-column-content">
                                            {submitted.map((option) => (
                                                <div key={option.id} className="board-item">
                                                    {CardSub(option.name, option.assignee, option.priority, option.end, option)}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="board-column done">
                                <div className="board-column-container">
                                    <div className="board-column-header">Completed</div>
                                    <div className="board-column-content-wrapper">
                                        <div className="board-column-content">
                                            {finished.map((option) => (
                                                <div key={option.id} className="board-item">
                                                    {CardCompleted(option.name, option.assignee, option.point, option)}
                                                </div>
                                            ))}
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
        </Page>
    );
}