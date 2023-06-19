import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';

import data from './data';
import TaskItem from './TaskItem';
import TaskDetail from './TaskDetail';
import style from "../../assets/css/task.module.css";

const completedTask = data.filter((item) => item.status === 'completed');
const newTask = data.filter((item) => item.status === 'newTask');
const inProcessTask = data.filter((item) => item.status === 'inProcess');
const submitedTask = data.filter((item) => item.status === 'submited');

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
const Task = () => {
  const [value, setValue] = React.useState(0);

  const [open, setOpen] = React.useState(false);
  const [item, setItem] = React.useState(null);
  const handleOpen = (item) =>{
    setOpen(true);
    setItem(item);
  } 
  const handleClose = () => setOpen(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box className="" sx={{ flexGrow: 1 }}>
      <Grid className="px-[24px] pt-[0px] " container spacing={2}>
        <Grid item xs={12} className=''>
          <Item className="text-[28px] py-[0px] w-[100%]">
            <h4 className="text-left text-[black] w-[100%] bg-[white] font-[600] my-[0]">Task</h4>
          </Item>
        </Grid>
        <Grid  style={{paddingTop:"0px"}} item xs={12}>
          <Box sx={{ width: '100%' }}>
            <Box  className="bg-[white] w-[100%]" sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                <Tab label="New Task" {...a11yProps(0)} />
                <Tab label="In process" {...a11yProps(1)} />
                <Tab label="Submited" {...a11yProps(2)} />
                <Tab label="Completed" {...a11yProps(3)} />
              </Tabs>
            </Box>
            <TabPanel className={`h-[490px] overflow-y-scroll overflow-y-hidden ${style.nonescroll}`} value={value} index={0}>
              {newTask.map((item, index) => (
                <TaskItem show={()=>{ handleOpen(item)}} data={item} key={index} />
              ))}
            </TabPanel>
            <TabPanel value={value} index={1} className="h-[490px]">
              {inProcessTask.map((item, index) => (
                <TaskItem show={()=>{ handleOpen(item)}} data={item} key={index} />
              ))}
            </TabPanel>
            <TabPanel className="h-[490px]" value={value} index={2}>
              {submitedTask.map((item, index) => (
                <TaskItem show={()=>{ handleOpen(item)}} data={item} key={index} />
              ))}
            </TabPanel>
            <TabPanel className="h-[490px]" value={value} index={3}>
              {completedTask.map((item, index) => (
                <TaskItem show={()=>{ handleOpen(item)}} data={item} key={index} />
              ))}
            </TabPanel>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <TaskDetail data={item}  handleClose={handleClose} handleOpen={handleOpen} open={open} />
        </Grid>
      </Grid>

    </Box>
  );
};

export default Task;