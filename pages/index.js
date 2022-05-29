import React, { useEffect } from 'react'
import Topbar from '../src/components/molecules/Topbar/Topbar'
import create from 'zustand'
import Router from 'next/router'

export const useStore = create(set => ({
  page: 1,
  limit: 10,
  date: new Date(),
  availableTickets: 0,
  preferredTicketCount: 2,
  ticketsSelectedCount: 0,
  totalPrice: 0,
  selectedMovieId: null,
  disabledSeats: [],
  selectedSeats: [],
  screenLayout: {}, // Determines the layout of the screen
  bookingTimeExpired: false,
  rowsPrice: [],
  setPage: (page) => set(() => ({ page })),
  setLimit: (limit) => set(() => ({ limit })),
  setDate: (date) => set(() => ({ date })),
  setAvailableTickets: (availableTickets) => set(() => ({ availableTickets })),
  setPreferredTicketCount: (preferredTicketCount) => set(() => ({ preferredTicketCount })),
  setTicketsSelectedCount: (ticketsSelectedCount) => set(() => ({ ticketsSelectedCount })),
  setTotalPrice: (totalPrice) => set(() => ({ totalPrice })),
  setSelectedMovieId: (selectedMovieId) => set(() => ({ selectedMovieId })),
  setDisabledSeats: (disabledSeats) => set(() => ({ disabledSeats })),
  setSelectedSeats: (selectedSeats) => set(() => ({ selectedSeats })),
  setScreenLayout: (screenLayout) => set(() => ({ screenLayout })),
  setBookingTimeExpired: (bookingTimeExpired) => set(() => ({ bookingTimeExpired })),
  setRowsPrice: (rowsPrice) => set(() => ({ rowsPrice })),
}))

function Index({ children }) {
  useEffect(() => {
    Router.push("/movies")
  }, [])

  return (
    <>
      <Topbar >
        {children}
      </Topbar>
    </>
  )
}

export default Index