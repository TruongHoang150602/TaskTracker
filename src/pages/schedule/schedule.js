import FullCalendar from '@fullcalendar/react'; // => request placed at the top
import listPlugin from '@fullcalendar/list';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import timelinePlugin from '@fullcalendar/timeline';
import interactionPlugin from '@fullcalendar/interaction';
//
import { useState, useRef, useEffect } from 'react';
// @mui
import { Card, Button, Container, DialogTitle } from '@mui/material';
// redux
// import { useDispatch, useSelector } from '../../redux/store';
// import { openModal, closeModal } from '../../redux/slices/calendar';
// routes
// import { PATH_DASHBOARD } from '../../routes/paths';
// hooks
// import useSettings from '../../hooks/useSettings';
import useResponsive from '../../hooks/useResponsive';
// layouts
// import Layout from '../../layouts';
// components
import Page from '../../components/Page';
import Iconify from '../../components/iconify';
import { DialogAnimate } from '../../components/animate';
import HeaderBreadcrumbs from '../../components/HeaderBreadcrumbs';
// // sections
import {  CalendarForm, CalendarStyle, CalendarToolbar } from '../../sections/@dashboard/calendar';

// ----------------------------------------------------------------------


// ----------------------------------------------------------------------

// const selectedEventSelector = (state) => {
//   const { events, selectedEventId } = state.calendar;
//   if (selectedEventId) {
//     return events.find((_event) => _event.id === selectedEventId);
//   }
//   return null;
// };

export default function Calendar() {

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

  return (
    <Page title="Calendar">
      <Container >
        <HeaderBreadcrumbs
          heading="Calendar"
          links={[{ name: 'Dashboard', href: '' }, { name: 'Calendar' }]}
          action={
            <Button
              variant="contained"
              startIcon={<Iconify icon={'eva:plus-fill'} width={20} height={20}  />}
              onClick={handleAddEvent}
            >
              New Event
            </Button>
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
              // events={events}
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

        <DialogAnimate open={open} onClose={handleCloseModal}>
          <DialogTitle>Test</DialogTitle>

          <CalendarForm />
        </DialogAnimate>
      </Container>
    </Page>
  );
}
