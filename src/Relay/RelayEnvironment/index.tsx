import { Environment, Network, RecordSource, Store } from 'relay-runtime';

const fetchFn = (params: { text: any; }, variables: any) => {
  return fetch('http://localhost:3001/graphql?', {
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
