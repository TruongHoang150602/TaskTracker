import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';
import { Close } from '@mui/icons-material';
import { Grid, TextField, ToggleButton, Tooltip } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import css from "../../assets/css/task.module.css";
import Comment from './Comment';

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

export default function TaskDetail({ handleClose, handleOpen, open, data }) {
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
              <div className="text-[28px] text-[#48409E]">{data?.name}</div>
              <div className="text-[16px] text-[#6F6F6F]">Quanlity: 30{data?.score}</div>
            </Typography>
            <Typography className="px-[16px]" id="modal-modal-description" sx={{ mt: 2 }}>
              <h6 className="text-[#6F6F6F] mt-[0px] mb-[10px] text-[16px]">Priority</h6>
              <Stack spacing={2} direction="row">
                <Button className="rounded-[30px] text-[#FF7979]" disableRipple="true" variant="outlined">
                  MEDIUM
                </Button>
                <Button className="rounded-[30px] text-[#FFBA53]" disableRipple="true" variant="outlined">
                  HIGH
                </Button>
                <Button className="rounded-[30px] text-[#2BA700]" disableRipple="true" variant="outlined">
                  LOW
                </Button>
              </Stack>
            </Typography>
            <Typography className="px-[16px]" id="modal-modal-description" sx={{ mt: 2 }}>
              <h6 className="text-[#6F6F6F] mt-[0px] mb-[10px] text-[16px]">Asignee</h6>
            </Typography>
            <Typography className="px-[16px]" id="modal-modal-description" sx={{ mt: 2 }}>
              <Grid className="" container spacing={2}>
                <Grid item xs={6}>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateTimePicker
                      label="Starting date"
                      defaultValue={dayjs('2022-04-17T15:30')}
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
                      defaultValue={dayjs('2022-04-17T15:30')}
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
            <Typography className="px-[16px]" id="modal-modal-description" sx={{ mt: 2 }}>
              <h2>Comment</h2>
              <div className='text-right'>
                <TextField className='w-[100%]' id="filled-basic" label="Write comment" variant="filled" />
                <Button className='my-[10px]' variant="contained" endIcon={<SendIcon />}>
                  Comment
                </Button>
              </div>
              <Comment/>
            </Typography>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
