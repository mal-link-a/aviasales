import React, { FC } from 'react';

import './ButtonList.css';
import { ListFilterType } from '../types';
import { useAppDispatch, useAppSelector } from '../hooks';
import { SET_ADVANTAGES_FILTER } from '../../../store/actions/setAdvantagesFilter';
import { SET_TICKETS } from '../../../store/actions/setTickets';
import { SET_FILTERED_TICKETS } from '../../../store/actions/setFilteredTickets';
import { getCheapest, getFastest, getOptimal } from '../../../store/sortTickets';

export const ButtonList: FC = () => {
  const dispatch = useAppDispatch();

  const filterAdvantages = useAppSelector((state) => state.filterAdvantages);
  const tickets = useAppSelector((state) => state.tickets);
  function setCheapest() {
    dispatch(SET_ADVANTAGES_FILTER(ListFilterType.Cheapest));
    dispatch(SET_TICKETS(getCheapest([...tickets])));
    dispatch(SET_FILTERED_TICKETS());
  }
  function setFastest() {
    dispatch(SET_ADVANTAGES_FILTER(ListFilterType.Fastest));
    dispatch(SET_TICKETS(getFastest([...tickets])));
    dispatch(SET_FILTERED_TICKETS());
  }
  function setOptimal() {
    dispatch(SET_ADVANTAGES_FILTER(ListFilterType.Optimal));
    dispatch(SET_TICKETS(getOptimal([...tickets])));
    dispatch(SET_FILTERED_TICKETS());
  }

  return (
    <>
      <div className="asButtons">
        <button className={filterAdvantages === ListFilterType.Cheapest ? 'asButtons__btn_active' : 'asButtons__btn'} onClick={setCheapest}>
          <span>Самый дешевый</span>
        </button>
        <button className={filterAdvantages === ListFilterType.Fastest ? 'asButtons__btn_active' : 'asButtons__btn'} onClick={setFastest}>
          <span>Самый быстрый</span>
        </button>
        <button className={filterAdvantages === ListFilterType.Optimal ? 'asButtons__btn_active' : 'asButtons__btn'} onClick={setOptimal}>
          <span>Оптимальный</span>
        </button>
      </div>
    </>
  );
};
