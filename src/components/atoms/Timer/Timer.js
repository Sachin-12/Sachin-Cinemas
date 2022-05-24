import React from 'react'
import { useState, useEffect } from 'react';

import styles from "./Timer.module.css"
import { useStore } from '../../../../pages';

const Timer = (props) => {
  const { setBookingTimeExpired } = useStore()
  const { initialMinute = 5, initialSeconds = 0 } = props;
  const [minutes, setMinutes] = useState(initialMinute);
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          setBookingTimeExpired(true);
          clearInterval(myInterval)
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000)
    return () => {
      clearInterval(myInterval);
    };
  });

  return (
    <div className={styles.timer}>
      {minutes === 0 && seconds === 0
        ? null
        : <h1> <span className={styles.title}>Booking slot expires in </span>{minutes}:{seconds < 10 ? `0${seconds}` : seconds}</h1>
      }
    </div>
  )
}

export default Timer;