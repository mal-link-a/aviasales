import { Ticket, Segment } from '../../features/aviasales/types/Ticket';

//Сортируем по самым дешевым
export function getCheapest(Tickets: Ticket[]) {
  return Tickets.sort(compareCheapest);
  function compareCheapest(a: Ticket, b: Ticket) {
    if (a.price < b.price) {
      return -1;
    } else if (a.price > b.price) {
      return 1;
    }
    return 0;
  }
}

//Сортируем по самым быстрым
export function getFastest(Tickets: Ticket[]) {
  function compareFastest(a: Ticket, b: Ticket) {
    if (calcDuration(a.segments) > calcDuration(b.segments)) {
      return 1;
    } else if (calcDuration(a.segments) < calcDuration(b.segments)) {
      return -1;
    }
    return 0;
  }
  return Tickets.sort(compareFastest);
}
//
function calcDuration(obj: Segment[]) {
  let value = 0;
  for (let i = 0; i < obj.length; i++) {
    value = value + obj[i].duration;
  }
  return value;
}

//Сортируем по оптимальным.... По оптимальным?.....
export function getOptimal(Tickets: Ticket[]) {
  return Tickets.sort(compareOptimal);
  function compareOptimal(a: Ticket, b: Ticket) {
    if (calcDuration(a.segments) * a.price > calcDuration(b.segments) * b.price) {
      return 1;
    } else if (calcDuration(a.segments) * a.price < calcDuration(b.segments) * b.price) {
      return -1;
    }
    return 0;
  }
}
