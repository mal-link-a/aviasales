import { ListFilterType, Ticket, ConnectionFilter } from '../../features/aviasales/types';
import { getCheapest, getFastest, getOptimal } from './sortTickets';
import { setTickets } from '../../store/actions/setTickets';
import { setAdvantagesFilter } from '../../store/actions/setAdvantagesFilter';
import { setFilteredTickets } from '../../store/actions/setFilteredTickets';
import { setConnectionsFilter } from '../../store/actions/setConnectionFilter';

export const setAdvantages = (filter: ListFilterType, tickets: Ticket[]) => (dispatch: (arg0: { payload: { data: ListFilterType; } | { tickets: Ticket[]; } | undefined; type: "SET_ADVANTAGES_FILTER" | "SET_TICKETS" | "SET_FILTERED_TICKETS"; }) => void) => {
    dispatch(setAdvantagesFilter(filter));
    switch (filter) {
        case ListFilterType.Cheapest: {
            dispatch(setTickets(getCheapest([...tickets])));
            break;
        }
        case ListFilterType.Fastest: {
            dispatch(setTickets(getFastest([...tickets])));
            break;
        }
        case ListFilterType.Optimal: {
            dispatch(setTickets(getOptimal([...tickets])));
            break;
        }
    }
    dispatch(setFilteredTickets());
}

export const setConnections = (id: ConnectionFilter) => (dispatch: (arg0: { payload: { data: ConnectionFilter; } | undefined; type: "SET_CONNECTION_FILTER" | "SET_FILTERED_TICKETS"; }) => void) => {
    dispatch(setConnectionsFilter(id));
    dispatch(setFilteredTickets());

}