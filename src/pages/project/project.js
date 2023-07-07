import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  LinearProgress,
  Box,
  TextField,
  Stack,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Alert,
} from '@mui/material';

import { useNavigate } from 'react-router-dom';
import * as React from 'react';
import { useState } from 'react';

import HeaderBreadcrumbs from '../../components/HeaderBreadcrumbs';
import Iconify from '../../components/iconify/Iconify';
import Filter from '../../components/Filter';
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

const filterOptions = [
  {
    label: 'Progress',
    color: '#00AB55',
  },
  {
    label: 'Quality',
    color: '#FF4842',
  },
];

const workspaceOptions = ['School', 'Home', 'Company'];

export default function Project() {
  const navigate = useNavigate();
  const [showCreateProject, setShowCreateProject] = useState(false);
  const [projectName, setProjectName] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [projectWorkspace, setProjectWorkspace] = useState('');
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

  const handleProjectWorkspaceChange = (event) => {
    setProjectWorkspace(event.target.value);
  };

  const handleCancelClick = () => {
    setShowCreateProject(false);
  };

  const handleCreateProjectClick = () => {
    const newProject = {
      name: projectName,
      workspace: projectWorkspace,
      progress: 0, // Set initial progress value
      quality: 0, // Set initial quality value
    };

    // Update the projects list with the new project
    setProjects([...projects, newProject]);

    // Reset the form fields
    setProjectName('');
    setProjectDescription('');
    setProjectWorkspace('');

    // Close the create project popup
    setShowCreateProject(false);
  };

  return (
    <div style={{ maxWidth: '1000px', marginLeft: 'auto', marginRight: 'auto' }}>
      <HeaderBreadcrumbs
        heading="Project"
        action={
          <Stack direction="row" spacing={2}>
            <Filter data={filterOptions} />

            <Button
              variant="contained"
              startIcon={<Iconify icon={'eva:plus-fill'} width={20} height={20} />}
              onClick={handleNewProjectClick}
            >
              New Project
            </Button>
          </Stack>
        }
      />

      {showCreateProject && (
        <Box
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
            borderRadius: '14px',
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
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <FormControl style={{ width: '200px' }}>
                <InputLabel id="demo-simple-select-helper-label">Workspace</InputLabel>
                <Select
                  style={{ marginBottom: '10px' }}
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  label="Workspace"
                  value={projectWorkspace}
                  onChange={handleProjectWorkspaceChange}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {workspaceOptions.map((option) => (
                    <MenuItem value={option}>{option}</MenuItem>
                  ))}
                </Select>
              </FormControl>

              <TextField
                placeholder="Or type here..."
                style={{ marginLeft: '10px', marginBottom: '10px' }}
                value={projectWorkspace}
                onChange={handleProjectWorkspaceChange}
              />
            </div>
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
        </Box>
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
            <Card
              sx={{ cursor: 'pointer', width: 300, marginBottom: '20px' }}
              key={index}
              onClick={() => navigate(`/projectdetailid=${index}`)}
            >
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
              <CardActions style={{ margin: '10px 24px 24px 24px', padding: '0', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                <Button variant="contained" size="small">
                  {p.workspace}
                </Button>
                <p style={{ margin: 'auto', paddingLeft: '95px' }}>{p.role}</p>
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
    </div >
  );
}
