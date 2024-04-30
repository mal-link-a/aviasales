export type Ticket = {
  price: number;
  carrier: string;
  segments: Segment[];
};

export type Segment = {
  date: string;
  destination: string;
  duration: number;
  origin: string;
  stops: string[];
}
