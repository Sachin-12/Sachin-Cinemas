import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import ChairIcon from '@mui/icons-material/Chair';

import styles from "./Seat.module.css"

export default function Seat({ isDisabled = false, onClick = () => { }, selectedSeats, row, column }) {

  const isSelected = selectedSeats.some(seat => seat.row === row && seat.column === column)

  return (
    <IconButton onClick={onClick} disabled={isDisabled} >
      <ChairIcon className={isSelected ? styles.selectedSeat : styles.availableSeat} />
    </IconButton>
  );
}
