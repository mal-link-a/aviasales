import { getSearchID } from '../../api/getSearchID';
import { getTicketList } from '../../api/getTicketList';
import { Ticket } from '../../features/aviasales/types/Ticket';
import { getCheapest } from './sortTickets';

export async function getFilteredTickets() {
  const searchID: string = await getSearchID();
  const Tickets: Ticket[] = await getTicketList(searchID);
  const cheapestTickets: Ticket[] = getCheapest(Tickets);
  return cheapestTickets;
}
