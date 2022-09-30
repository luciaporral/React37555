import './App.css';
import NavBar from './components/NavBar';
import * as React from 'react';
import PetListContainer from './components/PetListContainer';
import { BrowserRouter , Route, Routes} from 'react-router-dom';
import PetDetailContainer from './components/PetDetailContainer'
function App() {
  return (

    <div className="App">
        <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route path="/" element={
              <PetListContainer/>
            }/>
            <Route path="/adoption" element={
              <PetDetailContainer/>
            }/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
