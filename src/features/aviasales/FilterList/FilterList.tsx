import React, { FC } from 'react';

//import { mapStateToProps } from '../../store/mapStateToProps';
import { setConnections } from '../../../store/dispatch';
import { FilterItem } from './FilterItem';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import './FilterList.css';
import Checkbox_on from '../src/Checkbox_on.svg';
import Checkbox from '../src/Checkbox.svg';

export const FilterList: FC = () => {
  const all = useAppSelector((state) => state.filterAll);
  const noCon = useAppSelector((state) => state.filterNoConnection);
  const ICon = useAppSelector((state) => state.filter1Connection);
  const IICon = useAppSelector((state) => state.filter2Connection);
  const IIICon = useAppSelector((state) => state.filter3Connection);

  const dispatch = useAppDispatch();

  const handlerAll = () => {
    dispatch(setConnections(0));
  };
  const handlerNo = () => {
    dispatch(setConnections(1));
  };
  const handlerOne = () => {
    dispatch(setConnections(2));
  };
  const handlerTwo = () => {
    dispatch(setConnections(3));
  };
  const handlerThree = () => {
    dispatch(setConnections(4));
  };
  return (
    <div className="aviasales__filterList">
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
