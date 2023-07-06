import React, { useEffect, useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, MuiAlert, TextField } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import CustomizedSnackbars from '../../components/toast/alter';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  height: 600,
  bgcolor: 'background.paper',
  p: 24,
  padding: '4px',
};
const alters = {
  text: "success",
  namebutton: "Invite",
  content: "Successful invitation delivery!"
}

const InvitePopup = ({ open, onClose }) => {
  const [position, setPosition] = useState(2);
  const [error, setError] = useState(false);
  const [email, setEmail] = useState('');

  const [state, setState] = React.useState({
    open: false,
    vertical: 'top',
    horizontal: 'center',
  });

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleChange = (event) => {
    setPosition(event.target.value);
  };

  const sleep = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };

  const handleChangeEmail = async (email) => {
    if (email === '') {
      setError(true);
    } else {
      setError(false);
      setEmail(email);
      await sleep(1000);
      onClose();
      setEmail('');
    }
  }
  return (
    <div>
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} style={{ height: 'auto' }}>
          <Typography className={`h-[400px] overflow-y-scroll overflow-y-hidden`}>
            <Typography
              className="px-[16px] flex items-center justify-between"
              id="modal-modal-title"
              variant="h6"
              component="h2"
            >
              <div className="text-[28px] text-[#48409E]">Send Invite</div>
            </Typography>
            <Typography className="px-[16px]" id="modal-modal-description" sx={{ mt: 2 }}>
              <h2>E-Mail</h2>
              <div className="text-right">
                <TextField
                  className="w-[100%]"
                  id="filled-email"
                  label="E-Mail"
                  variant="filled"
                  onChange={handleEmailChange}
                  error={error}
                  helperText={error ? 'Vui lòng nhập email' : ''}
                />
              </div>
            </Typography>
            <Typography className="px-[16px]" id="modal-modal-description" sx={{ mt: 2 }}>
              <h2>Position</h2>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Position</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  defaultValue={position}
                  label="Position"
                  onChange={handleChange}
                >
                  <MenuItem value={1}>Administrator</MenuItem>
                  <MenuItem value={2}>Implement</MenuItem>
                  <MenuItem value={3}>Assignee</MenuItem>
                  <MenuItem value={4}>Supporter</MenuItem>
                  <MenuItem value={5}>Approver</MenuItem>
                </Select>
              </FormControl>
            </Typography>
            <Typography>
              <div style={{
                display: 'flex',
                justifyContent: 'flex-end',
                gap: '5px',
                padding: '20px 15px'
              }}>
                <Button variant="outlined" color="error" onClick={onClose}>
                  Cancel
                </Button>
                <CustomizedSnackbars text={alters.text} namebutton={alters.namebutton} content={alters.content} click={() => handleChangeEmail(email)} error={error} />
                {/* <Button onClick={() => handleChangeEmail(email)}> Save </Button> */}
              </div>
            </Typography>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default InvitePopup;
