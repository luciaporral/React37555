import Box from '@mui/material/Box'
import * as React from 'react';
import PetsIcon from './PetsIcon'
import '../App.css';
import {Link} from 'react-router-dom';


const NavBar = () =>{

        return(
        <Box className="App-Box"
        sx={{
        width: "auto",
        height: 100,
        backgroundColor: 'primary.dark',
        }}>
                <h1>Bigotes Felices</h1>
                <div>
                        <Link to='/'>Home</Link>
                        <Link to='/adoption'>Animales</Link>
                        <button href='/'>About</button>
                        <button href='/'>Contact</button>
                        <PetsIcon/>
                </div>
                        
        </Box>
        )
};export default NavBar