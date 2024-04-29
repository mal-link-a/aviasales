import { FC } from 'react';
import { Segment } from '../types/Ticket';

interface DataItemSegmentProps {
    item: Segment,
}

export const DataItemSegment: FC<DataItemSegmentProps> = ({ item } ) => {
    function getDates() {
        const startTime = item.date.slice(11, 16);
        let endHours: number | string = Number(item.date.slice(11, 13));
        let endMinutes: number | string = Number(item.date.slice(14, 16));
  
        endMinutes = endMinutes + (item.duration % 60);
        if (endMinutes >= 60) {
          endMinutes = endMinutes - 60;
          endHours++;
        }
        if (endMinutes < 10) {
          endMinutes = '0' + endMinutes;
        }
        endHours = endHours + Math.floor(item.duration / 60);
        if (endHours >= 24) {
          endHours = endHours - 24;
        }
        return `${startTime}-${endHours}:${endMinutes}`;
      }
      //Получаем количество пересадок строкой
      const getStopsCount = () => {
        const count = item.stops.length;
        if (count === 0) {
          return 'Без пересадок';
        }
        if (count === 1) {
          return '1 пересадка';
        }
        if (count < 5) {
          return `${item.stops.length} пересадки`;
        }
        return `${item.stops.length} пересадок`;
      };
      //Получаем длительность поезки в часах и минутах
      function getDuration() {
        return `${Math.floor(item.duration / 60)} ч. ${item.duration % 60} м.`;
      }
  
      return (
        <>
          <div key={item.origin + item.destination} className="asTickets__ticket__dataPart">
            <span className="asTickets__ticket__dataPart_up">{`${item.origin}-${item.destination}`}</span>
            <span>{getDates()}</span>
          </div>
          <div className="asTickets__ticket__dataPart">
            <span className="asTickets__ticket__dataPart_up">В пути</span>
            <span>{getDuration()}</span>
          </div>
          <div className="asTickets__ticket__dataPart">
            <span className="asTickets__ticket__dataPart_up">{getStopsCount()} </span>
            <span>{item.stops.join('-')}</span>
          </div>
        </>
      );

}