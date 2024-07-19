import * as React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { styled } from '@mui/system';
import { Box } from '@mui/material';
import dayjs from 'dayjs';

const CustomDateCalendar = styled(DateCalendar)(({ theme }) => ({
  '& .MuiPickersCalendarHeader-root': {
    '& .MuiPickersCalendarHeader-label': {
      fontSize: '1.25rem',
      fontWeight: 'bold',
    },
  },
  '& .MuiDayCalendar-weekContainer': {
    '& .MuiPickersDay-root': {
      fontWeight: 'normal',
      '&.Mui-selected': {
        backgroundColor: theme.palette.primary.main,
      },
      '&.MuiPickersDay-today': {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
      },
    },
  },
  '& .MuiPickersCalendarHeader-dayLabel': {
    fontWeight: 'bold',
  },
}));

export default function Calendar() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
        <CustomDateCalendar
          views={['year', 'month', 'day']}
          showDaysOutsideCurrentMonth={false}
          defaultCalendarMonth={dayjs('2024-07-01')}
        />
      </Box>
    </LocalizationProvider>
  );
}
