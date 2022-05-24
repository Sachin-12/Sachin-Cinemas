import React from 'react'

import { useStore } from '..'
import DatePicker from '../../src/components/molecules/DatePicker/DatePicker'
import ScreenLayout from '../../src/components/molecules/ScreenLayout/ScreenLayout'
import Seat from '../../src/components/molecules/Seat/Seat'
import styles from '../../styles/movie/[id].module.css'

function BookMovie({ rows = 20, columns = 15, disabledSeats = [] }) {
  return (
    <>
      <DatePicker />
      <div className={styles.screen}>

        <ScreenLayout rows={rows} columns={columns} disabledSeats={disabledSeats} />
      </div>
    </>
  )
}

export default BookMovie