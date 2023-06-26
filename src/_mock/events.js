import { sample } from 'lodash';

// ----------------------------------------------------------------------

function randomTimeRange() {
    const currentDate = new Date(); // Lấy ngày hiện tại
  
    // Sinh ngẫu nhiên một số từ 0 đến 6 để đại diện cho các ngày trong tuần (0: Chủ nhật, 1: Thứ 2, 2: Thứ 3, ...)
    const randomDayOfWeek = Math.floor(Math.random() * 7);
  
    // Tính toán ngày bắt đầu và kết thúc dựa trên ngày hiện tại và randomDayOfWeek
    const startDay = currentDate.getDate() + randomDayOfWeek;
    const endDay = startDay;
  
    // Lấy thời gian bắt đầu trong ngày
    const startHour = Math.floor(Math.random() * 24); // Giờ bắt đầu (0-23)
    const startMinute = Math.floor(Math.random() * 60); // Phút bắt đầu (0-59)
    const startTime = new Date(currentDate.getFullYear(), currentDate.getMonth(), startDay, startHour, startMinute);
  
    // Lấy thời gian kết thúc trong ngày
    const endHour = startHour + Math.floor(Math.random() * (24 - startHour)); // Giờ kết thúc lớn hơn hoặc bằng giờ bắt đầu
    const endMinute = Math.floor(Math.random() * 60); // Phút kết thúc (0-59)
    const endTime = new Date(currentDate.getFullYear(), currentDate.getMonth(), endDay, endHour, endMinute);
  
    return {
      start: startTime,
      end: endTime
    };
  }

const EVENT_NAME = [
    'Làm việc văn phòng',
    'Chăm sóc gia đình',
    'Đi mua sắm',
    'Thể dục buổi sáng',
    'Học tập',
    'Dọn dẹp nhà cửa',
    'Nấu ăn',
    'Đọc sách',
    'Xem phim',
    'Gặp bạn bè'
];
// const EVENT_COLOR = ['#00AB55', '#000000', '#FFFFFF', '#FFC0CB', '#FF4842', '#1890FF', '#94D82D', '#FFC107'];

// ----------------------------------------------------------------------
const COLOR_OPTIONS = [
  {
    label: 'Việc nhà',
    color: '#00AB55'
  }, 
  {
    label: 'Nghỉ ngơi',
    color:  '#FF4842'
  }, 
  {
    label: 'Cuộc gặp',
    color: '#1890FF'
  }, 
  {
    label: 'Ăn uống',
    color: '#54D62C'
  },
  {
    label: 'Công việc',
    color:  '#FFC107'
  },
  {
    label: 'Học tập',
    color:  '#04297A'
  },
  {
    label: 'Quan trọng',
    color:  '#7A0C2E'
  }
];

const events = [...Array(10)].map((_, index) => ({
    id: index,
    title: EVENT_NAME[index],
    color: sample(COLOR_OPTIONS).color,
    allDay: sample(true, false),
    repeat: sample(['none', 'Every day', 'Every week', 'Every month']),
    alert: sample(['none', 'Every day', 'Every week', 'Every month']),
    description: "",
    ... randomTimeRange()
}));

export default events;

