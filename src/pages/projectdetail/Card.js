import * as React from 'react';
import { useState } from 'react';

import { Card, Space, Avatar, Tooltip } from 'antd';
import { AntDesignOutlined, UserOutlined } from '@ant-design/icons';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { Button } from '@mui/material';
import Grid from '@mui/material/Grid';
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
                size="small"
                title={title}
                style={{
                    width: 'calc(100% - 20px)'
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
                <Space wrap>
                    <AccessAlarmIcon style={{ color: 'red' }} /> <p style={{ color: 'red' }}>{deadline}</p>
                    <Button onClick={handleOpen} style={{ backgroundColor: 'red', color: 'white' }} className="custom-button">
                        High
                    </Button>
                </Space>
                <Grid item xs={12}>
                    <TaskDetail data={item} handleClose={handleClose} handleOpen={handleOpen} open={open} />
                </Grid>

            </Card>
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
                    width: 'calc(100% - 20px)'
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
                    <AccessAlarmIcon style={{ color: 'red' }} /> <p style={{ color: 'red' }}>{deadline}</p>
                    <Button onClick={handleOpen} style={{ backgroundColor: '#6f6f6f', color: 'white', borderRadius: '20px', marginLeft: '50px' }}>
                        Submitted
                    </Button>
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
                    width: 'calc(100% - 20px)'
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
                    <Button onClick={handleOpen} style={{ backgroundColor: '#48409e', color: 'white', borderRadius: '20px', marginLeft: '90px' }}>
                        {point}
                    </Button>
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
                    width: 'calc(100% - 20px)'
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
                    <AccessAlarmIcon style={{ color: 'red' }} /> <p style={{ color: 'red' }}>{deadline}</p>
                    <Button onClick={handleOpen} style={{ backgroundColor: '#ffba53', color: 'white' }} className="custom-button">
                        Medium
                    </Button>
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
                    width: 'calc(100% - 20px)'
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
                    <AccessAlarmIcon style={{ color: 'red' }} /> <p style={{ color: 'red' }}>{deadline}</p>
                    <Button onClick={handleOpen} style={{ backgroundColor: '#68da6c', color: 'white' }} className="custom-button">
                        Easy
                    </Button>
                </Space>
                <Grid item xs={12}>
                    <TaskDetail data={item} handleClose={handleClose} handleOpen={handleOpen} open={open} />
                </Grid>
            </Card>
        </Space>
    )
}