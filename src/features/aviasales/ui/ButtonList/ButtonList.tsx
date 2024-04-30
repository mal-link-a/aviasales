import React, { FC } from 'react';

//import './ButtonList.css';
import styles from './ButtonList.module.css';
import { ListFilterType } from '../../types';
import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
//~~~
import { setAdvantages } from '../../../../lib/helpers/dispatch';
import { buttonListSelector } from '../../../../store/selectors/buttonListSelector';

interface ButtonListProps {
  propClass?: string;
}

export const ButtonList: FC<ButtonListProps> = ({propClass = ''}) => {

  const dispatch = useAppDispatch();

  const { filterAdvantages, tickets } = useAppSelector((state) => buttonListSelector(state));

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
      <div className={`${styles.asButtons} ${propClass}`}>
        <button className={`${styles.asButtons__btn} ${filterAdvantages === ListFilterType.Cheapest ? styles.asButtons__btn_active : ''}`} onClick={setCheapest}>
          <span>Самый дешевый</span>
        </button>
        <button className={`${styles.asButtons__btn} ${filterAdvantages === ListFilterType.Fastest ? styles.asButtons__btn_active : ''}`} onClick={setFastest}>
          <span>Самый быстрый</span>
        </button>
        <button className={`${styles.asButtons__btn} ${filterAdvantages === ListFilterType.Optimal ? styles.asButtons__btn_active : ''}`} onClick={setOptimal}>
          <span>Оптимальный</span>
        </button>
      </div>
    </>
  );
};
