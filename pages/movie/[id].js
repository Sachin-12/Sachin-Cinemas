import { Button, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import Router from 'next/router'

import Timer from '../../src/components/atoms/Timer/Timer'
import DatePicker from '../../src/components/molecules/DatePicker/DatePicker'
import ScreenLayout from '../../src/components/molecules/ScreenLayout/ScreenLayout'
import styles from '../../styles/movie/[id].module.css'
import { useStore } from '..'
import { Dialog } from "@mui/material"

function BookMovie({ rows = 15, columns = 15, disabledSeats = [{ row: 1, column: 5 }], bookedSeats = [{ row: 2, column: 6 }, { row: 2, column: 7 }] }) {

  const { setSelectedSeats, selectedSeats, bookingTimeExpired } = useStore();
  const [showConfirmation, setShowConfirmation] = React.useState(false);
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
      setShowConfirmation(true)
    }
  }

  const handleClose = () => {
    setIsAlert(false)
  }

  const closePayment = () => {
    Router.push("/movies")
  }

  useEffect(() => {
    return () => {
      setShowConfirmation(false)
      setIsAlert(false)
      setSelectedSeats([])
    }
  }, [])

  const ShowPayment = () => {
    return (<>
      <Dialog open={showConfirmation} onClose={closePayment}>
        <div className={styles.payment}>
          <div className={styles.paymentHeading}>
            <Typography variant='h2'>Payment</Typography>
          </div>
          <div >
            <Typography variant='h6'>Total Amount : <span>Rs. {selectedSeats.length * 100}</span></Typography>
            <Typography variant='h6'>Payment Mode : <span>Online</span></Typography>
            <Typography variant='h6'>Payment Status : <span>Success</span></Typography>

            <hr />
            <div className={styles.bookedSeats}>
              <Typography variant='h4'>Booked Seats </Typography>
              {selectedSeats.map(seat => {
                return <Typography key={`${seat.row}-${seat.column}`} variant='h6'>Row: {seat.row} - Column: {seat.column}</Typography>
              })}
            </div>
          </div>
          <div className={styles.paymentFooter}>
            <Button variant='contained' color='primary' onClick={closePayment}>Close</Button>
          </div>
        </div>
      </Dialog>
    </>)
  }

  return (
    <>
      <div className={styles.bookingContainer}>
        {showConfirmation ?
          <>
            <p>Enjoy the Movie!</p>
            <ShowPayment />
          </> :
          <>
            <DatePicker />
            <Timer />
            <p> Screen this way!</p>
            <hr style={{ width: "100%" }} />
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