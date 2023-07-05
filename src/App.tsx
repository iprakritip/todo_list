import React from 'react';
import ListContainer from './components/ListContainer';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App bg-sky-50 min-h-screen">
      <Nav/>
      <hr className='h-2' />
      <ListContainer />
    </div>
  );
}

export default App;
