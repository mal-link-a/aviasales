import { Ticket } from '../features/aviasales/types/Ticket';

export function filterByConnections(data: Ticket[], all: boolean, noCon: boolean, iCon: boolean, iiCon: boolean, iiiCon: boolean) {
  if (all || data.length === 0) {
    return data.filter((item) => item !== undefined);
  }
  if (!all && !noCon && !iCon && !iiCon && !iiiCon) {
    return [undefined];
  }
  const arr: number[] = [];
  if (noCon) {
    arr.push(0);
  }
  if (iCon) {
    arr.push(1);
  }
  if (iiCon) {
    arr.push(2);
  }
  if (iiiCon) {
    arr.push(3);
  }
  return data.filter((item) => segmentsIncludes(arr, item));
}

function segmentsIncludes(array: number[], item: Ticket) {
  if (item === undefined) {
    return false;
  }
  for (let i = 0; i < item.segments.length; i++) {
    if (!array.includes(item.segments[i].stops.length)) {
      return false;
    }
  }
  return true;
}
