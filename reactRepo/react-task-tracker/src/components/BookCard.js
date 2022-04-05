import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { Grid } from '@mui/material';



function BookCard(props){ 
  const pic = props.pic;
  return (
    <Card sx={{ maxWidth: 345 , height:420 }}>
      <CardMedia
        component="img"
        height="200"
        image={pic}
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
              <Typography varirant="body2">
              13-minute read
              </Typography>
            </Grid>
          </Grid>

        </Typography>
        

      </CardContent>
      <CardActions sx={{"margin":0}} >
          {/*<Button size="small" sx={{color: 'black'}}><MoreHorizIcon /></Button>*/}
          <Button fullWidth={true} sx={{":hover":{bgcolor:"#0365F2",color:"#ffffff"},"margin":0}}>{props.state}</Button>               
      </CardActions>
    </Card>
  );
}
export default BookCard;