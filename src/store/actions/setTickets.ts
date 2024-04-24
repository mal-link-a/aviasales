import { Ticket } from '../../features/aviasales/types/Ticket';

export function SET_TICKETS(tickets: Ticket[]) {
  return {
    type: 'SET_TICKETS',
    data: tickets,
  };
}
