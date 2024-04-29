export async function getTicketList(searchID) {
  const url = `https://aviasales-test-api.kata.academy/tickets?searchId=${searchID}`;

  async function getIteration(arr) {
    return fetch(url)
      .then((responce) => {
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

  const data = await getIteration([]);
  console.log('data =');
  console.log(data);
  return data;
}
