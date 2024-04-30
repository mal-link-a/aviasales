import { Ticket } from '../../features/aviasales/types/Ticket';
import { createAction } from '@reduxjs/toolkit'

const SET_TICKETS = 'SET_TICKETS'

export const setTickets = createAction(SET_TICKETS, function prepare(tickets: Ticket[]) {
  console.log('SET_TICKETS')
  console.log('tickets')
  return {
    payload: {
      tickets,      
    },
  }
})