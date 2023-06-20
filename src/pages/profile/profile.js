
// import { useState } from 'react';
// import {
//   Box,
//   Typography,
//   Grid,
//   TextField,
//   Button,
//   Avatar,
//   Checkbox,
//   FormControlLabel,
//   Select,
//   MenuItem
// } from '@mui/material';
// import CheckCircleIcon from '@mui/icons-material/CheckCircle';

// export default function ProfilePage() {
//   const [firstName, setFirstName] = useState('Trường');
//   const [lastName, setLastName] = useState('Hoàng Vân');
//   const [email, setEmail] = useState('truonghoang@gmail.com');
//   const [address, setAddress] = useState('Thái Bình');
//   const [contactNumber, setContactNumber] = useState('0981278134');
//   const [city, setCity] = useState('Thái Bình');
//   const [state, setState] = useState('Việt Nam');
//   const [isEmailVerified, setIsEmailVerified] = useState(false);

//   const handleFirstNameChange = (event) => {
//     setFirstName(event.target.value);
//   };

//   const handleLastNameChange = (event) => {
//     setLastName(event.target.value);
//   };

//   const handleEmailChange = (event) => {
//     const newEmail = event.target.value;
//     setEmail(newEmail);
//     setIsEmailVerified(newEmail !== '');
//   };
  

//   const handleAddressChange = (event) => {
//     setAddress(event.target.value);
//   };

//   const handleContactNumberChange = (event) => {
//     setContactNumber(event.target.value);
//   };

//   const handleCityChange = (event) => {
//     setCity(event.target.value);
//   };

//   const handleStateChange = (event) => {
//     setState(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Perform API call or update logic here
//     console.log('Profile updated:', { firstName, lastName, email, address, contactNumber, city, state });
//   };

//   const handleCancel = () => {
//     setFirstName('Trường');
//     setLastName('Hoàng Vân');
//     setEmail('truonghoang@gmail.com');
//     setAddress('Thái Bình');
//     setContactNumber('0981278134');
//     setCity('Thái Bình');
//     setState('Việt Nam');
//   };

//   return (
//     <Box
//       display="flex"
//       flexDirection="column"
//       justifyContent="center"
//       alignItems="center"
//       minHeight="100vh"
//       p={4}
//       bgcolor="background.default"
//     >
//       <Typography variant="h4" gutterBottom>
//         Edit Profile
//       </Typography>
//       <Box
//         component="form"
//         onSubmit={handleSubmit}
//         display="flex"
//         flexDirection="column"
//         alignItems="center"
//         width={500}
//         p={4}
//         borderRadius={4}
//         boxShadow={1}
//         bgcolor="background.paper"
//       >
//         <Avatar src="/assets/images/avatars/avatar_default.jpg" alt="Avatar" sx={{ width: 120, height: 120, mb: 2 }} />
//         <Typography variant="body2" mb={2}>
//           Avatar
//         </Typography>
//         <Grid container spacing={2} mb={2}>
//           <Grid item xs={6}>
//             <TextField
//               label="First Name"
//               variant="outlined"
//               value={firstName}
//               onChange={handleFirstNameChange}
//               fullWidth
//             />
//           </Grid>
//           <Grid item xs={6}>
//             <TextField
//               label="Last Name"
//               variant="outlined"
//               value={lastName}
//               onChange={handleLastNameChange}
//               fullWidth
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <TextField
//               label="Email"
//               variant="outlined"
//               value={email}
//               onChange={handleEmailChange}
//               fullWidth
//               InputProps={{
//                 endAdornment: <CheckCircleIcon color="primary" />,
//               }}
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <TextField
//               label="Address"
//               variant="outlined"
//               value={address}
//               onChange={handleAddressChange}
//               fullWidth
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <TextField
//               label="Contact Number"
//               variant="outlined"
//               value={contactNumber}
//               onChange={handleContactNumberChange}
//               fullWidth
//             />
//           </Grid>
//           <Grid item xs={6}>
//             <Select
//               label="City"
//               variant="outlined"
//               value={city}
//               onChange={handleCityChange}
//               fullWidth
//             >
//               <MenuItem value="Thái Bình">Thái Bình</MenuItem>
//               <MenuItem value="Hà Nội">Hà Nội</MenuItem>
//               <MenuItem value="Hồ Chí Minh">Hồ Chí Minh</MenuItem>
//             </Select>
//           </Grid>
//           <Grid item xs={6}>
//             <Select
//               label="State"
//               variant="outlined"
//               value={state}
//               onChange={handleStateChange}
//               fullWidth
//             >
//               <MenuItem value="Việt Nam">Việt Nam</MenuItem>
//               <MenuItem value="Mỹ">Mỹ</MenuItem>
//               <MenuItem value="Anh">Anh</MenuItem>
//               <MenuItem value="Pháp">Pháp</MenuItem>

//             </Select>
//           </Grid>
//         </Grid>
//         <Box display="flex" justifyContent="space-between" width="100%">
//           <Button type="submit" variant="contained" color="primary">
//             Save Changes
//           </Button>
//           <Button variant="contained" color="secondary" onClick={handleCancel}>
//             Cancel
//           </Button>
//         </Box>
//       </Box>
//     </Box>
//   );
// }
import { useState } from 'react';
import {
  Box,
  Typography,
  Grid,
  TextField,
  Button,
  Avatar,
  Paper,
  Divider,
  IconButton,
  InputAdornment,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from '@mui/material';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';

import { Edit as EditIcon, Save as SaveIcon, Cancel as CancelIcon, CheckCircle as CheckCircleIcon } from '@mui/icons-material';

export default function ProfilePage() {
  const [firstName, setFirstName] = useState('Hoàng Vân');
  const [lastName, setLastName] = useState('Trường');
  const [email, setEmail] = useState('truonghoang@gmail.com');
  const [contactNumber, setContactNumber] = useState('0981278134');
  const [address, setAddress] = useState('Thái Bình');
  const [city, setCity] = useState('Thái Bình'); 
  const [state, setState] = useState('Việt Nam'); 
  const [bio, setBio] = useState('Là thành viên của công ty TaskTracker+');
  const [isEditing, setIsEditing] = useState(false);
  const [isEmailVerified, setIsEmailVerified] = useState(true); // Khi email đã được xác minh

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleContactNumberChange = (event) => {
    setContactNumber(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleStateChange = (event) => {
    setState(event.target.value);
  };


  const handleBioChange = (event) => {
    setBio(event.target.value);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveChangesClick = () => {
    console.log('Profile updated:', { firstName, lastName, email, contactNumber, address, city, state, bio });
    setIsEditing(false);
  };


  const handleCancelClick = () => {
    setIsEditing(false);
  };

  const handleAvatarChange = () => {
    // Handle avatar change logic here
    console.log('Change avatar clicked');
  };

  const cities = ['Thái Bình', 'Hà Nội', 'Hồ Chí Minh', 'Đà Nẵng', 'Hải Phòng', 'Cần Thơ'];
  const states = ['Việt Nam', 'Mỹ', 'Anh', 'Pháp', 'Đức', 'Trung Quốc'];


  return (
    <Box p={4}>
      <Typography variant="h4" mb={4}>
        Profile
      </Typography>
      <Paper sx={{ p: 4 }}>
        <Box display="flex" alignItems="center" mb={4}>
          <Avatar
            src="/assets/images/avatars/avatar_default.jpg"
            alt="Default Avatar"
            sx={{ width: 80, height: 80, mr: 4 }}
          />
          <Box>
            <Typography variant="h5">
              {isEditing ? (
                <TextField
                  variant="standard"
                  label="First Name"
                  value={firstName}
                  onChange={handleFirstNameChange}
                />
              ) : (
                firstName
              )}{' '}
              {isEditing ? (
                <TextField
                  variant="standard"
                  label="Last Name"
                  value={lastName}
                  onChange={handleLastNameChange}
                />
              ) : (
                lastName
              )}
            </Typography>
            {isEditing && (
              <Button
                variant="outlined"
                size="small"
                startIcon={<PhotoCameraIcon />}
                onClick={handleAvatarChange}
              >
                Change Avatar
              </Button>
            )}
          </Box>
        </Box>
        <Divider sx={{ my: 4 }} />
        <Typography variant="h6" mb={2}>
          About Me
        </Typography>
        <TextField
          label="Bio"
          variant="standard"
          value={bio}
          onChange={handleBioChange}
          multiline
          rows={4}
          fullWidth
          disabled={!isEditing}
        />
            <TextField
              label="Email"
              variant="standard"
              value={email}
              onChange={handleEmailChange}
              fullWidth
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    {isEmailVerified ? (
                      <CheckCircleIcon color="primary" />
                    ) : (
                      <CheckCircleIcon color="disabled" />
                    )}
                    <Typography variant="body2" color={isEmailVerified ? 'primary' : 'textSecondary'}>
                      {isEmailVerified ? 'Verified' : 'Not Verified'}
                    </Typography>
                  </InputAdornment>
                ),
              }}
          disabled={!isEditing}

            />
            <TextField
              label="Contact Number"
              variant="standard"
              value={contactNumber}
              onChange={handleContactNumberChange}
              fullWidth
          disabled={!isEditing}

            />
            <TextField
              label="Address"
              variant="standard"
              value={address}
              onChange={handleAddressChange}
              fullWidth
          disabled={!isEditing}

            />

              {/* <Typography variant="body1">City</Typography>
              <Select
                value={city}
                onChange={handleCityChange}
                fullWidth
                disabled={!isEditing}
                variant="standard"
              >
                {cities.map((city) => (
                  <MenuItem key={city} value={city}>
                    {city}
                  </MenuItem>
                ))}
              </Select> */}
               <FormControl variant="standard" fullWidth disabled={!isEditing}>
                <InputLabel id="city-label">City</InputLabel>
                <Select
                  labelId="city-label"
                  id="city"
                  value={city}
                  onChange={handleCityChange}
                >
                  {cities.map((city) => (
                    <MenuItem key={city} value={city}>
                      {city}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl variant="standard" fullWidth disabled={!isEditing}>
                <InputLabel id="state-label">State</InputLabel>
                <Select
                  labelId="state-label"
                  id="state"
                  value={state}
                  onChange={handleStateChange}
                >
                  {states.map((state) => (
                    <MenuItem key={state} value={state}>
                      {state}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
        {isEditing ? (
          <Box mt={4}>
            <Button variant="contained" onClick={handleSaveChangesClick} sx={{ mr: 2 }}>
              Save Changes
            </Button>
            <Button variant="outlined" onClick={handleCancelClick} startIcon={<CancelIcon />}>
              Cancel
            </Button>
          </Box>
        ) : (
          <Button variant="contained" onClick={handleEditClick} sx={{ mt: 4 }}>
            Edit Profile
          </Button>
        )}
      </Paper>
    </Box>
  );
}








// import React, { useState } from 'react';
// import { Box, Typography, TextField, Button, FormControl, FormGroup, FormControlLabel, Switch, Avatar } from '@mui/material';

// export default function ProfileGeneral() {
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [email, setEmail] = useState('');
//   const [bio, setBio] = useState('');
//   const [notifications, setNotifications] = useState(false);

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     // Perform profile update logic here
//     console.log('First Name:', firstName);
//     console.log('Last Name:', lastName);
//     console.log('Email:', email);
//     console.log('Bio:', bio);
//     console.log('Notifications:', notifications);
//   };

//   return (
//     <Box sx={{ maxWidth: 480, mx: 'auto' }}>
//       <Typography variant="h4" gutterBottom>
//         General Settings
//       </Typography>

//       <Box display="flex" alignItems="center" flexDirection="column">
//         <Avatar
//           src="/assets/images/avatars/avatar_default.jpg"
//           alt="Default Avatar"
//           sx={{ width: 120, height: 120 }}
//         />
//         <Button variant="contained" sx={{ mt: 2 }}>
//           Change Avatar
//         </Button>
//       </Box>

//       <Box component="form" onSubmit={handleSubmit}>
//         <TextField
//           fullWidth
//           label="First Name"
//           margin="normal"
//           value={firstName}
//           onChange={(e) => setFirstName(e.target.value)}
//         />

//         <TextField
//           fullWidth
//           label="Last Name"
//           margin="normal"
//           value={lastName}
//           onChange={(e) => setLastName(e.target.value)}
//         />

//         <TextField
//           fullWidth
//           label="Email"
//           margin="normal"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />

//         <TextField
//           fullWidth
//           multiline
//           label="Bio"
//           margin="normal"
//           value={bio}
//           onChange={(e) => setBio(e.target.value)}
//         />

//         <FormControl component="fieldset" sx={{ mt: 2 }}>
//           <FormGroup>
//             <FormControlLabel
//               control={<Switch checked={notifications} onChange={() => setNotifications(!notifications)} />}
//               label="Receive notifications"
//             />
//           </FormGroup>
//         </FormControl>

//         <Button variant="contained" type="submit" sx={{ mt: 3 }}>
//           Save Changes
//         </Button>
//       </Box>
//     </Box>
//   );
// }
