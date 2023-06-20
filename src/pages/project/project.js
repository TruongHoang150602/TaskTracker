import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Helmet } from 'react-helmet-async';
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';
import { TextField } from '@mui/material';

import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

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
  const [showCreateProject, setShowCreateProject] = useState(false);
  const [projectName, setProjectName] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [projects, setProjects] = useState(project);

  const handleNewProjectClick = () => {
    setShowCreateProject(true);
  };

  const handleProjectNameChange = (event) => {
    setProjectName(event.target.value);
  };

  const handleProjectDescriptionChange = (event) => {
    setProjectDescription(event.target.value);
  };

  const handleCancelClick = () => {
    setShowCreateProject(false);
  };

  const handleCreateProjectClick = () => {
    const newProject = {
      name: projectName,
      progress: 0, // Set initial progress value
      quality: 0, // Set initial quality value
    };

    // Update the projects list with the new project
    setProjects([...projects, newProject]);

    // Reset the form fields
    setProjectName('');
    setProjectDescription('');

    // Close the create project popup
    setShowCreateProject(false);

    // After successfully creating the project, navigate to the project detail page
    // navigate('/projectdetail');
  };

  return (
    <div style={{ maxWidth: '1000px', marginLeft: 'auto', marginRight: 'auto' }}>
      <Helmet>
        <title> Project | TaskTracker+ </title>
      </Helmet>
      <h2 style={{ margin: '0 0 30px 0', fontSize: '40px' }}>Project</h2>
      <div style={{ width: '65px', marginLeft: 'auto' }}>
        <Button
          onClick={handleNewProjectClick}
          variant="contained"
          size="small"
          style={{ marginBottom: '20px', fontSize: '15px' }}
        >
          New
        </Button>
      </div>
      {showCreateProject && (
        <Card
          style={{
            position: 'fixed',
            top: '55%',
            left: '57.5%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: '#fff',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
            padding: '20px',
            zIndex: 2,
            width: '400px',
            margin: '0 auto',
          }}
        >
          <h3>New Project</h3>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <TextField
              style={{ marginBottom: '10px' }}
              required
              id="projectName"
              label="Project Name"
              value={projectName}
              onChange={handleProjectNameChange}
            />
            <TextField style={{ marginBottom: '10px' }} required id="projectMember" label="Member" />
            <TextField
              style={{ marginBottom: '10px' }}
              required
              id="projectDescription"
              label="Project Description"
              multiline
              rows={7}
              value={projectDescription}
              onChange={handleProjectDescriptionChange}
            />
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Button variant="outlined" onClick={handleCancelClick} style={{ marginRight: '10px' }}>
                Cancel
              </Button>
              <Button variant="contained" onClick={handleCreateProjectClick}>
                Create Project
              </Button>
            </div>
          </div>
        </Card>
      )}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, 300px)',
            justifyContent: 'space-between',
          }}
        >
          {projects.map((p, index) => (
            <Card sx={{ width: 300, marginBottom: '20px' }} key={index}>
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
        {showCreateProject && (
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              zIndex: 1,
            }}
          />
        )}
      </div>
    </div>
  );
}
