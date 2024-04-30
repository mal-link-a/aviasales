import { Ticket, ListFilterType } from '../../features/aviasales/types'
import { createSelector } from '@reduxjs/toolkit'

const filterAdv = (state: { filterAdvantages: ListFilterType; }) => state.filterAdvantages;
const tickets = (state: { tickets: Ticket[]; }) => state.tickets;

export const buttonListSelector = createSelector([filterAdv, tickets], (filterAdvantages, tickets) => {
    return {
        filterAdvantages: filterAdvantages,
        tickets: tickets,
      };
  })