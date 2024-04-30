export async function getTicketList(searchID) {
  const url = `https://aviasales-test-api.kata.academy/tickets?searchId=${searchID}`;
  
  //Когда получаем билеты, сихраняем их в sessionStorage
  //Это нужно потому, что по searchID можно получить массив билетов только один раз
  //Или я не шарю в тонкости api aviasales
  if (sessionStorage.getItem('aviasalesTicketsData') !== null) {
    return JSON.parse(sessionStorage.getItem('aviasalesTicketsData')).obj;
  }
  async function getIteration(arr) {
    return fetch(url)
      .then((responce) => {
        console.log('responce.status = ' + responce.status);
        if (responce.status !== 200) {
          return getIteration([].concat(arr));
        }
        return responce.json();
      })
      .then((json) => {
        if (json.stop === true) {
          return [].concat(json.tickets, arr);
        }
        return getIteration([].concat(json.tickets, arr));
      })
      .catch((err) => {
        throw err;
      });
  }

  const data = (await getIteration([])).filter((item) => item !== undefined);
  //data = data.filter((item) => item !== undefined);
  sessionStorage.setItem('aviasalesTicketsData', JSON.stringify({obj: data}));
  console.log( JSON.parse(sessionStorage.getItem('aviasalesTicketsData')).obj);
  return data;
}
