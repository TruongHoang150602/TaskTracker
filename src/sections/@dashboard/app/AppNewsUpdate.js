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
import { fToNow } from '../../../utils/formatTime';
// components
import Iconify from '../../../components/iconify';
import Scrollbar from '../../../components/scrollbar';

// ----------------------------------------------------------------------

AppNewsUpdate.propTypes = {
  title: PropTypes.string,
  subheader: PropTypes.string,
  list: PropTypes.array.isRequired,
};

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

export default function AppNewsUpdate({ title, subheader, list, ...other }) {
  return (
    <Card {...other}>
      <CardHeader title={title} subheader={subheader} />
        <Grid container spacing={1} mt={4} mb={3} padding={3}>
          <Grid xs={6} >
            <Card sx={{ cursor: 'pointer', width:  290, marginBottom: '20px' }}>
              <CardContent style={{ paddingBottom: '0' }}>
                <Typography gutterBottom variant="h5" component="div">
                  Message archiving
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Progress
                </Typography>
                <LinearProgressWithLabel value={60} />
                <Typography variant="body2" color="text.secondary">
                  Quality
                </Typography>
                <LinearProgressWithLabel value={70} />
              </CardContent>
              <CardActions style={{ margin: '10px 24px 24px 24px', padding: '0' }}>
                <Button variant="contained" size="small">
                  School
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid xs={6}>
            <Card sx={{ cursor: 'pointer', width:  290, marginBottom: '20px' }}>
              <CardContent style={{ paddingBottom: '0' }}>
                <Typography gutterBottom variant="h5" component="div">
                  Message archiving
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Progress
                </Typography>
                <LinearProgressWithLabel value={60} />
                <Typography variant="body2" color="text.secondary">
                  Quality
                </Typography>
                <LinearProgressWithLabel value={70} />
              </CardContent>
              <CardActions style={{ margin: '10px 24px 24px 24px', padding: '0' }}>
                <Button variant="contained" size="small">
                  School
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>


      <Divider />

      <Box sx={{ p: 2, textAlign: 'right' }}>
        <Button size="small" color="inherit" endIcon={<Iconify icon={'eva:arrow-ios-forward-fill'} />}>
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
