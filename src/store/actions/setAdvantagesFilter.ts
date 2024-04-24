import { ListFilterType } from '../../features/aviasales/types/ListFilterType';

export function SET_ADVANTAGES_FILTER(data: ListFilterType) {
  return {
    type: 'SET_ADVANTAGES_FILTER',
    id: data,
  };
}
