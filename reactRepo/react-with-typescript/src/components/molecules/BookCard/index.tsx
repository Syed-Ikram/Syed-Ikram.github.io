import React,{useEffect,useState} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { Grid } from '@mui/material';
import ButtonComponent from '../../atoms/Button';

interface Props{
    title:string;
    pic:string;
    author:string;
    state:string;
}

function BookCard(props:Props){ 
  const [books,setBooks]=useState([]);

    useEffect(()=>{
        fetch('http://localhost:8000/books')
        .then(res =>res.json())
        .then(data => setBooks(data))
    },[])
   
  return (
    <Card sx={{ maxWidth: 345 , height:420 }}>
      <CardMedia
        component="img"
        height="200"
        image={props.pic}
        alt={props.title}
      />
      <CardContent>
        <Typography variant="h5" component="div" align="left">
          {props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" align="left" sx={{"marginTop":1}}>
          {props.author}
        </Typography>
        <Typography variant="body2" color="text.secondary" align="left" sx={{"marginTop":1}}>
          <Grid container>
            <Grid item>
            <AccessTimeIcon />
            </Grid>
            <Grid item>
              <Typography variant="body2">
              13-minute read
              </Typography>
            </Grid>
          </Grid>

        </Typography>
        

      </CardContent>
      <CardActions sx={{"margin":0}} >
          {/*<ButtonComponent size="small" sx={{color: 'black'}}><MoreHorizIcon /></ButtonComponent>*/}
          <ButtonComponent fullWidth={true} sx={{":hover":{bgcolor:"#0365F2",color:"#ffffff"},"margin":0}}>{props.state}</ButtonComponent>               
      </CardActions>
    </Card>
  );
}
export default BookCard;