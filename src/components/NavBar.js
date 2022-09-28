import Box from '@mui/material/Box'
import * as React from 'react';
import CartWidget from './CartWidget'
import '../App.css';


const NavBar = () =>{

        return(
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
                        <CartWidget/>
                </div>
                        
        </Box>
        )
};export default NavBar