export async function getSearchID() {
  if (sessionStorage.getItem('aviasalesTicketsID') !== null) {
    return sessionStorage.getItem('aviasalesTicketsID');
  }
  const url = 'https://aviasales-test-api.kata.academy/search';
  return fetch(url)
    .then((responce) => {
      console.log(responce.status);
      return responce.json();
    })
    .then((json) => {
      sessionStorage.setItem('aviasalesTicketsID', json.searchId);
      return json.searchId;
    })
    .catch((err) => {
      console.error('Error with getSearchID ' + err);
      throw err;
    });
}
