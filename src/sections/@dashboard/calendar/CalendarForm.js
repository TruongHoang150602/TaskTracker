import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import { TextField,  DialogContent, Dialog, Grid, MenuItem, Stack, ToggleButton, Tooltip} from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers';
// import Iconify from '../../../components/iconify';
// import Page from '../../../components/Page';
// import { LoadingButton, MobileDateTimePicker } from '@mui/lab';
// import { ColorSinglePicker } from '../../../components/color-utils';

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
Dialog.propTypes = {
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func,
  open: PropTypes.bool.isRequired,
  sx: PropTypes.object,
  variants: PropTypes.object,
};

export default function CalendarForm() {

  return (
    
    <DialogContent sx={{
      width: '600px',
      mt: '4px',
    }}>
         <Grid container spacing={3} >

            <Grid item xs={12} sm={6} md={12} mt={1}>
              <TextField
              required
              id="outlined-required"
              label="Title"
              defaultValue="Please enter the task title!"
              fullWidth
              />
            </Grid>

            <Grid item xs={12} sm={6} md={6}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateTimePicker
                label="Starting date"
                defaultValue={dayjs('2022-04-17T15:30')}
                sx = {{
                  width: '100%'
                }}
              />
            </LocalizationProvider>
            </Grid>

            <Grid item xs={12} sm={6} md={6}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateTimePicker
                label="Ending date"
                defaultValue={dayjs('2022-04-17T15:30')}
                sx = {{
                  width: '100%'
                }}
              />
            </LocalizationProvider>
            </Grid>

            <Grid item xs={12} sm={6} md={6}>
            <TextField
              id="outlined-select-currency"
              select
              label="Repeat"
              defaultValue="None"
              fullWidth
            >
              <MenuItem value={'None'}>None</MenuItem>
              <MenuItem value={'Every day'} >Every day</MenuItem>
              <MenuItem value={'Every week'} >Every week</MenuItem>
              <MenuItem value={'Every month'} >Every month</MenuItem>
              </TextField>
            </Grid>

            <Grid item xs={12} sm={6} md={6}>
            <TextField
              id="outlined-select-currency"
              select
              label="Alert"
              defaultValue="None"
              fullWidth
            >
              <MenuItem value={'None'}>None</MenuItem>
              <MenuItem value={'Every day'} >Every day</MenuItem>
              <MenuItem value={'Every week'} >Every week</MenuItem>
              <MenuItem value={'Every month'} >Every month</MenuItem>
              </TextField>
            </Grid>

            <Grid item xs={12} sm={6} md={12}>
                <TextField
                id="outlined-multiline-static"
                label="Description"
                multiline
                rows={4}
                defaultValue="Add a description"
                fullWidth
              />
            </Grid>

            <Grid item xs={12} sm={6} md={12}>
            <Stack direction="row" spacing={0.5}>
         
            <Stack direction="row" spacing={0.5}>
          {COLOR_OPTIONS.map((color) => (
            <Tooltip key={color} title={color}>
              <ToggleButton
                value={color}
                // selected={color === view}
                // onChange={() => onChangeView(viewOption.value)}
                sx={{ width: 32, height: 32, padding: 0, border: 0 , borderRadius: '50%' , background: color}}
               />
            </Tooltip>
          ))}
        </Stack>
        </Stack>
            </Grid>
        </Grid>
        
            
    </DialogContent>
  );
}
