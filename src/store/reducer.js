import { ListFilterType } from '../features/aviasales/types/ListFilterType';

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

export function reducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_CONNECTION_FILTER': {
      console.log('SET_CONNECTION_FILTER');
      let { filterAll, filterNoConnection, filter1Connection, filter2Connection, filter3Connection } = state;
      return Object.assign(
        {},
        state,
        ReducerConnectionFilter(action.id, filterAll, filterNoConnection, filter1Connection, filter2Connection, filter3Connection),
      );
    }
    case 'SET_ADVANTAGES_FILTER': {
      console.log('SET_ADVANTAGES_FILTER');
      if (state.filterAdvantages !== action.id) {
        return Object.assign({}, state, { filterAdvantages: action.id, showMode: 5 });
      }
      return state;
    }
    case 'SET_TICKETS': {
      console.log('SET_TICKETS');
      console.log(action.data);
      if (action.data.length !== 0) {
        return Object.assign({}, state, { tickets: action.data });
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
  }
  return state;
}
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
  }
}

/*function ReducerConnectionFilter(id, isTrue) {
  switch (id) {
    case 0: {
      if (!isTrue) {
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
      if (!isTrue) {
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
      if (!isTrue) {
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
      if (!isTrue) {
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
      if (!isTrue) {
        return {
          filterAll: false,
          filter3Connection: true,
        };
      }
      return {
        filter3Connection: false,
      };
    }
  }
}*/
