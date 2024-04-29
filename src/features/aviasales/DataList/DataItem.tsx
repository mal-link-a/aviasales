import { FC } from 'react';
import { Ticket } from '../types/Ticket';
import { DataItemSegment } from './DataItemSegment';

interface dataItemProps {
    item: Ticket,
}

export const DataItem: FC<dataItemProps> = ({ item } ) => {
    let segments = item.segments.map((segment) => <DataItemSegment item={segment} />)

    return (
        <div className="asTickets__ticket">
        <div className="asTickets__ticket__header">
          <span key={'price' + item.price + item.carrier}>{`${item.price} ₽`}</span>
          <span key={'carrier' + item.price + item.carrier}>{item.carrier}</span>
        </div>
        <div className="asTickets__ticket__data">
            {segments} 
        </div>
      </div>
    )

}