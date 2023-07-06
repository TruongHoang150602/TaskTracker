import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Close } from '@mui/icons-material';
import { Grid, TextField, ToggleButton, Tooltip } from '@mui/material';
import { Avatar } from 'antd';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import css from "../../../assets/css/task.module.css";
import AlertDialog from '../../../components/toast/dialog';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    height: 600,
    bgcolor: 'background.paper',
    // border: '0px solid #000',
    // boxShadow: 1,
    p: 24,
    padding: '4px',
};

const COLOR_OPTIONS = [
    '#00AB55', // theme.palette.primary.main,
    '#1890FF', // theme.palette.info.main,
    '#54D62C', // theme.palette.success.main,
    '#FFC107', // theme.palette.warning.main,
    '#FF4842', // theme.palette.error.main
    '#04297A', // theme.palette.info.darker
    '#7A0C2E', // theme.palette.error.darker
];

export default function NewTask({ handleClose, handleOpen, open }) {
    const addMember = () => {
        console.log("Add member");
    }
    const [button1Color, setButton1Color] = React.useState(null);
    const [button2Color, setButton2Color] = React.useState(null);
    const [button3Color, setButton3Color] = React.useState(null);

    const handleButtonClick = (buttonNumber) => {
        switch (buttonNumber) {
            case 1:
                setButton1Color('#ff6600');
                break;
            case 2:
                setButton2Color('#ff6600');
                break;
            case 3:
                setButton3Color('#ff6600');
                break;
            default:
                break;
        }
    };
    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography className="text-right" id="modal-modal-title" variant="h6" component="h2">
                        <Close className="cursor-pointer hover:bg-[#EDEFF1]" onClick={handleClose} />
                    </Typography>
                    <Typography className={`h-[560px] overflow-y-scroll overflow-y-hidden ${css.nonescroll}`}>
                        <Typography
                            className="px-[16px] flex items-center justify-between"
                            id="modal-modal-title"
                            variant="h6"
                            component="h2"
                        >
                            <div className="text-[28px] text-[#48409E]">New Task</div>
                        </Typography>
                        <Typography style={{ padding: '20px' }}>
                            <TextField
                                id="outlined-basic"
                                label="Task Title"
                                style={{ width: '80%' }}
                                variant="outlined"
                            />
                        </Typography>
                        <Typography className="px-[16px]" id="modal-modal-description" sx={{ mt: 2 }}>
                            <h6 className="text-[#6F6F6F] mt-[0px] mb-[10px] text-[16px]">Priority</h6>
                            <Stack spacing={2} direction="row">
                                <Button className="rounded-[30px] text-[#FFBA53]" disableRipple="true" variant="outlined" style={{ backgroundColor: button1Color }} onClick={() => handleButtonClick(1)}>
                                    MEDIUM
                                </Button>
                                <Button className="rounded-[30px] text-[#FF7979]" disableRipple="true" variant="outlined" style={{ backgroundColor: button2Color }} onClick={() => handleButtonClick(2)}>
                                    HIGH
                                </Button>
                                <Button className="rounded-[30px] text-[#2BA700]" disableRipple="true" variant="outlined" style={{ backgroundColor: button3Color }} onClick={() => handleButtonClick(3)}>
                                    EASY
                                </Button>
                            </Stack>
                        </Typography>
                        <Typography className="px-[16px]" id="modal-modal-description" sx={{ mt: 2 }}>
                            <h6 className="text-[#6F6F6F] mt-[0px] mb-[10px] text-[16px]">Asignee</h6>
                            <Avatar.Group>
                                <Tooltip title="Trọng Quang" placement="top">
                                    <Avatar
                                        style={{
                                            backgroundColor: '#ff6600',
                                        }}
                                    >
                                        Q
                                    </Avatar>
                                </Tooltip>
                                <Tooltip title="Văn Phúc" placement="top">
                                    <Avatar
                                        style={{
                                            backgroundColor: '#339966',
                                        }}
                                    >
                                        P
                                    </Avatar>
                                </Tooltip>
                                <Tooltip title="Vân Trường" placement="top">
                                    <Avatar
                                        style={{
                                            backgroundColor: '#33ccff',
                                        }}
                                    >
                                        T
                                    </Avatar>
                                </Tooltip>
                                <Tooltip title="Khắc Tuân" placement="top">
                                    <Avatar
                                        style={{
                                            backgroundColor: '#cc99ff',
                                        }}
                                    >
                                        T
                                    </Avatar>
                                </Tooltip>
                                <Tooltip title="Duy Quý" placement="top">
                                    <Avatar
                                        style={{
                                            backgroundColor: '#66ff66',
                                        }}
                                    >
                                        Q
                                    </Avatar>
                                </Tooltip>
                                <Tooltip title="Add Member">
                                    <IconButton color="secondary" aria-label="add an alarm" onClick={addMember}>
                                        <AddIcon style={{ fontSize: '20px' }} />
                                    </IconButton>
                                </Tooltip>
                            </Avatar.Group>
                        </Typography>
                        <Typography className="px-[16px]" id="modal-modal-description" sx={{ mt: 2 }}>
                            <Grid className="" container spacing={2}>
                                <Grid item xs={6}>
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DateTimePicker
                                            label="Starting date"
                                            // defaultValue={dayjs('2022-04-17T15:30')}
                                            sx={{
                                                width: '100%',
                                            }}
                                        />
                                    </LocalizationProvider>
                                </Grid>
                                <Grid item xs={6}>
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DateTimePicker
                                            label="Ending date"
                                            // defaultValue={dayjs('2022-04-17T15:30')}
                                            sx={{
                                                width: '100%',
                                            }}
                                        />
                                    </LocalizationProvider>
                                </Grid>
                                <Grid item xs={12} sm={6} md={12}>
                                    <TextField
                                        id="outlined-multiline-static"
                                        label="Description"
                                        multiline
                                        rows={4}
                                        defaultValue=""
                                        fullWidth
                                    />
                                </Grid>
                            </Grid>
                        </Typography>
                        <Typography className="px-[16px]" id="modal-modal-description" sx={{ mt: 2 }}>
                            <Stack direction="row" spacing={0.5}>
                                {COLOR_OPTIONS.map((color) => (
                                    <Tooltip key={color} title={color}>
                                        <ToggleButton
                                            value={color}
                                            // selected={color === view}
                                            // onChange={() => onChangeView(viewOption.value)}
                                            sx={{ width: 32, height: 32, padding: 0, border: 0, borderRadius: '50%', background: color }}
                                        />
                                    </Tooltip>
                                ))}
                            </Stack>
                        </Typography>
                        <Typography className="px-[16px]" sx={{ m: 2 }}>
                            <div style={{
                                display: 'flex', justifyContent: 'flex-end', gap: '5px'
                            }}>
                                <Button variant="outlined" color="error" onClick={handleClose}>
                                    Cancel
                                </Button>
                                <AlertDialog title="Add Task" ques="Notifications" content="Do you want to add new task ?" handleClose3={handleClose} />
                            </div>
                        </Typography>
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}
