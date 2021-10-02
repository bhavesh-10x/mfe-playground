import React from 'react';
import AmaApp from './components/AmaApp';
import PeopleApp from './components/PeopleApp';

const App = () => {
  return (
    <div>
      <h1>Hello from MFE - Container</h1>
      <hr />
      <AmaApp />
      <hr />
      <PeopleApp />
    </div>
  );
}

export default App;