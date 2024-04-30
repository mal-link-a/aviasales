import React, { FC } from 'react';

import { setConnections } from '../../../../lib/helpers/dispatch';
import { FilterItem } from './FilterItem';
import { ConnectionFilter } from '../../types';
import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
import { filterListSelector } from '../../../../store/selectors/filterListSelector';
import Checkbox_on from '../../../../assets/Checkbox_on.svg';
import Checkbox from '../../../../assets/Checkbox.svg';
import styles from './FilterList.module.css';

interface FilterListProps {
  propClass?: string;
}

export const FilterList: FC<FilterListProps> = ({ propClass = ''}) => {

  const { all, noCon, ICon, IICon, IIICon } = useAppSelector((state) => filterListSelector(state));


  const dispatch = useAppDispatch();

  const handlerAll = () => {
    dispatch(setConnections(ConnectionFilter.All));
  };
  const handlerNo = () => {
    dispatch(setConnections(ConnectionFilter.Zero));
  };
  const handlerOne = () => {
    dispatch(setConnections(ConnectionFilter.One));
  };
  const handlerTwo = () => {
    dispatch(setConnections(ConnectionFilter.Two));
  };
  const handlerThree = () => {
    dispatch(setConnections(ConnectionFilter.Three));
  };
  return (
    <div className={`${styles.asFilter} ${propClass}`}>
      <form>
        <h2>Количество пересадок</h2>
        <FilterItem check={all} handle={handlerAll} img_on={Checkbox_on} img_off={Checkbox} description='Все' ></FilterItem>
        <FilterItem check={noCon} handle={handlerNo} img_on={Checkbox_on} img_off={Checkbox} description='Без пересадок' ></FilterItem>
        <FilterItem check={ICon} handle={handlerOne} img_on={Checkbox_on} img_off={Checkbox} description='1 пересадка' ></FilterItem>
        <FilterItem check={IICon} handle={handlerTwo} img_on={Checkbox_on} img_off={Checkbox} description='2 пересадки' ></FilterItem>
        <FilterItem check={IIICon} handle={handlerThree} img_on={Checkbox_on} img_off={Checkbox} description='3 Пересадка' ></FilterItem>       
      </form>
    </div>
  );
};
