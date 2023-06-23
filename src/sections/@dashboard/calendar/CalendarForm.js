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

// ----------------------------------------------------------------------

CalendarForm.propTypes = {
  event: PropTypes.object,
};
const defaultStartDate = new Date();
const defaultEndDate = new Date(defaultStartDate.getTime() + 60 * 60 * 1000);

const getInitialValues = (event) => {
  const _event = {
    title: event ? event.title : 'Please enter the task title!',
    description: event ? event.description : 'Add a description',
    color: event ? event.color : '#00AB55',
    allDay: event ? event.allDay : false,
    start:  event ? event.start : defaultStartDate,
    end: event ? event.end : defaultEndDate,
    repeat: event ? event.repeat : 'None',
    alert: event ? event.alert : 'None',
  };
  return _event;

};
export default function CalendarForm({event}) {

  const initEvent = getInitialValues(event);

  const [eventColor, setEventColor] = React.useState('#00AB55');

  const [allDay, setAllDay] = React.useState(false);
  
  const onClickAllDay = () => {
    setAllDay(!allDay)
  }

  const onClickColor = (value) => {
    setEventColor(value)
  }

  return (
    
    <DialogContent sx={{ width: '600px', mt: '4px',}} >
         <Grid container spacing={3} >

            <Grid item xs={12} sm={6} md={12} mt={1}>
              <TextField
              required
              id="outlined-required"
              label="Title"
              defaultValue={initEvent.title}
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
                defaultValue={dayjs(initEvent.start)}
                sx = {{  width: '100%' }}
              />  ||
              <DatePicker
              label="Starting date"
              defaultValue={dayjs(initEvent.start)}
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
                defaultValue={dayjs(initEvent.end)}
                sx = {{  width: '100%' }}
              />  ||
              <DatePicker
              label="Ending date"
              defaultValue={dayjs(initEvent.end)}
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
              defaultValue={initEvent.repeat}
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
              defaultValue={initEvent.alert}
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
                defaultValue={initEvent.description}
                fullWidth
              />
            </Grid>

            <Grid item xs={12} sm={6} md={12}>
      
            <Stack direction="row" spacing={0.5}>
            { COLOR_OPTIONS.map((option) => (
              <Tooltip key={option.label} title={option.label}>
                <IconButton
                  value={option.label}
                  onClick={() => onClickColor(option.color)}
                  sx={{ width: 32, height: 32, padding: 0, border: 0 , borderRadius: '50%' , background: option.color}}
                  >
                  {option.color === eventColor && <Iconify sx = {{color: '#000'}} icon={'teenyicons:tick-small-outline'}/>}
                </IconButton>
              </Tooltip>
            ))}
          </Stack>
            </Grid>
        </Grid>
    </DialogContent>
  );
}