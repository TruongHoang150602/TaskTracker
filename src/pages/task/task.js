import * as React from 'react';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';
import {Box, Paper, Grid, Tabs, Tab, Typography,  Container, Badge} from '@mui/material'
import data from './data';
import TaskItem from './TaskItem';
import TaskDetail from './TaskDetail';
import style from "../../assets/css/task.module.css";
import HeaderBreadcrumbs from "../../components/HeaderBreadcrumbs";
import Page from "../../components/Page"
import Filter from "../../components/Filter";
// import {projectDetail} from "../../_mock/project_data"



const completedTask = data.filter((item) => item.status === 'Completed');
const newTask = data.filter((item) => item.status === 'New Task');
const inProcessTask = data.filter((item) => item.status === 'In Progress');
const submitedTask = data.filter((item) => item.status === 'Submitted');

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
          <Typography className='flex flex-wrap'>{children}</Typography>
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


const map = {
  "Submitted": 10,
  "Completed": 20,
  "In Progress": 30,
  "New Task": 40,
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


  const [age1, setAge1] = React.useState("");
  const [open1, setOpen1] = React.useState(false);

  const handleChange1 = (event) => {
    console.log(event.target.value)
    setAge1(event.target.value);
  };

  const handleClose1 = () => {
    setOpen1(false);
  };

  const handleOpen1 = () => {
    setOpen1(true);
  };


  const handleOpen = (item) =>{
    // console.log(item)
    console.log(map[item.status]);
    setAge1(map[item.status]);
    setOpen(true);
    setItem(item);
  } 
  const handleClose = () => setOpen(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (  
    <Page title="Task">
      <Container >
        <HeaderBreadcrumbs
          heading="Task"
          links={[{ name: 'Dashboard', href: '' }, { name: 'Task' }]}
          action={
             
             <Filter  />   
          }
        />
        <Grid  container spacing={2}>
        <Grid  style={{paddingTop:"0px"}} item xs={12}>
           
              <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                <Tab label="New Task" {...a11yProps(0)} />
                <Tab label="In progress" {...a11yProps(1)} />
                <Tab label="Submited" {...a11yProps(2)} />
                <Tab label="Completed" {...a11yProps(3)} />
              </Tabs>
            <TabPanel className={`flex w-[100%]`} value={value} index={0}>
                {newTask.map((item, index) => (
                  <TaskItem show={()=>{ handleOpen(item)}} data={item} key={index} />
                ))}
            </TabPanel>
            <TabPanel value={value} index={1} className="">
              {inProcessTask.map((item, index) => (
                <TaskItem show={()=>{ handleOpen(item)}} data={item} key={index} />
              ))}
            </TabPanel>
            <TabPanel className="" value={value} index={2}>
              {submitedTask.map((item, index) => (
                <TaskItem show={()=>{ handleOpen(item)}} data={item} key={index} />
              ))}
            </TabPanel>
            <TabPanel className="" value={value} index={3}>
              {completedTask.map((item, index) => (
                <TaskItem show={()=>{ handleOpen(item)}} data={item} key={index} />
              ))}
            </TabPanel>
        </Grid>
        <Grid item xs={12}>
          <TaskDetail data={item} age1={age1} handleClose={handleClose} handleOpen={handleOpen} open={open} setAge1={setAge1} open1={open1} setOpen1={setOpen1} handleChange1={handleChange1} handleClose1={handleClose1} handleOpen1={handleOpen1}/>
        </Grid>
      </Grid>

      </Container>
    </Page>
  );
};

export default Task;