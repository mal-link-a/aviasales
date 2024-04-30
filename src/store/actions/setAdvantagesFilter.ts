import { createAction } from '@reduxjs/toolkit'
import { ListFilterType } from '../../features/aviasales/types/ListFilterType';

const SET_ADVANTAGES_FILTER = 'SET_ADVANTAGES_FILTER'

export const setAdvantagesFilter = createAction(SET_ADVANTAGES_FILTER, function prepare(data: ListFilterType) {
  return {
    payload: {
      data,      
    },
  }
})
