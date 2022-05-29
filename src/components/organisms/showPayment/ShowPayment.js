import { Button, Dialog, Typography } from "@mui/material"
import styles from './ShowPayment.module.css'

const ShowPayment = ({ showConfirmation, closePayment, selectedSeats, status, mode, totalPrice }) => {
  return (<>
    <Dialog open={showConfirmation} onClose={closePayment}>
      <div className={styles.payment}>
        <div className={styles.paymentHeading}>
          <Typography variant='h2'>
            Payment
          </Typography>
        </div>
        <div >
          <Typography variant='h6'>Total Amount : <span>Rs. {totalPrice}</span></Typography>
          <Typography variant='h6'>Payment Mode : <span>{mode}</span></Typography>
          <Typography variant='h6'>Payment Status : <span>{status}</span></Typography>

          <hr />
          <div className={styles.bookedSeats}>
            <Typography variant='h4'>Booked Seats </Typography>
            {selectedSeats.map(seat => {
              return <Typography key={`${seat.row}-${seat.column}`} variant='h6'>Row: {seat.row} - Column: {seat.column}</Typography>
            })}
          </div>
        </div>
        <div >
          <Button variant='contained' color='primary' onClick={closePayment}>Close</Button>
        </div>
      </div>
    </Dialog>
  </>)
}

export default ShowPayment