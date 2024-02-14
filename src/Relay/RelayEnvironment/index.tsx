import { Environment, Network, RecordSource, Store } from 'relay-runtime';

const fetchFn = (params: { text: any; }, variables: any) => {
  // Check for the specific query and return a mock response
  if (variables.userId && params.text.includes('UserGetUserDataQuery')) {
    return Promise.resolve({
      json: () => ({
        data: { user: { id: variables.userId, name: 'Pedro' } },
      }),
    });
  }
  return fetch('https://8cde-2405-201-1002-3014-6a4b-7e59-9aff-b1ea.ngrok-free.app/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: params.text,
      variables,
    }),
  }).then((response) => response.json());
};

const network = Network.create(fetchFn);
const store = new Store(new RecordSource());

 const environment = new Environment({
  network,
  store,
});

export default environment;
