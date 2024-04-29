import React, { FC } from 'react';

import { showMoreTickets } from '../../../store/actions/showMoreTickets';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import { DataItem } from './DataItem';
import './DataList.css';
import { Ticket } from '../types/Ticket';

export const DataList: FC<Record<string, never>> = () => {
  const tickets = useAppSelector((state) => state.filteredTickets);
  const showMode = useAppSelector((state) => state.showMode);

  const dispatch = useAppDispatch();

  const handleShowMore = () => {
    dispatch(showMoreTickets());
  };

  function getTickets() {
    const arr:Ticket[] = [];
    //Набираем массив билетов для отображения
    for (let i = 0; i < showMode; i++) {
      arr.push((tickets[i]));
    }
    //Преобразуем для показа
    return arr.map((ticket)=> (<DataItem item={ticket} />));
  }
  

  function showData() {
    if (tickets.length > 0 && tickets[0] !== undefined) {
      return (
        <>
          {getTickets()}
          <button onClick={handleShowMore} className="asTickets__btn">
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

  return <div className="asTickets aviasales__dataList">{showData()}</div>;
};
