import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Helmet } from 'react-helmet-async';
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';

import { project } from '../../_mock/project_data';

function LinearProgressWithLabel(props) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '100%', mr: 1 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(props.value)}%`}</Typography>
      </Box>
    </Box>
  );
}

export default function Project() {
  const navigate = useNavigate();

  return (
    <div style={{ maxWidth: '1000px', marginLeft: 'auto', marginRight: 'auto' }}>
      <Helmet>
        <title> Project | TaskTracker+ </title>
      </Helmet>
      <h2 style={{ margin: '0 0 30px 0' }}>Project</h2>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        {project.map((p, index) => (
          <Card sx={{ width: 300 }} key={index}>
            <CardContent style={{ paddingBottom: '0' }}>
              <Typography gutterBottom variant="h5" component="div">
                {p.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Progress
              </Typography>
              <LinearProgressWithLabel value={p.progress} />
              <Typography variant="body2" color="text.secondary">
                Quality
              </Typography>
              <LinearProgressWithLabel value={p.quality} />
            </CardContent>
            <CardActions style={{ margin: '10px 24px 24px 24px', padding: '0' }}>
              <Button onClick={() => navigate('/projectdetail')} variant="contained" size="small">
                View Details
              </Button>
            </CardActions>
          </Card>
        ))}
      </div>
    </div>
  );
}
