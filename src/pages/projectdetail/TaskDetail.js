import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';
import InputLabel from '@mui/material/InputLabel';
import { Close } from '@mui/icons-material';
import { Grid, TextField, ToggleButton, Tooltip } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import AttachmentIcon from '@mui/icons-material/Attachment';
import dayjs from 'dayjs';
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import css from '../../assets/css/task.module.css';
import Comment from './Comment';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  height: 620,
  bgcolor: 'background.paper',
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

const names = ['Submited', 'Completed', 'In progress', 'New task'];

export default function TaskDetail({
  handleClose,
  handleOpen,
  open,
  data,
  age1,
  setAge1,
  open1,
  setOpen1,
  handleChange1,
  handleClose1,
  handleOpen1,
}) {
  const [display, setDisplay] = React.useState(true);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography className="flex justify-between" id="modal-modal-title" variant="h6" component="h2">
            <div>
              <FormControl sx={{ m: 1, minWidth: 140 }}>
                <InputLabel id="demo-controlled-open-select-label">Status</InputLabel>
                <Select
                  labelId="demo-controlled-open-select-label"
                  id="demo-controlled-open-select"
                  open={open1}
                  onClose={handleClose1}
                  onOpen={handleOpen1}
                  value={age1}
                  label="Status"
                  onChange={handleChange1}
                  style={{ height: 40 }}
                >
                  <MenuItem value={10}>Submited</MenuItem>
                  <MenuItem value={20}>Completed</MenuItem>
                  <MenuItem value={30}>In progress</MenuItem>
                  <MenuItem value={40}>New task</MenuItem>
                </Select>
              </FormControl>
            </div>
            <Close className="cursor-pointer hover:bg-[#EDEFF1] mt-[4px]" onClick={handleClose} />
          </Typography>
          <Typography className={`h-[560px] overflow-y-scroll overflow-y-hidden ${css.nonescroll}`}>
            <Typography
              className="px-[16px] flex items-center justify-between"
              id="modal-modal-title"
              variant="h6"
              component="h2"
            >
              <div className="text-[28px] text-[#48409E]">{data?.name}</div>
              {data?.point ? <div className="text-[16px] text-[#6F6F6F]">Quality:{data?.point}</div> : null}
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
              <div className="flex">
                <img
                  className="mx-[5px] w-[30px] h-[30px] bg-[red] rounded-[15px]"
                  src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=740&t=st=1687536908~exp=1687537508~hmac=1d8eabbd2975fdc967567e1aa85e8c7187fe7a2735da839427935bea25d5d08a"
                  alt=""
                />
                <img
                  className="w-[30px] mx-[5px] h-[30px] bg-[red] rounded-[15px]"
                  src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=740&t=st=1687536908~exp=1687537508~hmac=1d8eabbd2975fdc967567e1aa85e8c7187fe7a2735da839427935bea25d5d08a"
                  alt=""
                />
                <img
                  className="w-[30px] mx-[5px] h-[30px] bg-[red] rounded-[15px]"
                  src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=740&t=st=1687536908~exp=1687537508~hmac=1d8eabbd2975fdc967567e1aa85e8c7187fe7a2735da839427935bea25d5d08a"
                  alt=""
                />
                <img
                  className="w-[30px] mx-[5px] h-[30px] bg-[red] rounded-[15px]"
                  src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=740&t=st=1687536908~exp=1687537508~hmac=1d8eabbd2975fdc967567e1aa85e8c7187fe7a2735da839427935bea25d5d08a"
                  alt=""
                />
                <img
                  className="w-[30px] mx-[5px] h-[30px] bg-[red] rounded-[15px]"
                  src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=740&t=st=1687536908~exp=1687537508~hmac=1d8eabbd2975fdc967567e1aa85e8c7187fe7a2735da839427935bea25d5d08a"
                  alt=""
                />
              </div>
            </Typography>
            <Typography className="px-[16px]" id="modal-modal-description" sx={{ mt: 2 }}>
              <h6 className="text-[#6F6F6F] mt-[0px] mb-[10px] text-[16px]">Attachment</h6>
              <div className="flex pb-[40px]">
                <AttachmentIcon className="mr-[20px]" />
                <CreateNewFolderIcon />
              </div>
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
            {display ? (
              <Typography className="px-[16px]" id="modal-modal-description" sx={{ mt: 2 }}>
                <h2>Comment</h2>
                <div className="text-right">
                  <TextField className="w-[100%]" id="filled-basic" label="Write comment" variant="filled" />
                  <Button className="my-[10px]" variant="contained" endIcon={<SendIcon />}>
                    Comment
                  </Button>
                </div>
                {data?.comment.map((item) => {
                  return <Comment comment={item} />;
                })}
              </Typography>
            ) : (
              <div />
            )}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
