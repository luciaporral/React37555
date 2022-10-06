import './App.css';
import NavBar from './components/NavBar';
import * as React from 'react';
import PetListContainer from './components/PetListContainer'
import PetDetail from "./components/PetDetail"
import { ActiveThemeProvider } from './context/theme-context';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import AppWrapper from "./App"
function App() {

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  return (
    <ActiveThemeProvider>
    <AppWrapper>
    <div className="App">
        <NavBar/>
        <PetListContainer/>
    </div>
    </AppWrapper>
    </ActiveThemeProvider>
  );
}

export default App;
