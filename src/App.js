import './App.css';
import NavBar from './components/NavBar';
import * as React from 'react';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount'

function App() {
  return (

    <div className="App">
        <header>
          <NavBar/>
        </header>
        <ItemListContainer/>
        <ItemCount/>
    </div>
  );
}

export default App;
