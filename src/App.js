import './App.css';
import NavBar from './components/NavBar';
import * as React from 'react';
import PetListContainer from './components/PetListContainer'
import PetDetail from "./components/PetDetail"
import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
  return (

    <PetDetail/>
  );
}

export default App;
