import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { Grid } from '@mui/material';
import ButtonComponent from '../../atoms/Button';

interface Props{
    id:number;
    title:string;
    pic:string;
    author:string;
    state:string;
}

const BookCard =(props:Props)=>{ 
  var index = props.id ;
  var bookState = props.state;

  const handleClick = ()=>{
    // eslint-disable-next-line eqeqeq
    if(bookState == "+ Add to Library")
      bookState = "Finished"
    // eslint-disable-next-line eqeqeq
    else if(bookState == "Finished")
      bookState = "Read Again"
    else
     bookState = "Finished"
    
    fetch('http://localhost:8000/books/'+index,{
      method: 'PATCH',
      body: JSON.stringify({
        "state": bookState,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).then((response) => response.json())
    .then((json) => console.log(json));
  }

  return (
    <Card sx={{ maxWidth: 345 , height:380 }}>
      <CardMedia
        component="img"
        height="200"
        image={props.pic}
        alt={props.title}
      />
      <CardContent>
        <Typography variant="h6" component="div" align="left">
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
          <ButtonComponent onClick={handleClick} fullWidth={true} sx={{":hover":{bgcolor:"#0365F2",color:"#ffffff"},"margin":0}}>{bookState}</ButtonComponent>               
      </CardActions>
    </Card>
  );
}
export default BookCard;