import { createAction } from '@reduxjs/toolkit'

const SET_CONNECTION_FILTER ='SET_CONNECTION_FILTER'

export const setConnectionsFilter = createAction(SET_CONNECTION_FILTER, function prepare(data: number) {
  return {
    payload: {
      data,   
    },
  }
})