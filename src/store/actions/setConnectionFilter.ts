import { createAction } from '@reduxjs/toolkit'
import { ConnectionFilter } from '../../features/aviasales/types'

const SET_CONNECTION_FILTER ='SET_CONNECTION_FILTER'

export const setConnectionsFilter = createAction(SET_CONNECTION_FILTER, function prepare(data: ConnectionFilter) {
  return {
    payload: {
      data,   
    },
  }
})