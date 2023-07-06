import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';

const colors = {
  HIGH: '#FF7979',
  MEDIUM: '#FF7979',
};

const TaskItem = ({ data, show }) => {
  return (
    <Card style={{ height: 180 }} onClick={show} className=" my-[20px] mx-[20px]" sx={{ width: 320 }}>
      <CardActionArea style={{ height: 180 }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {data.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {data.project}
          </Typography>
          {data.point == null ? (
            <Typography className="flex justify-between items-center" variant="body2" color="text.secondary">
              <div className="flex items-center leading-[30px] text-[#FF7979]">
                <AccessTimeIcon className="text-[16px] leading-[30px] text-[#FF7979]" />{' '}
                <p className="m-[0px] leading-[30px]">{data.start}</p>
              </div>
              <div
                className={`w-[80px] bg-[#FF7979] bg-[${
                  colors[data.quality]
                }] h-[30px] text-center leading-[30px] rounded-[15px]`}
              >
                {data.priority}
              </div>
            </Typography>
          ) : (
            <Typography className="flex justify-between items-center" variant="body2" color="text.secondary">
              <div className="flex items-center leading-[30px] text-[#FF7979]">
                <FileUploadOutlinedIcon className="text-[24px] leading-[30px] text-[#FF7979]" />{' '}
                <p className="m-[0px] leading-[30px]">{data.end}</p>
              </div>
              <div
                className={`w-[80px] bg-[#FF7979] bg-[${
                  colors[data.quality]
                }] h-[30px] text-center leading-[30px] rounded-[15px]`}
              >
                {data.point}
              </div>
            </Typography>
          )}
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default TaskItem;
