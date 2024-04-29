import { FC } from 'react';
import { Ticket } from '../../types/Ticket';
import { DataSegment } from './DataSegment/DataSegment';
import styles from './DataItem.module.css'

interface dataItemProps {
    item: Ticket,
}

export const DataItem: FC<dataItemProps> = ({ item } ) => {
    let segments = item.segments.map((segment) => <DataSegment item={segment} />)

    return (
        <div className={`${styles.asTickets__ticket}`}>
        <div className={`${styles.asTickets__ticket__header}`}>
          <span key={'price' + item.price + item.carrier}>{`${item.price} ₽`}</span>
          <span key={'carrier' + item.price + item.carrier}>{item.carrier}</span>
        </div>
        <div className={`${styles.asTickets__ticket__data}`}>
            {segments} 
        </div>
      </div>
    )
}