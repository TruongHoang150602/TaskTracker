import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const colors = {
    "HIGH" : "#FF7979",
    "MEDIUM" : "#FF7979",
}

const TaskItem = ({data, show}) => {
  
  return (
    <Card style={{height: 180}} onClick={show} className=' my-[20px] mx-[20px]' sx={{ width: 320  }}>
      <CardActionArea style={{height: 180}}>
        <CardContent >
          <Typography  gutterBottom variant="h5" component="div">
            {data.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {data.project}
          </Typography>
          <Typography className='flex justify-between items-center' variant="body2" color="text.secondary">
            <div className='flex items-center leading-[30px] text-[#FF7979]'><AccessTimeIcon className='text-[16px] leading-[30px] text-[#FF7979]'/> <p className='m-[0px] leading-[30px]'>{data.date}</p></div>
            <div className={`w-[80px] bg-[#FF7979] bg-[${colors[data.quality]}] h-[30px] text-center leading-[30px] rounded-[15px]`}>{data.quality}</div>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};


export default TaskItem;
