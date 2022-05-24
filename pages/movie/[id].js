import React from 'react'

import DatePicker from '../../src/components/molecules/DatePicker/DatePicker'
import ScreenLayout from '../../src/components/molecules/ScreenLayout/ScreenLayout'
import styles from '../../styles/movie/[id].module.css'

function BookMovie({ rows = 15, columns = 15, disabledSeats = [{ row: 1, column: 5 }] }) {
  const layout = {
    columnSplit: [3, 9, 3], rowSplit: [3, 10, 2]
  }

  return (
    <>
      <DatePicker />
      <div className={styles.screen}>

        <ScreenLayout rows={rows} columns={columns} disabledSeats={disabledSeats} layout={layout} />
      </div>
    </>
  )
}

export default BookMovie  