import React, { FC, useEffect } from 'react';

import { setTickets } from '../../../store/actions/setTickets';
import { setFilteredTickets } from '../../../store/actions/setFilteredTickets';

import Logo from '../../../assets/Logo.svg';
import { FilterList } from './FilterList/FilterList';
import { ButtonList } from './ButtonList/ButtonList';
import { DataList } from './DataList/DataList';
import { useAppDispatch } from '../../../store/hooks';
import { Ticket } from '../types/Ticket';
import { getFilteredTickets } from '../../../lib/helpers/getFilteredTickets';
import styles from './Aviasales.module.css';

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
      <div className={styles.aviasales}>
        <div className={styles.aviasales__logo}>
          <img src={Logo} alt="" />
        </div>
        <FilterList propClass={styles.aviasales__filterList}/> {/*className="aviasales__filterList" */}
        <ButtonList propClass={styles.aviasales__buttonList}/> {/*className="aviasales__buttonList" */}
        <DataList propClass={styles.aviasales__dataList}/> {/*className="aviasales__dataList" */}
      </div>
    </React.StrictMode>
  );
};
