import React, { useEffect } from 'react'
import { useStore } from '../../../../pages'

import Seat from '../Seat/Seat'
import style from "./ScreenLayout.module.css"

function ScreenLayout({ rows, columns, disabledSeats }) {
  const { selectedSeats, setSelectedSeats } = useStore()

  const onClick = (row, column) => {
    if (selectedSeats.some(seat => seat.row === row && seat.column === column)) {
      setSelectedSeats(selectedSeats.filter(seat => seat.row !== row || seat.column !== column))
    } else {
      setSelectedSeats([...selectedSeats, { row, column }])
    }
  }

  return (
    <>
      <div className={""}>
        {[...Array(columns)].map((_, column) => (
          <div key={`column-${column}`} className={style.row}>
            {[...Array(rows).keys()].map((_, row) => (
              <Seat row={row} column={column} selectedSeats={selectedSeats} key={`row-${row}`} onClick={() => onClick(row, column)} />
            ))}
          </div>
        ))}
      </div>

    </>
  )
}

export default ScreenLayout