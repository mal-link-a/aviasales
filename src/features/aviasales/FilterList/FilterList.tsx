import React, { FC } from 'react';

//import { mapStateToProps } from '../../store/mapStateToProps';
import { SET_CONNECTION_FILTER } from '../../../store/actions/setConnectionFilter';
import { SET_FILTERED_TICKETS } from '../../../store/actions/setFilteredTickets';
import { useAppDispatch, useAppSelector } from '../hooks';
import './FilterList.css';
import Checkbox_on from '../src/Checkbox on.svg';
import Checkbox from '../src/Checkbox.svg';

export const FilterList: FC = () => {
  const all = useAppSelector((state) => state.filterAll);
  const noCon = useAppSelector((state) => state.filterNoConnection);
  const ICon = useAppSelector((state) => state.filter1Connection);
  const IICon = useAppSelector((state) => state.filter2Connection);
  const IIICon = useAppSelector((state) => state.filter3Connection);

  const dispatch = useAppDispatch();

  const handlerAll = () => {
    dispatch(SET_CONNECTION_FILTER(0, all));
    dispatch(SET_FILTERED_TICKETS());
  };
  const handlerNo = () => {
    dispatch(SET_CONNECTION_FILTER(1, noCon));
    dispatch(SET_FILTERED_TICKETS());
  };
  const handlerOne = () => {
    dispatch(SET_CONNECTION_FILTER(2, ICon));
    dispatch(SET_FILTERED_TICKETS());
  };
  const handlerTwo = () => {
    dispatch(SET_CONNECTION_FILTER(3, IICon));
    dispatch(SET_FILTERED_TICKETS());
  };
  const handlerThree = () => {
    dispatch(SET_CONNECTION_FILTER(4, IIICon));
    dispatch(SET_FILTERED_TICKETS());
  };
  return (
    <div className="aviasales__filterList">
      <form>
        <h2>Количество пересадок</h2>
        <label>
          <img src={all ? Checkbox_on : Checkbox}></img>
          <input type="checkBox" onClick={handlerAll} />
          Все
        </label>
        <label>
          <img src={noCon ? Checkbox_on : Checkbox}></img>
          <input type="checkBox" onClick={handlerNo} />
          Без пересадок
        </label>
        <label>
          <img src={ICon ? Checkbox_on : Checkbox}></img>
          <input type="checkBox" onClick={handlerOne} />1 Пересадка
        </label>
        <label>
          <img src={IICon ? Checkbox_on : Checkbox}></img>
          <input type="checkBox" onClick={handlerTwo} />2 пересадки
        </label>
        <label>
          <img src={IIICon ? Checkbox_on : Checkbox}></img>
          <input type="checkBox" onClick={handlerThree} />3 пересадки
        </label>
      </form>
    </div>
  );
};
