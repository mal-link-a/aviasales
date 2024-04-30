import { createSelector } from '@reduxjs/toolkit'

import { Ticket } from '../../features/aviasales/types'

const filtered = (state: { filteredTickets: Ticket[]; }) => state.filteredTickets;
const show = (state: { showMode: number; }) => state.showMode;

export const dataListSelector = createSelector([filtered, show], (filteredTickets, showMode) => {
  return {
    tickets: filteredTickets,
    showMode: showMode,
    };
})