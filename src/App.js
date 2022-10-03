import './App.css';
import NavBar from './components/NavBar';
import * as React from 'react';
import PetListContainer from './components/PetListContainer'

function App() {
  return (

    <div className="App">
        <NavBar/>
        <PetListContainer/>
    </div>
  );
}

export default App;
