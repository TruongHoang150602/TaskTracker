import PropTypes from 'prop-types';

import { useState } from 'react';
// @mui
// import { alpha } from '@mui/material/styles';
import { Stack, MenuItem,  Button, Popover } from '@mui/material';
import Iconify from './iconify/Iconify';
// mocks_

// ----------------------------------------------------------------------

Filter.propTypes = {
    data: PropTypes.array,
  };

// ----------------------------------------------------------------------

export default function Filter({data = []}) {
  const [open, setOpen] = useState(null);

  const handleOpen = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  return (
    <>
        <Button
            variant="outlined"
            startIcon={<Iconify icon={'solar:filter-linear'} width={20} height={20}  />}
            onClick={handleOpen}
        >
            Filter
        </Button>

      <Popover
        open={Boolean(open)}
        anchorEl={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        sx = {{
          p: 0,
          mt: 1.5,
          ml: 0.75,
          width: 250,
          '& .MuiMenuItem-root': {
            typography: 'body2',
            borderRadius: 0.75,
          },
        }}
      >
        

        <Stack sx={{ p: 1 }}>
          {data.map((option) => (
            <MenuItem key={option} onClick={handleClose}>
              {option}
            </MenuItem>
          ))}
        </Stack>
      </Popover>
    </>
  );
}
