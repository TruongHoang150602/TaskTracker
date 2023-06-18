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
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box className="" sx={{ flexGrow: 1 }}>
      <Grid className="px-[24px] pt-[0px]" container spacing={2}>
        <Grid item xs={12}>
          <Item className="text-[28px]">
            <h4 className="text-left text-[black] font-[600]">Task</h4>
          </Item>
        </Grid>
        <Grid item xs={12}>
          <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                <Tab label="New Task" {...a11yProps(0)} />
                <Tab label="In process" {...a11yProps(1)} />
                <Tab label="Submited" {...a11yProps(2)} />
                <Tab label="Completed" {...a11yProps(3)} />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              {newTask.map((item, index) => (
                <TaskItem data={item} key={index} />
              ))}
            </TabPanel>
            <TabPanel value={value} index={1}>
              {inProcessTask.map((item, index) => (
                <TaskItem data={item} key={index} />
              ))}
            </TabPanel>
            <TabPanel value={value} index={2}>
              {submitedTask.map((item, index) => (
                <TaskItem data={item} key={index} />
              ))}
            </TabPanel>
            <TabPanel value={value} index={3}>
              {completedTask.map((item, index) => (
                <TaskItem data={item} key={index} />
              ))}
            </TabPanel>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Task;
