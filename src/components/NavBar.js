import Box from '@mui/material/Box'
import * as React from 'react';
import Button from '@mui/material/Button';

const NavBar = () =>{
<Box className="App-Box"
            sx={{
        width: "auto",
        height: 100,
        backgroundColor: 'primary.dark',
        
      }}>
        <h1>Tienda Mascotitas</h1>
        <div>
        <button href='/'>Home</button>
        <button href='/'>Products</button>
        <button href='/'>About</button>
        <button href='/'>Contact</button>
        </div>
            </Box>
};export default NavBar