export type Ticket = {
  price: number;
  carrier: string;
  segments: Segment[];
};

export interface Segment {
  date: string;
  destination: string;
  duration: number;
  origin: string;
  stops: string[];
}
