const { default: App } = require('../App');
const { UserProvider } = require('./contexts/userContext');

export default function Wrapper() {
  return (
    <>
    <UserProvider>
      <App />
    </UserProvider>
    </>
  );
}

