import React, { useEffect } from 'react'
import { useStore } from '../../../../pages'

import Seat from '../Seat/Seat'
import style from "./ScreenLayout.module.css"

function ScreenLayout({ rows, columns, disabledSeats }) {
  const { selectedSeats, setSelectedSeats } = useStore()

  const onClick = (row, column) => {
    setSelectedSeats([...selectedSeats, { row, column }])
  }

  useEffect(() => {
    console.log(selectedSeats)
  }, [selectedSeats])
  return (
    <>
      <div className={""}>
        {[...Array(columns)].map((_, column) => (
          <div key={`column-${column}`} className={style.row}>
            {[...Array(rows).keys()].map((_, row) => (
              <Seat key={`row-${row}`} onClick={() => onClick(row, column)} />
            ))}
          </div>
        ))}
      </div>

    </>
  )
}

export default ScreenLayout