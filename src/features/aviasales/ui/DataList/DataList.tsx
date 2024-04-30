import React, { FC } from 'react';

import { showMoreTickets } from '../../../../store/actions/showMoreTickets';
import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
import { DataItem } from './DataItem/DataItem';
import { Ticket } from '../../types/Ticket';
import { dataListSelector } from '../../../../store/selectors/dataListSelector';
import styles from './DataList.module.css';

interface DataListProps {
  propClass?: string;
}

export const DataList: FC<DataListProps> = ({propClass = ''}) => {

  const { tickets, showMode } = useAppSelector((state) => dataListSelector(state));

  const dispatch = useAppDispatch();

  const handleShowMore = () => {
    dispatch(showMoreTickets());
  };

  

  function showData() {
    if (tickets.length > 0 && tickets[0] !== undefined) {
      return (
        <>
          {tickets.slice(0, showMode).map((ticket)=> (<DataItem item={ticket} />))}
          <button onClick={handleShowMore} className={styles.asTickets__btn}>
            <span>Показать ещё 5 билетов!</span>
          </button>
        </>
      );
    } else if (tickets.length > 0 && tickets[0] === undefined) {
      return (
        <>
          <span>Выберите фильтр...</span>
        </>
      );
    }
    return (
      <>
        <span>Загрузка......</span>
      </>
    );
  }

  return <div className={`${styles.asTickets} ${propClass}`}>{showData()}</div>;
};
