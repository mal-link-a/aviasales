import { ListFilterType } from '../features/aviasales/types/ListFilterType';
import { createReducer } from '@reduxjs/toolkit'

import { filterByConnections } from './filterByConnections';

const initialState = {
  filterAll: false,
  filterNoConnection: true,
  filter1Connection: true,
  filter2Connection: true,
  filter3Connection: false,
  filterAdvantages: ListFilterType.Cheapest,
  tickets: [],
  filteredTickets: [],
  showMode: 5,
};

/*
export function reducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_CONNECTION_FILTER': {
      console.log('SET_CONNECTION_FILTER');
      let { filterAll, filterNoConnection, filter1Connection, filter2Connection, filter3Connection } = state;
      return Object.assign(
        {},
        state,
        ReducerConnectionFilter(action.payload.data, filterAll, filterNoConnection, filter1Connection, filter2Connection, filter3Connection),
      );
    }
    case 'SET_ADVANTAGES_FILTER': {
      console.log('SET_ADVANTAGES_FILTER');
      if (state.filterAdvantages !== action.payload.id) {
        return Object.assign({}, state, { filterAdvantages: action.payload.data, showMode: 5 });
      }
      return state;
    }
    case 'SET_TICKETS': {
      if (action.payload.tickets.length !== 0) {
        return Object.assign({}, state, { tickets: action.payload.tickets });
      }
      return state;
    }
    case 'SET_FILTERED_TICKETS': {
      console.log('SET_FILTERED_TICKETS');
      let { tickets, filterAll, filterNoConnection, filter1Connection, filter2Connection, filter3Connection } = state;
      return Object.assign({}, state, {
        filteredTickets: filterByConnections(
          tickets,
          filterAll,
          filterNoConnection,
          filter1Connection,
          filter2Connection,
          filter3Connection,
        ),
        showMode: 5,
      });
    }
    case 'SHOW_MORE_TICKETS': {
      console.log('SHOW_MORE_TICKETS');
      return Object.assign({}, state, { showMode: state.showMode + 5 });
    }
    default : return state;
  }
}*/

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase('SET_CONNECTION_FILTER', (state, action) => {
      console.log('SET_CONNECTION_FILTER');
      let { filterAll, filterNoConnection, filter1Connection, filter2Connection, filter3Connection } = state;
      return Object.assign(
        {},
        state,
        ReducerConnectionFilter(action.payload.data, filterAll, filterNoConnection, filter1Connection, filter2Connection, filter3Connection),
      );
    })
    .addCase('SET_ADVANTAGES_FILTER', (state, action) => {
      console.log('SET_ADVANTAGES_FILTER');
      if (state.filterAdvantages !== action.payload.id) {
        return Object.assign({}, state, { filterAdvantages: action.payload.data, showMode: 5 });
      }
      return state;
    })
    .addCase('SET_TICKETS', (state, action) => {
      if (action.payload.tickets.length !== 0) {
        return Object.assign({}, state, { tickets: action.payload.tickets });
      }
      return state;
    })
    .addCase('SET_FILTERED_TICKETS', (state, action) => {
      console.log('SET_FILTERED_TICKETS');
      let { tickets, filterAll, filterNoConnection, filter1Connection, filter2Connection, filter3Connection } = state;
      return Object.assign({}, state, {
        filteredTickets: filterByConnections(
          tickets,
          filterAll,
          filterNoConnection,
          filter1Connection,
          filter2Connection,
          filter3Connection,
        ),
        showMode: 5,
      });
    })
    .addCase('SHOW_MORE_TICKETS', (state, action) => {
      console.log('SHOW_MORE_TICKETS');
      return Object.assign({}, state, { showMode: state.showMode + 5 });
    })
})


function ReducerConnectionFilter(id, all, noCon, iCon, iiCon, iiiCon) {
  let arr = [noCon, iCon, iiCon, iiiCon];
  arr[id - 1] = !arr[id - 1];
  console.log(arr);
  console.log(iiiCon);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === true) {
      break;
    }
    if (i === arr.length - 1) {
      return {
        filterNoConnection: false,
        filter1Connection: false,
        filter2Connection: false,
        filter3Connection: false,
        filterAll: true,
      };
    }
  }

  switch (id) {
    case 0: {
      if (!all) {
        return {
          filterNoConnection: false,
          filter1Connection: false,
          filter2Connection: false,
          filter3Connection: false,
          filterAll: true,
        };
      }
      return {
        filterAll: false,
      };
    }
    case 1: {
      if (!noCon) {
        return {
          filterAll: false,
          filterNoConnection: true,
        };
      }
      return {
        filterNoConnection: false,
      };
    }
    case 2: {
      if (!iCon) {
        return {
          filterAll: false,
          filter1Connection: true,
        };
      }
      return {
        filter1Connection: false,
      };
    }
    case 3: {
      if (!iiCon) {
        return {
          filterAll: false,
          filter2Connection: true,
        };
      }
      return {
        filter2Connection: false,
      };
    }
    case 4: {
      if (!iiiCon) {
        return {
          filterAll: false,
          filter3Connection: true,
        };
      }
      return {
        filter3Connection: false,
      };
    }
    default: return {};
  }
}
