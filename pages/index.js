import React from 'react'
import Topbar from '../src/components/molecules/Topbar/Topbar'
import create from 'zustand'

export const useStore = create(set => ({
  page: 1,
  limit: 10,
  date: new Date(),
  availableTickets: 0,
  preferredTicketCount: 2,
  ticketsSelected: 0,
  totalPrice: 0,
  setPage: (page) => set(() => ({ page })),
  setLimit: (limit) => set(() => ({ limit })),
  setDate: (date) => set(() => ({ date })),
  setAvailableTickets: (availableTickets) => set(() => ({ availableTickets })),
  setPreferredTicketCount: (preferredTicketCount) => set(() => ({ preferredTicketCount })),
  setTicketsSelected: (ticketsSelected) => set(() => ({ ticketsSelected })),
  setTotalPrice: (totalPrice) => set(() => ({ totalPrice })),
}))

function Index({ children }) {

  return (
    <>
      <Topbar >
        {children}
      </Topbar>
    </>
  )
}

export default Index