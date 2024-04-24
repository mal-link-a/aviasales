import { getSearchID } from '../../../api/getSearchID';
import { getTicketList } from '../../../api/getTicketList';
import { Ticket } from '../types/Ticket';
import { getCheapest } from '../../../store/sortTickets';

export async function getFilteredTickets() {
  const searchID: string = await getSearchID();
  const Tickets: Ticket[] = await getTicketList(searchID);
  const cheapestTickets: Ticket[] = getCheapest(Tickets);
  return cheapestTickets;
}
