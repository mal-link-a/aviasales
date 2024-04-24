import React, { FC } from 'react';

import { SHOW_MORE_TICKETS } from '../../../store/actions/showMoreTickets';
import { useAppDispatch, useAppSelector } from '../hooks';
import './DataList.css';
import { Ticket, Segment } from '../types/Ticket';

export const DataList: FC<Record<string, never>> = () => {
  const tickets = useAppSelector((state) => state.filteredTickets);
  const showMode = useAppSelector((state) => state.showMode);

  const dispatch = useAppDispatch();

  const handleShowMore = () => {
    console.log('handle');
    dispatch(SHOW_MORE_TICKETS());
  };

  function dataItem(item: Ticket) {
    return (
      <React.Fragment>
        <div className="asTickets__ticket">
          <div className="asTickets__ticket__header">
            <span key={'price' + item.price + item.carrier}>{`${item.price} ₽`}</span>
            <span key={'carrier' + item.price + item.carrier}>{item.carrier}</span>
          </div>
          <div className="asTickets__ticket__data">{item.segments.map((segment) => dataItemSegment(segment))}</div>
        </div>
      </React.Fragment>
    );
  }

  function dataItemSegment(item: Segment) {
    //Получаем дату отправки и дату прибытия в строке
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

  function getTicketToShow() {
    const arr = [];
    for (let i = 0; i < showMode; i++) {
      arr.push(dataItem(tickets[i]));
    }
    return arr;
  }

  function showData() {
    if (tickets.length > 0 && tickets[0] != undefined) {
      return (
        <>
          {getTicketToShow()}
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
