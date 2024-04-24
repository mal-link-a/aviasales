export async function getSearchID() {
  const url = 'https://aviasales-test-api.kata.academy/search';
  return fetch(url)
    .then((responce) => {
      console.log(responce.status);
      return responce.json();
    })
    .then((json) => {
      return json.searchId;
    })
    .catch((err) => {
      console.error('Error with getSearchID ' + err);
      throw err;
    });
}
