import React, { FC } from 'react';

import './ButtonList.css';
import { ListFilterType } from '../types';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
//~~~
import { setAdvantages } from '../../../store/dispatch';

export const ButtonList: FC = () => {
  const dispatch = useAppDispatch();

  const filterAdvantages = useAppSelector((state) => state.filterAdvantages);
  const tickets = useAppSelector((state) => state.tickets);
  function setCheapest() {
    dispatch(setAdvantages(ListFilterType.Cheapest, [...tickets]));    
  }
  function setFastest() {
    dispatch(setAdvantages(ListFilterType.Fastest, [...tickets]));    
  }
  function setOptimal() {
    dispatch(setAdvantages(ListFilterType.Optimal, [...tickets]));
  }

  return (
    <>
      <div className="asButtons">
        <button className={`asButtons__btn ${filterAdvantages === ListFilterType.Cheapest ? 'asButtons__btn_active' : ''}`} onClick={setCheapest}>
          <span>Самый дешевый</span>
        </button>
        <button className={`asButtons__btn ${filterAdvantages === ListFilterType.Fastest ? 'asButtons__btn_active' : ''}`} onClick={setFastest}>
          <span>Самый быстрый</span>
        </button>
        <button className={`asButtons__btn ${filterAdvantages === ListFilterType.Optimal ? 'asButtons__btn_active' : ''}`} onClick={setOptimal}>
          <span>Оптимальный</span>
        </button>
      </div>
    </>
  );
};
