import { Card } from "@mui/material"
import ItemCount from "./ItemCount";
import Box from '@mui/material/Box';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const PetDetail=()=>{

    function handleAddToCart(){
        alert("Agregaste al carrito")
    }


    return(
        <div style={{alignContent:"center"}}>
            <Card>
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Adopt Me!
                    </Typography>
                    <Typography variant="h5" component="div">
                    Magenta
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    1 año
                    </Typography>
                    <Typography variant="body2">
                    xxxx
                    </Typography>
                    <ItemCount onAddToCart={handleAddToCart}/>
                </CardContent>
            </Card>
        </div>
    )
}; export default PetDetail