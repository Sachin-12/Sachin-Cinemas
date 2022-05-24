import { Button } from '@mui/material'
import React, { useEffect } from 'react'

import Timer from '../../src/components/atoms/Timer/Timer'
import DatePicker from '../../src/components/molecules/DatePicker/DatePicker'
import ScreenLayout from '../../src/components/molecules/ScreenLayout/ScreenLayout'
import styles from '../../styles/movie/[id].module.css'
import { useStore } from '..'
import Dialog from "../../src/components/atoms/Dialog/Dialog"
import { Router } from 'next/router'

function BookMovie({ rows = 15, columns = 15, disabledSeats = [{ row: 1, column: 5 }], bookedSeats = [{ row: 2, column: 6 }, { row: 2, column: 7 }] }) {

  const { selectedSeats, setSelectedSeats, bookingTimeExpired } = useStore();
  const [showPayment, setShowpayment] = React.useState(false);
  const [isAlert, setIsAlert] = React.useState(false)
  const layout = {
    columnSplit: [3, 9, 3], rowSplit: [3, 10, 2]
  }

  const onSubmit = () => {
    if (selectedSeats.length === 0) {
      setIsAlert(true)
    } else if (bookingTimeExpired) {
      Router.push('/movies')
    } else {
      setShowpayment(true)
    }
  }

  const handleClose = () => {
    setIsAlert(false)
  }

  const closePayment = () => {
    setShowpayment(false)
  }

  useEffect(() => {
    return () => {
      setShowpayment(false)
      setIsAlert(false)
    }
  }, [])

  return (
    <>
      <div className={styles.bookingContainer}>
        {showPayment ? <p>Payment</p> :
          <>
            <DatePicker />
            <Timer />
            <div className={styles.screen}>
              <ScreenLayout bookedSeats={bookedSeats} rows={rows} columns={columns} disabledSeats={disabledSeats} layout={layout} />
            </div>
            <Button variant="contained" className={`${styles.timer}`} onClick={onSubmit}>
              Confirm
            </Button>
            <Dialog isOpen={isAlert} title={"Please select atleast 1 seat to continue"} primaryActionText={"Okay"} onClose={handleClose} />
          </>
        }
      </div>
    </>
  )
}

export default BookMovie  