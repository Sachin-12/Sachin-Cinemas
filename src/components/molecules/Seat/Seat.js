import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import ChairIcon from '@mui/icons-material/Chair';

export default function Seat({ isDisabled = false, isSelected = false, onClick = () => { } }) {
  return (
    <IconButton onClick={onClick} disabled={isDisabled} color={isSelected ? "primary" : "secondary"}>
      <ChairIcon />
    </IconButton>
  );
}
