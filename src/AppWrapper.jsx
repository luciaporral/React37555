import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import React from "react"
import { useTheme } from './context/theme-context';

const AppWrapper =(props) => {

    const DARK_THEME = createTheme({
        palette: {
          mode: 'dark',
        },
      });
    const LIGHT_THEME = createTheme({
        palette: {
          mode: 'light',
        },
      })
      const {isActive} = useTheme();

      return(
        <>
        <ThemeProvider theme={isActive ? LIGHT_THEME : DARK_THEME}>
            {props.children}
        </ThemeProvider>
        </>
      )


}; export default AppWrapper