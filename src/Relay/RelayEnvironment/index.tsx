import { Environment, Network, RecordSource, Store } from 'relay-runtime';
import { RelayEnvironmentProvider } from 'react-relay';

const fetchFn = (params: { text: any; }, variables: any) => {
  return fetch('https://10c9-2405-201-1002-3014-6a4b-7e59-9aff-b1ea.ngrok-free.app/?query=query%7B%0A++getAllPersonalInfo%7B%0A++++edges%0A++++%7B%0A++++++node%0A++++++%09%7B%0A++++++++++id%0A++++++++++firstName%0A++++++++++middleName%0A++++++++++lastName%0A++++++++++birthdate%0A++++++++++email%0A++++++++++profession%0A++++++++++personalAddress%7B%0A++++++++++++street%0A++++++++++++city%0A++++++++++++state%0A++++++++++++country%0A++++++++++++zipcode%0A++++++++++++%0A++++++++++%7D%0A++++++++++%0A++++++++++resume%7B%0A++++++++++++id%0A++++++++++++name%0A++++++++++++user%7B%0A++++++++++++++id%0A++++++++++++++name%0A++++++++++++++email%0A++++++++++++%7D%0A++++++++++%7D%0A++++++++%7D%0A++++%7D%0A++%7D%0A%7D', {
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

export const RelayEnvironment = new Environment({
  network,
  store,
});

export default function RelayEnvironmentProviderWrapper({ children }) {
  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      {children}
    </RelayEnvironmentProvider>
  );
}
