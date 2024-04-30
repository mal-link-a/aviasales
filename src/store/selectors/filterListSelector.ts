import { createSelector } from '@reduxjs/toolkit'

const all = (state: { filterAll: boolean; }) => state.filterAll;
const noCon = (state: { filterNoConnection: boolean; }) => state.filterNoConnection;
const ICon = (state: { filter1Connection: boolean; }) => state.filter1Connection;
const IICon = (state: { filter2Connection: boolean; }) => state.filter2Connection;
const IIICon = (state: { filter3Connection: boolean; }) => state.filter3Connection;

export const filterListSelector = createSelector([all, noCon, ICon, IICon, IIICon], (filterAll, filterNoConnection, filter1Connection, filter2Connection, filter3Connection) => {
    return {
        all: filterAll,
        noCon: filterNoConnection,
        ICon: filter1Connection,
        IICon: filter2Connection,
        IIICon: filter3Connection,     
      };
  })