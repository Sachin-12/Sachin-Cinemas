import React from 'react'
import { useStore } from '../../../../pages'

import Seat from '../Seat/Seat'
import style from "./ScreenLayout.module.css"
import getActualSplit from '../../../utility/getActualSplit'
import { Typography } from '@mui/material'
import styles from "./ScreenLayout.module.css"

function ScreenLayout({ rows, columns, layout, disabledSeats, bookedSeats }) {
  const { selectedSeats, setSelectedSeats } = useStore()

  const onClick = (row, column) => {
    if (disabledSeats.some(seat => seat.row === row && seat.column === column) || bookedSeats.some(seat => seat.row === row && seat.column === column)) {
      return
    }
    if (selectedSeats.some(seat => seat.row === row && seat.column === column)) {
      setSelectedSeats(selectedSeats.filter(seat => seat.row !== row || seat.column !== column))
    } else {
      setSelectedSeats([...selectedSeats, { row, column }])
    }
  }

  const layoutActual = {
    rowSplit: getActualSplit(layout.rowSplit),
    columnSplit: getActualSplit(layout.columnSplit)
  }

  const BookingHelper = () => {
    return (<>
      <Typography className={styles.bookingHelper} variant='h6'>
        Tickets Selected : {selectedSeats.length}
      </Typography>
    </>)
  }

  return (
    <>
      <div >
        {[...Array(rows + (layoutActual.rowSplit.length - 1))].map((_, row) => (
          <div key={`row-${row}`} className={style.row}>
            {[...Array(columns + (layoutActual.columnSplit.length - 1)).keys()].map((_, column) => {
              const isDisabled = disabledSeats.some(seat => seat.row === row && seat.column === column)
              const isEmptyColumn = layoutActual.columnSplit.includes(column)
              const isEmptyRow = layoutActual.rowSplit.includes(row)
              const isBookedSeat = bookedSeats.some(seat => seat.row === row && seat.column === column)

              if (isEmptyColumn || isEmptyRow) {
                return (<>

                  <div key={`empty-column-${column}`} className={style.emptyColumn} />

                </>)

              } else {
                return (<Seat row={row} column={column} isBookedSeat={isBookedSeat} selectedSeats={selectedSeats} key={`row-${row}-column-${column}`} onClick={() => onClick(row, column)} isDisabled={isDisabled} />)
              }
            })}
          </div>
        ))}
        <BookingHelper />
      </div>

    </>
  )
}

export default ScreenLayout