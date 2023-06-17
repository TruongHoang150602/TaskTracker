import PropTypes from 'prop-types';
import { Box, Stack, Button,  TextField,  DialogActions , Typography} from '@mui/material';
import { LoadingButton, MobileDateTimePicker } from '@mui/lab';
import { ColorSinglePicker } from '../../../components/color-utils';

// ----------------------------------------------------------------------

const COLOR_OPTIONS = [
  '#00AB55', // theme.palette.primary.main,
  '#1890FF', // theme.palette.info.main,
  '#54D62C', // theme.palette.success.main,
  '#FFC107', // theme.palette.warning.main,
  '#FF4842', // theme.palette.error.main
  '#04297A', // theme.palette.info.darker
  '#7A0C2E', // theme.palette.error.darker
];

// const getInitialValues = (event, range) => {
//   const _event = {
//     title: '',
//     description: '',
//     textColor: '#1890FF',
//     allDay: false,
//     start: range ? new Date(range.start) : new Date(),
//     end: range ? new Date(range.end) : new Date(),
//   };

//   if (event || range) {
//     return merge({}, _event, event);
//   }

//   return _event;
// };

// ----------------------------------------------------------------------
// const style = {
//   position: 'absolute',
//   transform: 'translate(-50%, -50%)',
//   bgcolor: 'background.paper',
//   border: '2px solid #000',
//   boxShadow: 24,
//   p: 4,
// };

export default function CalendarForm() {
  
  return (
    <Box >
          <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
            New event
          </Typography>
          <TextField
            required
            id="outlined-required"
            label="Required"
            defaultValue="Please enter the event title!"
          />
          
    </Box>
   
  );
}
