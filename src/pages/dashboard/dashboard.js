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
  AppTasks,
  // AppNewsUpdate,
  // AppOrderTimeline,
  // AppCurrentVisits,
  AppWebsiteVisits,
  AppTrafficBySite,
  AppWidgetSummary,
  // AppCurrentSubject,
  // AppConversionRates,
} from '../../sections/@dashboard/app';

import events from '../../_mock/events';
import {   CalendarStyle } from '../../sections/@dashboard/calendar';
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

        <Grid container spacing={3}>
          <Grid item xs={12} sm={3} md={6}>
            <AppWidgetSummary title="Schedule" total={5} icon={'bi:calendar-week'} />
          </Grid>

          <Grid item xs={12} sm={3} md={6}>
            <AppWidgetSummary title="Task" total={2} color="info" icon={'bi:card-checklist'} />
          </Grid>


           

         

          <Grid item xs={12} md={6} lg={4} >
          <Card>
          <CalendarStyle>
            <FullCalendar
              weekends
              editable
              droppable
              selectable
              events={events}
              rerenderDelay={10}
              initialDate={new Date()}
              initialView='listWeek'
              dayMaxEventRows={3}
              eventDisplay="block"
              headerToolbar={false}
              allDayMaintainDuration
              eventResizableFromStart
              plugins={[listPlugin,]}
              height={ '330px'}
            />
          </CalendarStyle>
        </Card>
          </Grid>

          

          <Grid item xs={12} md={6} lg={8}  >
            <AppTasks
              title="Tasks"
              list={[
                { id: '1', label: 'Create FireStone Logo' },
                { id: '2', label: 'Add SCSS and JS files if required' },
                { id: '3', label: 'Stakeholder Meeting' },
                { id: '4', label: 'Scoping & Estimations' },
                { id: '5', label: 'Sprint Showcase' },
              ]}
            />
          </Grid>
       

        <Grid item xs={12} md={6} lg={8}>
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
                  type: 'line',
                  fill: 'solid',
                  data: [23, 11, 22, 27, 13],
                },
                {
                  name: 'Last week',
                  type: 'area',
                  fill: 'gradient',
                  data: [44, 55, 41, 67, 22, 43, 21],
                },
              ]}
            />
          </Grid>

        <Grid item xs={6} mt={6} lg={4}>
            <AppTrafficBySite
              title="Traffic by Site"
              list={[
                {
                  name: 'Google Calendar',
                  value: 5,
                  icon: <Iconify icon={'logos:google-calendar'} color="#1877F2" width={32} />,
                },
                {
                  name: 'Notion',
                  value: 3,
                  icon: <Iconify icon={'logos:notion-icon'} color="#DF3E30" width={32} />,
                },
                {
                  name: 'Todoist',
                  value: 411213,
                  icon: <Iconify icon={'logos:todoist'} color="#006097" width={32} />,
                },
                {
                  name: 'Twitter',
                  value: 443232,
                  icon: <Iconify icon={'eva:twitter-fill'} color="#1C9CEA" width={32} />,
                },
              ]}
            />
          </Grid>
          </Grid>
      </Container>
    </>
  );
}
