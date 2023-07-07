// @mui
import PropTypes from 'prop-types';
import {
  Box,
  Stack,
  Link,
  Card,
  Button,
  Divider,
  Typography,
  CardHeader,
  CardActions,
  LinearProgress,
  CardContent,
  Grid,
} from '@mui/material';
// utils
import { NavLink as RouterLink } from 'react-router-dom';
import { fToNow } from '../../../utils/formatTime';
// components
import Iconify from '../../../components/iconify';
import TaskItem from '../../../pages/task/TaskItem';
import data from '../../../pages/task/data';
// ----------------------------------------------------------------------

AppNewsUpdate.propTypes = {
  title: PropTypes.string,
  subheader: PropTypes.string,
  list: PropTypes.array.isRequired,
};

const inProcessTask = data.filter((item) => item.status === 'In Progress');

export default function AppNewsUpdate({ title, subheader, list, ...other }) {
  return (
    <Card {...other}>
      <CardHeader title={title} subheader={subheader} />
      <Grid container spacing={0.5} mt={4} mb={4} >
        {inProcessTask.map((item, index) => (
          <Grid xs={6}>
            <TaskItem data={item} key={index}/>
          </Grid>
        ))}
      </Grid>

      <Divider />

      <Box sx={{ p: 2, textAlign: 'right' }}>
        <Button component={RouterLink} to={'/task'} size="small" color="inherit" endIcon={<Iconify icon={'eva:arrow-ios-forward-fill'} />}>
          View all
        </Button>
      </Box>
    </Card>
  );
}

// ----------------------------------------------------------------------

NewsItem.propTypes = {
  news: PropTypes.shape({
    description: PropTypes.string,
    image: PropTypes.string,
    postedAt: PropTypes.instanceOf(Date),
    title: PropTypes.string,
  }),
};

function NewsItem({ news }) {
  const { image, title, description, postedAt } = news;

  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      <Box component="img" alt={title} src={image} sx={{ width: 48, height: 48, borderRadius: 1.5, flexShrink: 0 }} />

      <Box sx={{ minWidth: 240, flexGrow: 1 }}>
        <Link color="inherit" variant="subtitle2" underline="hover" noWrap>
          {title}
        </Link>

        <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
          {description}
        </Typography>
      </Box>

      <Typography variant="caption" sx={{ pr: 3, flexShrink: 0, color: 'text.secondary' }}>
        {fToNow(postedAt)}
      </Typography>
    </Stack>
  );
}
