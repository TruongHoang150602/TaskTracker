import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import { TextField,  DialogContent, Grid, MenuItem, Stack, Tooltip, IconButton, FormControlLabel, Switch} from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
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

CalendarDetail.propTypes = {
  event: PropTypes.object,
};

// ----------------------------------------------------------------------


export default function CalendarDetail({event}) {

  console.log(event)
  const [eventColor, setEventColor] = React.useState(event.color);

  const [allDay, setAllDay] = React.useState(event.allDay);
  
  const onClickAllDay = () => {
    setAllDay(!allDay)
  }

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
              defaultValue={ event.title}
              fullWidth
              />
            </Grid>
            
            <Grid item xs={12} sm={6} md={12} >
            <FormControlLabel control={<Switch />} label="All day"  labelPlacement="start" onClick={onClickAllDay} />
            </Grid>

            <Grid item xs={12} sm={6} md={6}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              {allDay === false && 
              <DateTimePicker
                label="Starting date"
                defaultValue={event.start}
                sx = {{  width: '100%' }}
              />  ||
              <DatePicker
              label="Starting date"
              defaultValue={event.start}
              sx = {{  width: '100%' }}
            /> 
              }
              
            </LocalizationProvider>
            </Grid>

            <Grid item xs={12} sm={6} md={6}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
            {allDay === false && 
              <DateTimePicker
                label="Ending date"
                defaultValue={dayjs(defaultEndDate)}
                sx = {{  width: '100%' }}
              />  ||
              <DatePicker
              label="Ending date"
              defaultValue={dayjs(defaultEndDate)}
              sx = {{  width: '100%' }}
            /> 
              }
            </LocalizationProvider>
            </Grid>

            <Grid item xs={12} sm={6} md={6}>
            <TextField
              id="outlined-select-currency"
              select
              label="Repeat"
              defaultValue={"None"}
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
              defaultValue={"None"}
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
                defaultValue={"Add a description"}
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
 