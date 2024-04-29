import React, { FC, useEffect } from 'react';

import { setTickets } from '../../store/actions/setTickets';
import { setFilteredTickets } from '../../store/actions/setFilteredTickets';

import Logo from './src/Logo.svg';
import { FilterList } from './FilterList/FilterList';
import { ButtonList } from './ButtonList/ButtonList';
import { DataList } from './DataList/DataList';
import { useAppDispatch } from './hooks/hooks';
import { Ticket } from './types/Ticket';
import { getFilteredTickets } from './functions/getFilteredTickets';

import './Aviasales.css';

export const Aviasales: FC = () => {
  const dispatch = useAppDispatch();

  //Инициируем получение стартовой информации
  useEffect(() => {
    getFilteredTickets().then((data: Ticket[]) => {
      dispatch(setTickets(data));
      dispatch(setFilteredTickets());
    });
  }, []);

  return (
    <React.StrictMode>
      <div className="aviasales">
        <div className="aviasales__logo">
          <img src={Logo} alt="" />
        </div>
        <FilterList /> {/*className="aviasales__filterList" */}
        <ButtonList /> {/*className="aviasales__buttonList" */}
        <DataList /> {/*className="aviasales__dataList" */}
      </div>
    </React.StrictMode>
  );
};
