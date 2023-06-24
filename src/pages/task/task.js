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
                <Badge badgeContent={0} color="secondary">  
                 <Tab label="New Task" {...a11yProps(0)} />  
                </Badge>
                <Badge badgeContent={0} color="secondary">  
                <Tab label="In process" {...a11yProps(1)} />
                </Badge>
                <Badge badgeContent={2} color="secondary">  
                <Tab label="Submited" {...a11yProps(2)} />
                </Badge>
                <Badge badgeContent={0} color="secondary">  
                <Tab label="Completed" {...a11yProps(3)} />
                </Badge>
               
                
                
              </Tabs>
           
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
        </Grid>
        <Grid item xs={12}>
          <TaskDetail data={item}  handleClose={handleClose} handleOpen={handleOpen} open={open} />
        </Grid>
      </Grid>

      </Container>
    </Page>
  );
};

export default Task;