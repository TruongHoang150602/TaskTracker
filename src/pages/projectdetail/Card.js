import * as React from 'react';
import { useState } from 'react';

import { Card, Space, Avatar, Tooltip } from 'antd';
import { AntDesignOutlined, UserOutlined } from '@ant-design/icons';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { Button } from '@mui/material';
import Grid from '@mui/material/Grid';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import TaskDetail from '../task/TaskDetail';

export function CardHigh(title, deadline) {
    const [open, setOpen] = useState(false);
    const [item, setItem] = useState({
        name: ''
    });
    const handleOpen = () => {
        item.name = title;
        setOpen(true);
        setItem(item);
    }
    const handleClose = () => setOpen(false);
    return (
        <Space className="board-item-content" direction="vertical" size={16}>
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
                    <Tooltip title="Hoàng Trường">
                        <Avatar
                            style={{
                                backgroundColor: '#f56a00',
                            }}
                        >
                            T
                        </Avatar>
                    </Tooltip>
                    <Tooltip title="Văn Phúc">
                        <Avatar
                            style={{
                                backgroundColor: '#ffff66',
                            }}
                        >
                            P
                        </Avatar>
                    </Tooltip>
                    <Tooltip title="Khắc Tuân" placement="top">
                        <Avatar
                            style={{
                                backgroundColor: '#00ff66',
                            }}
                        >
                            T
                        </Avatar>
                    </Tooltip>
                    <Tooltip title="Duy Quý" placement="top">
                        <Avatar
                            style={{
                                backgroundColor: '#ff6600',
                            }}
                        >
                            Q
                        </Avatar>
                    </Tooltip>
                </Avatar.Group>
                <Space wrap style={{ display: 'flex' }}>
                    <div style={{ flex: 2, flexWrap: 'nowrap' }}>

                        <AccessAlarmIcon style={{ color: 'red' }} />
                    </div>
                    <div style={{ flex: 5 }}>
                        <p style={{ color: 'red' }}>{deadline}</p>
                    </div>
                    <div style={{ flex: 3 }}>

                        <Button onClick={handleOpen} style={{ backgroundColor: 'red', color: 'white' }} className="custom-button">
                            High
                        </Button>
                    </div>
                </Space>
            </Card>
            <TaskDetail data={item} handleClose={handleClose} handleOpen={handleOpen} open={open} />
        </Space>
    )
}

export function CardSub(title, deadline) {
    const [open, setOpen] = useState(false);
    const [item, setItem] = useState({
        name: ''
    });
    const handleOpen = () => {
        item.name = title;
        setOpen(true);
        setItem(item);
    }
    const handleClose = () => setOpen(false);
    return (
        <Space className="board-item-content" direction="vertical" size={16}>
            <Card
                size="small"
                title={title}
                style={{
                    width: '220px',
                    position: 'relative',
                    padding: '2px',
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
                <Space wrap style={{ display: 'flex' }}>
                    <div style={{ flex: 2, flexWrap: 'nowrap' }}>
                        <FileUploadOutlinedIcon style={{ color: 'black' }} />
                    </div>
                    <div style={{ flex: 5 }}>
                        <p style={{ color: 'black' }}>{deadline}</p>
                    </div>
                    <div style={{ flex: 3 }}>
                        <Button onClick={handleOpen} style={{ backgroundColor: '#6f6f6f', color: 'white', borderRadius: '20px', fontSize: '10px' }}>
                            Submitted
                        </Button>
                    </div>
                </Space>
                <Grid item xs={12}>
                    <TaskDetail data={item} handleClose={handleClose} handleOpen={handleOpen} open={open} />
                </Grid>
            </Card>
        </Space>
    )
}

export function CardCompleted(title, point) {
    const [open, setOpen] = useState(false);
    const [item, setItem] = useState({
        name: ''
    });
    const handleOpen = () => {
        item.name = title;
        setOpen(true);
        setItem(item);
    }
    const handleClose = () => setOpen(false);
    return (
        <Space className="board-item-content" direction="vertical" size={16}>
            <Card
                size="small"
                title={title}
                style={{
                    width: '220px',
                    position: 'relative',
                    padding: '2px',
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
                <Space wrap style={{ display: 'flex' }}>
                    <div style={{ flex: 2, flexWrap: 'nowrap' }}>

                        <CheckCircleOutlineIcon style={{ color: 'green' }} />
                    </div>
                    <div style={{ flex: 5 }}>
                        <p style={{ color: 'green' }}>FINISHED!</p>
                    </div>
                    <div style={{ flex: 3 }}>

                        <Button onClick={handleOpen} style={{ backgroundColor: '#48409e', color: 'white', borderRadius: '20px', marginLeft: '10px' }}>
                            {point}
                        </Button>
                    </div>
                </Space>
                <Grid item xs={12}>
                    <TaskDetail data={item} handleClose={handleClose} handleOpen={handleOpen} open={open} />
                </Grid>
            </Card>
        </Space>
    )
}

export function CardMedium(title, deadline) {
    const [open, setOpen] = useState(false);
    const [item, setItem] = useState({
        name: ''
    });
    const handleOpen = () => {
        item.name = title;
        setOpen(true);
        setItem(item);
    }
    const handleClose = () => setOpen(false);
    return (
        <Space className="board-item-content" direction="vertical" size={16}>
            <Card
                size="small"
                title={title}
                style={{
                    width: '220px',
                    position: 'relative',
                    padding: '2px',
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
                <Space wrap style={{ display: 'flex' }}>
                    <div style={{ flex: 2, flexWrap: 'nowrap' }}>

                        <AccessAlarmIcon style={{ color: 'red' }} />
                    </div>
                    <div style={{ flex: 5 }}>

                        <p style={{ color: 'red' }}>{deadline}</p>
                    </div>
                    <div style={{ flex: 3 }}>

                        <Button onClick={handleOpen} style={{ backgroundColor: '#ffba53', color: 'white', fontSize: '12px' }} className="custom-button">
                            Medium
                        </Button>
                    </div>
                </Space>
                <Grid item xs={12}>
                    <TaskDetail data={item} handleClose={handleClose} handleOpen={handleOpen} open={open} />
                </Grid>
            </Card>
        </Space>
    )
}

export function CardEasy(title, deadline) {
    const [open, setOpen] = useState(false);
    const [item, setItem] = useState({
        name: ''
    });
    const handleOpen = () => {
        item.name = title;
        setOpen(true);
        setItem(item);
    }
    const handleClose = () => setOpen(false);
    return (
        <Space className="board-item-content" direction="vertical" size={16}>
            <Card
                size="small"
                title={title}
                style={{
                    width: '220px',
                    position: 'relative',
                    padding: '2px',
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
                <Space wrap style={{ display: 'flex' }}>
                    <div style={{ flex: 2, flexWrap: 'nowrap' }}>

                        <AccessAlarmIcon style={{ color: 'red' }} />
                    </div>
                    <div style={{ flex: 5 }}>

                        <p style={{ color: 'red' }}>{deadline}</p>
                    </div>
                    <div style={{ flex: 3 }}>

                        <Button onClick={handleOpen} style={{ backgroundColor: '#68da6c', color: 'white' }} className="custom-button">
                            Easy
                        </Button>
                    </div>
                </Space>
                <Grid item xs={12}>
                    <TaskDetail data={item} handleClose={handleClose} handleOpen={handleOpen} open={open} />
                </Grid>
            </Card>
        </Space>
    )
}