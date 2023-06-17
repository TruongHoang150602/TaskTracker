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

const TaskItem = ({data}) => {

  return (
    <Card className='ml-[80px] my-[20px]' sx={{ maxWidth: 700 }}>
      <CardActionArea>
        <CardContent >
          <Typography  gutterBottom variant="h5" component="div">
            {data.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {data.project}
          </Typography>
          <Typography className='flex justify-between items-center' variant="body2" color="text.secondary">
            <div className='leading-[30px]'><AccessTimeIcon className='text-[16px]'/> {data.date}</div>
            <div className={`w-[80px] bg-[${colors[data.quanlity]}] h-[30px] text-center leading-[30px] rounded-[15px]`}>{data.quanlity}</div>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};


export default TaskItem;
