import * as React from 'react';
import { useState } from 'react';

import { Card, Space, Avatar, Tooltip } from 'antd';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { Button } from '@mui/material';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import TaskDetail from './TaskDetail';
import { fDate } from '../../../utils/formatTime';

const PRIORITY = {
    High: 'red',
    Medium: '#ffba53',
    Low: 'green'
}


export function CardTask(title, assignee, priority, deadline, item) {
    const [open, setOpen] = useState(false);
    const handleOpen = (e) => {
        e.stopPropagation()
        item.name = title;
        setOpen(true);
    }
    const handleClose = () => setOpen(false);

    return (
        <Space size={16} style={{ gap: '0px' }}>
            <Card
                onClick={handleOpen}
                size="small"
                title={title}
                style={{
                    width: '220px',
                    position: 'relative',
                    padding: '2px',
                }}
            >
                <Avatar.Group>
                    {assignee.map((option) => (
                        <Tooltip title={option}>
                            <Avatar
                                style={{
                                    backgroundColor: '#f56a00',
                                }}
                            >
                                {option[0]}
                            </Avatar>
                        </Tooltip>
                    ))}
                </Avatar.Group>
                <Space wrap style={{ display: 'flex' }}>
                    <div style={{ flex: 2, flexWrap: 'nowrap' }}>
                        <AccessAlarmIcon style={{ color: 'red' }} />
                    </div>
                    <div style={{ flex: 5 }}>
                        <p style={{ color: 'red' }}>{fDate(deadline)}</p>
                    </div>
                    <div style={{ flex: 3 }}>

                        <Button onClick={handleOpen} style={{ backgroundColor: PRIORITY[priority], color: 'white' }} className="custom-button">
                            {priority}
                        </Button>
                    </div>
                </Space>
            </Card>
            <TaskDetail data={item} handleClose={handleClose} handleOpen={handleOpen} open={open} />
        </Space>
    )
}

export function CardSub(title, assignee, priority, deadline, item) {
    const [open, setOpen] = useState(false);
    const handleOpen = (e) => {
        e.stopPropagation()
        item.name = title;
        setOpen(true);
    }
    const handleClose = () => setOpen(false);

    return (
        <Space size={16} style={{ gap: '0px' }}>
            <Card
                onClick={handleOpen}
                size="small"
                title={title}
                style={{
                    width: '220px',
                    position: 'relative',
                    padding: '2px',
                }}
            >
                <Avatar.Group>
                    {assignee.map((option) => (
                        <Tooltip title={option}>
                            <Avatar
                                style={{
                                    backgroundColor: '#f56a00',
                                }}
                            >
                                {option[0]}
                            </Avatar>
                        </Tooltip>
                    ))}
                </Avatar.Group>
                <Space wrap style={{ display: 'flex' }}>
                    <div style={{ flex: 2, flexWrap: 'nowrap' }}>
                        <FileUploadOutlinedIcon style={{ color: 'black' }} />
                    </div>
                    <div style={{ flex: 5 }}>
                        <p style={{ color: 'black' }}>{fDate(deadline)}</p>
                    </div>
                    <div style={{ flex: 3 }}>

                        <div style={{ flex: 3 }}>
                            <Button onClick={handleOpen} style={{ backgroundColor: '#6f6f6f', color: 'white', borderRadius: '20px', fontSize: '10px' }}>
                                Submitted
                            </Button>
                        </div>
                    </div>
                </Space>
            </Card>
            <TaskDetail data={item} handleClose={handleClose} handleOpen={handleOpen} open={open} />
        </Space>
    )
}

export function CardCompleted(title, assignee, point, item) {
    const [open, setOpen] = useState(false);
    const handleOpen = (e) => {
        e.stopPropagation()
        item.name = title;
        setOpen(true);
    }
    const handleClose = () => setOpen(false);

    return (
        <Space size={16} style={{ gap: '0px' }}>
            <Card
                onClick={handleOpen}
                size="small"
                title={title}
                style={{
                    width: '220px',
                    position: 'relative',
                    padding: '2px',
                }}
            >
                <Avatar.Group>
                    {assignee.map((option) => (
                        <Tooltip title={option}>
                            <Avatar
                                style={{
                                    backgroundColor: '#f56a00',
                                }}
                            >
                                {option[0]}
                            </Avatar>
                        </Tooltip>
                    ))}
                </Avatar.Group>
                <Space wrap style={{ display: 'flex' }}>
                    <div style={{ flex: 2, flexWrap: 'nowrap' }}>
                        <CheckCircleOutlineIcon style={{ color: 'green' }} />
                    </div>
                    <div style={{ flex: 5 }}>
                        <p style={{ color: 'green' }}>FINISHED!</p>
                    </div>
                    <div style={{ flex: 3 }}>

                        <div style={{ flex: 3 }}>
                            <Button onClick={handleOpen} style={{ backgroundColor: '#48409e', color: 'white', borderRadius: '20px', marginLeft: '10px' }}>
                                {point}
                            </Button>
                        </div>
                    </div>
                </Space>
            </Card>
            <TaskDetail data={item} handleClose={handleClose} handleOpen={handleOpen} open={open} />
        </Space>
    )
}

