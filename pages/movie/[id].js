import { Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Router from 'next/router'

import Timer from '../../src/components/atoms/Timer/Timer'
import DatePicker from '../../src/components/molecules/DatePicker/DatePicker'
import ScreenLayout from '../../src/components/molecules/ScreenLayout/ScreenLayout'
import styles from '../../styles/movie/[id].module.css'
import { useStore } from '..'
import Dialog from '../../src/components/atoms/Dialog/Dialog'
import ShowPayment from '../../src/components/organisms/showPayment/ShowPayment'

function BookMovie({ rows = 15, columns = 15, disabledSeats = [{ row: 1, column: 5 }], bookedSeats = [{ row: 2, column: 6 }, { row: 2, column: 7 }], rowsPrice = [100, 110, 120 ,130, 140, 150, 160, 170, 180, 190] }) {

  const { setSelectedSeats, selectedSeats, bookingTimeExpired } = useStore();
  const [showConfirmation, setShowConfirmation] = React.useState(false);
  const [isAlert, setIsAlert] = React.useState(false)
  const [totalPrice, setTotalPrice ] = useState(0)
  const layout = {
    columnSplit: [3, 9, 3], rowSplit: [3, 10, 2]
  }

  const calculateTotalPrice = () => {
    return selectedSeats.reduce((acc, seat) => {
      const price = rowsPrice[seat.row]
      return acc + price
    }, 0)
  }

  const onSubmit = () => {
    if (selectedSeats.length === 0) {
      setIsAlert(true)
    } else if (bookingTimeExpired) {
      Router.push('/movies')
    } else {
      setShowConfirmation(true)
      console.log(calculateTotalPrice())
      setTotalPrice(calculateTotalPrice())
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])



  return (
    <>
      <div className={styles.bookingContainer}>
        {showConfirmation ?
          <>
            <p>Enjoy the Movie!</p>
            <ShowPayment showConfirmation={showConfirmation} totalPrice={totalPrice} closePayment={closePayment} selectedSeats={selectedSeats} status={"Success"} mode={"Online"}/>
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