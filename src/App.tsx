import React from 'react';
import ListContainer from './components/ListContainer';
import Modal from './components/Modal';
import Nav from './components/Nav';
import Overlay from './components/Overlay';

function App() {
  return (
    <div className="App relative bg-sky-50 min-h-screen">
      <Nav/>
      <hr className='h-2' />
      <ListContainer />
      <Overlay/>
      <Modal />
    </div>
  );
}

export default App;
