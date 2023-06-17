import FullCalendar from '@fullcalendar/react'; // => request placed at the top
import listPlugin from '@fullcalendar/list';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import timelinePlugin from '@fullcalendar/timeline';
import interactionPlugin from '@fullcalendar/interaction';
//
import { useState, useRef, useEffect } from 'react';
// @mui
import { Card, Button, Container, DialogTitle, Stack } from '@mui/material';
import useResponsive from '../../hooks/useResponsive';

// components
import Page from '../../components/Page';
import Filter from '../../components/Filter';
import Iconify from '../../components/iconify';
import { DialogAnimate } from '../../components/animate';
import HeaderBreadcrumbs from '../../components/HeaderBreadcrumbs';
// // sections
import {  CalendarForm, CalendarStyle, CalendarToolbar } from '../../sections/@dashboard/calendar';
import events from '../../_mock/events'; 
// ----------------------------------------------------------------------


// ----------------------------------------------------------------------



export default function Calendar() {

  const eventsCalendar = events.map((event) => ({
    title: event.name,
    color: event.colors,
    start: event.time.start,
    end: event.time.end
  }));
  const [open, setOpen] = useState(false);

  const isDesktop = useResponsive('up', 'sm');

  const calendarRef = useRef(null);

  const [date, setDate] = useState(new Date());

  const [view, setView] = useState(isDesktop ? 'dayGridMonth' : 'listWeek');

  // const selectedEvent = useSelector(selectedEventSelector);

  // const { events, isOpenModal, selectedRange } = useSelector((state) => state.calendar);

  // useEffect(() => {
  //   // dispatch(getEvents());
  // }, [dispatch]);

  useEffect(() => {
    const calendarEl = calendarRef.current;
    if (calendarEl) {
      const calendarApi = calendarEl.getApi();
      const newView = isDesktop ? 'dayGridMonth' : 'listWeek';
      calendarApi.changeView(newView);
      setView(newView);
    }
  }, [isDesktop]);

  const handleClickToday = () => {
    const calendarEl = calendarRef.current;
    if (calendarEl) {
      const calendarApi = calendarEl.getApi();
      calendarApi.today();
      setDate(calendarApi.getDate());
    }
  };

  const handleChangeView = (newView) => {
    const calendarEl = calendarRef.current;
    if (calendarEl) {
      const calendarApi = calendarEl.getApi();
      calendarApi.changeView(newView);
      setView(newView);
    }
  };

  const handleClickDatePrev = () => {
    const calendarEl = calendarRef.current;
    if (calendarEl) {
      const calendarApi = calendarEl.getApi();
      calendarApi.prev();
      setDate(calendarApi.getDate());
    }
  };

  const handleClickDateNext = () => {
    const calendarEl = calendarRef.current;
    if (calendarEl) {
      const calendarApi = calendarEl.getApi();
      calendarApi.next();
      setDate(calendarApi.getDate());
    }
  };

  const handleAddEvent = () => {
    setOpen(true);
    console.log(open)
  };

  const handleCloseModal = () => {
    setOpen(false);
    console.log(open)
  };
  console.log(events);

  return (
    <Page title="Calendar">
      <Container >
        <HeaderBreadcrumbs
          heading="Calendar"
          links={[{ name: 'Dashboard', href: '' }, { name: 'Calendar' }]}
          action={
            <Stack direction="row" spacing={2}>
             
             <Filter data = {['task', 'team']} />

              <Button
                variant="contained"
                startIcon={<Iconify icon={'eva:plus-fill'} width={20} height={20}  />}
                onClick={handleAddEvent}
              >
                New Event
              </Button>
            </Stack>
          
          }
        />

        <Card>
          <CalendarStyle>
            <CalendarToolbar
              date={date}
              view={view}
              onNextDate={handleClickDateNext}
              onPrevDate={handleClickDatePrev}
              onToday={handleClickToday}
              onChangeView={handleChangeView}
            />
            <FullCalendar
              weekends
              editable
              droppable
              selectable
              events={eventsCalendar}
              ref={calendarRef}
              rerenderDelay={10}
              initialDate={date}
              initialView={view}
              dayMaxEventRows={3}
              eventDisplay="block"
              headerToolbar={false}
              allDayMaintainDuration
              eventResizableFromStart
              // select={handleSelectRange}
              // eventDrop={handleDropEvent}
              // eventClick={handleSelectEvent}
              // eventResize={handleResizeEvent}
              height={isDesktop ? 720 : 'auto'}
              plugins={[listPlugin, dayGridPlugin, timelinePlugin, timeGridPlugin, interactionPlugin]}
            />
          </CalendarStyle>
        </Card>

          {/* model */}
        <DialogAnimate open={open} onClose={handleCloseModal}>
          <DialogTitle>Test</DialogTitle>
          <CalendarForm />
        </DialogAnimate>

      </Container>
    </Page>
  );
}
