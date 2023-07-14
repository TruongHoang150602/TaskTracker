import FullCalendar from '@fullcalendar/react'; // => request placed at the top
import listPlugin from '@fullcalendar/list';
import { Helmet } from 'react-helmet-async';
// import { faker } from '@faker-js/faker';
// @mui
import { Grid, Container, Typography, Card } from '@mui/material';
// components
import Iconify from '../../components/iconify';
import account from '../../_mock/account';
// sections
import {
  // AppTasks,
  AppNewsUpdate,
  // AppOrderTimeline,
  // AppCurrentVisits,
  CustomizedTimeline,
  AppWebsiteVisits,
  // AppTrafficBySite,
  AppWidgetSummary,
  // AppCurrentSubject,
  // AppConversionRates,
} from '../../sections/@dashboard/app';

import { fDate } from '../../utils/formatTime';

// ----------------------------------------------------------------------

export default function DashboardAppPage() {
  // const theme = useTheme();


  return (
    <>
      <Helmet>
        <title> Dashboard | TaskTracker+ </title>
      </Helmet>

      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Hi, Welcome {account.displayName}! 
        </Typography>
        <Typography variant="h5" sx={{ mb: 5 }}>
          Today {fDate(new Date())} , you have
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={12} sm={3} md={6}>
            <AppWidgetSummary title="Schedule" total={5} icon={'bi:calendar-week'} />
          </Grid>

          <Grid item xs={12} sm={3} md={6}>
            <AppWidgetSummary title="Task" total={2} color="info" icon={'bi:card-checklist'} />
          </Grid>


           

         

          <Grid item xs={12} md={6} lg={5} >
          <Card sx={{height:'100%', paddingTop:'46px'}}>
          <CustomizedTimeline />
        </Card>
          </Grid>

          <Grid item xs={12} md={6} lg={7}  >
            <AppNewsUpdate
              title="Tasks"
            />
          </Grid>
       

        <Grid item xs={12} md={12} lg={12}>
            <AppWebsiteVisits
              title="Schedule"
              subheader="(-30%) than last week"
              chartLabels={[
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thusday',
                'Friday',
                'Saturday',
                'Sunday'
              ]}
              chartData={[
                {
                  name: 'Current week',
                  type: 'area',
                  fill: 'gradient',
                  data: [8, 8.5, 9, 8.25, 7.5],
                },
                {
                  name: 'Last week',
                  type: 'area',
                  fill: 'gradient',
                  data: [8.5, 9.5, 9.25, 9, 8.5, 8, 7],
                },
              ]}
            />
          </Grid>
          </Grid>
      </Container>
    </>
  );
}
