export function SET_CONNECTION_FILTER(data: number, flag: boolean) {
  return {
    type: 'SET_CONNECTION_FILTER',
    id: data,
    isTrue: flag,
  };
}
