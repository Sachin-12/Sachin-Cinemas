
import React from 'react'
import { render, screen } from "@testing-library/react"
import '@testing-library/jest-dom'

import ShowPayment from "../ShowPayment"

describe('ShowPayment component', () => {
  it("should render the component", () => {
    const { getByText } = render(
      <ShowPayment showConfirmation={true} closePayment={() => { }} selectedSeats={[{ row: 1, column: 5 }]} status={"Success"} mode={"Online"} />
    )
    expect(getByText('Payment')).toBeVisible()
    expect(getByText('Total Amount :')).toBeVisible()
    expect(getByText('Payment Mode :')).toBeVisible()
    expect(getByText('Payment Status :')).toBeVisible()
    expect(getByText('Booked Seats')).toBeVisible()
    expect(getByText('Row: 1 - Column: 5')).toBeVisible()
  })
})