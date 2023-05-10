import {LoadingProvider} from './contexts/loadingContext';

const {default: App} = require('../App');
const {UserProvider} = require('./contexts/userContext');

export default function Wrapper() {
  return (
    <>
      <LoadingProvider>
        <UserProvider>
          <App />
        </UserProvider>
      </LoadingProvider>
    </>
  );
}
