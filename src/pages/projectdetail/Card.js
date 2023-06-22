import { Card, Space, Avatar, Tooltip } from 'antd';
import { AntDesignOutlined, UserOutlined } from '@ant-design/icons';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { Button } from '@mui/material';


export function CardHigh(title, deadline) {
    return (
        <Space className="board-item-content" direction="vertical" size={16}>
            <Card
                size="small"
                title={title}
                style={{
                    width: 'calc(100% - 25px)'
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
                    <Button style={{ backgroundColor: 'red', color: 'white' }} className="custom-button">
                        High
                    </Button>
                </Space>
            </Card>
        </Space>
    )
}

export function CardSub(title, deadline) {
    return (
        <Space className="board-item-content" direction="vertical" size={16}>
            <Card
                size="small"
                title={title}
                style={{
                    width: 'calc(100% - 25px)'
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
                    <Button style={{ backgroundColor: '#6f6f6f', color: 'white', borderRadius: '20px', marginLeft: '50px' }}>
                        Submitted
                    </Button>
                </Space>
            </Card>
        </Space>
    )
}

export function CardCompleted(title, point) {
    return (
        <Space className="board-item-content" direction="vertical" size={16}>
            <Card
                size="small"
                title={title}
                style={{
                    width: 'calc(100% - 25px)'
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
                    <Button style={{ backgroundColor: '#48409e', color: 'white', borderRadius: '20px', marginLeft: '90px' }}>
                        {point}
                    </Button>
                </Space>
            </Card>
        </Space>
    )
}

export function CardMedium(title, deadline) {
    return (
        <Space className="board-item-content" direction="vertical" size={16}>
            <Card
                size="small"
                title={title}
                style={{
                    width: 'calc(100% - 25px)'
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
                    <Button style={{ backgroundColor: '#ffba53', color: 'white' }} className="custom-button">
                        Medium
                    </Button>
                </Space>
            </Card>
        </Space>
    )
}

export function CardEasy(title, deadline) {
    return (
        <Space className="board-item-content" direction="vertical" size={16}>
            <Card
                size="small"
                title={title}
                style={{
                    width: 'calc(100% - 25px)'
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
                    <Button style={{ backgroundColor: '#68da6c', color: 'white' }} className="custom-button">
                        Easy
                    </Button>
                </Space>
            </Card>
        </Space>
    )
}