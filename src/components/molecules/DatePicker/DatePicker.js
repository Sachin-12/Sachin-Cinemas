import * as React from 'react';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { addDays } from 'date-fns';

import styles from './DatePicker.module.css';
import { useStore } from '../../../../pages/index';

export default function DatePicker() {
  const { date, setDate } = useStore();

  const handleChange = (newValue) => {
    setDate(newValue)
  };

  return (
    <div className={styles.datePickerContainer}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Stack spacing={3}>
          <DesktopDatePicker
            label="Choose a Date"
            inputFormat="MM/dd/yyyy"
            value={date}
            onChange={handleChange}
            renderInput={(params) => <TextField {...params} />}
            // Allow from current date to next 10 days
            shouldDisableDate={(date) => date > addDays(new Date(), 10) || date < new Date()}
          />
        </Stack>
      </LocalizationProvider>
    </div>
  );
}
