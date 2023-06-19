// import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import { TextField,  DialogContent, Grid, MenuItem, Stack, Tooltip, IconButton} from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers';
import React from 'react';
import Iconify from '../../../components/iconify';

// ----------------------------------------------------------------------

const COLOR_OPTIONS = [
  {
    label: 'Việc nhà',
    color: '#00AB55'
  }, 
  {
    label: 'Nghỉ ngơi',
    color:  '#FF4842'
  }, 
  {
    label: 'Cuộc gặp',
    color: '#1890FF'
  }, 
  {
    label: 'Ăn uống',
    color: '#54D62C'
  },
  {
    label: 'Công việc',
    color:  '#FFC107'
  },
  {
    label: 'Học tập',
    color:  '#04297A'
  },
  {
    label: 'Quan trọng',
    color:  '#7A0C2E'
  }
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


export default function CalendarForm(event) {

  console.log(event)
  const [eventColor, setEventColor] = React.useState(event.color || '#00AB55');

  const onClickColor = (value) => {
    setEventColor(value)
  }

  const defaultStartDate = new Date();
  const defaultEndDate = new Date(defaultStartDate.getTime() + 60 * 60 * 1000);
  return (
    
    <DialogContent sx={{ width: '600px', mt: '4px',}} >
         <Grid container spacing={3} >

            <Grid item xs={12} sm={6} md={12} mt={1}>
              <TextField
              required
              id="outlined-required"
              label="Title"
              defaultValue={ event.name || "Please enter the task title!"}
              fullWidth
              />
            </Grid>

            <Grid item xs={12} sm={6} md={6}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateTimePicker
                label="Starting date"
                defaultValue={dayjs(event.start) ||  dayjs(defaultStartDate)}
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
                defaultValue={dayjs(event.end) ||  dayjs(defaultEndDate)}
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
              defaultValue={event.repeat ||"None"}
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
              defaultValue={event.alert ||"None"}
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
                defaultValue={ event.description ||"Add a description"}
                fullWidth
              />
            </Grid>

            <Grid item xs={12} sm={6} md={12}>
      
            <Stack direction="row" spacing={0.5}>
            { COLOR_OPTIONS.map((option) => (
              <Tooltip key={option.label} title={option.label}>
                <IconButton
                  value={option.label}
                  onClick={() => onClickColor(option.label)}
                  sx={{ width: 32, height: 32, padding: 0, border: 0 , borderRadius: '50%' , background: option.color}}
                  >
                  {option.label === eventColor && <Iconify sx = {{color: '#000'}} icon={'teenyicons:tick-small-outline'}/>}
                  
                </IconButton>
              </Tooltip>
            ))}
          </Stack>
            </Grid>
        </Grid>
    </DialogContent>
  );
}
