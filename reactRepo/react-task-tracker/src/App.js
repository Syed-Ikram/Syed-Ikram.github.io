import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Demojsx from './components/Demojsx';
import Message from './components/Message';
import FunctionClick from './components/FunctionClick';
import HookCounter from './components/HookCounter';
import HookCounterTwo from './components/HookCounterTwo';
import HookThree from './components/HookThree';
import NavBar from './components/NavBar';
import BookCard from './components/BookCard';
import { createTheme,ThemeProvider } from '@mui/material/styles';
import { green, purple } from '@mui/material/colors';
import { Container ,Paper ,TextField,Typography,Grid} from '@mui/material';
import Form from './components/Form';
import Tabs1 from './components/Tabs1';
import RenderBookCards from './components/RenderBookCards';
import {Search} from "@mui/icons-material";

const theme = createTheme({
  palette:{
    secondary:green
  },
  typography:{
    fontFamily: 'Raleway, Arial',
    h1:{
      fontWeight: 200
    }
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <Container maxWidth="md" sx={{"marginBottom":4}}>
        {/* paper of explore */}
        <Paper elevation={0} sx={{bgcolor:"#F1F6F4","padding":3,"marginTop":3}}>
        <Grid container columnSpacing={10} >
          <Grid item>
            <Typography sx={{"margin":4}} variant="h5" >
            Explore Books on <br></br> entrepreneurship
            </Typography>
            <Typography sx={{"margin":4}} variant="body2" color="text.secondary" >
              Everything you need to know about thriving on a<br></br> shoestring budget, making your first million, and hiring<br></br> right from the start.
            </Typography>
          </Grid>
          <Grid item>
            <img src='http://127.0.0.1:8887/explore.png' alt='explore' />
          </Grid>
        </Grid>
        </Paper>
        <Tabs1 />
        <br></br>
        <RenderBookCards />
        {/** footer */}
       
        {/*
        <HookCounter />
        <br></br>
        <HookCounterTwo />
        <br></br>
        <HookThree />
        <FunctionClick />
        
        <Greet name="Tony Stark" heroName="IronMan"/>
        <Greet name="Bruce" heroName="Hulk"/>
        <Greet name="Peter Parker" heroName="SpiderMan"/>
        <Welcome name="Bruce Wayne" heroName="Batman"/>
        <Welcome name="Clark" heroName="Superman"/>
        <Welcome name="Diana" heroName="Wonder Woman"/>
        <Demojsx />
        <Message />
        */}
      </Container>
      <Paper elevation={0} sx={{bgcolor:"#F1F6F4","padding":3}}>
          <Grid container rowSpacing={6} columnSpacing={6} sx={{"paddingTop":3}}>
            <Grid item sx={{"marginLeft":26}}>
              <img src="http://127.0.0.1:8887/Blinklist.png" alt="blinklist"/>
              <Typography variant='h5' sx={{color:"#0365F2"}}>
                <br></br>Big ideas in small packages<br></br> Start learnign now
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant='body1'>Editorial</Typography>
              <Typography variant='body2' color="text.secondary" sx={{"marginTop":1}}>Book lists</Typography>
              <Typography variant='body2' color="text.secondary" sx={{"marginTop":1}}>What is Nonfiction?</Typography>
              <Typography variant='body2' color="text.secondary" sx={{"marginTop":1}}>What to read next?</Typography>
              <Typography variant='body2' color="text.secondary" sx={{"marginTop":1}}>Benefits of reading</Typography>              
            </Grid>
            <Grid item>
              <Typography variant='body1'>Useful links</Typography>
              <Typography variant='body2' color="text.secondary" sx={{"marginTop":1}}>Pricing</Typography>
              <Typography variant='body2' color="text.secondary" sx={{"marginTop":1}}>Blinkist business</Typography>
              <Typography variant='body2' color="text.secondary" sx={{"marginTop":1}}>Gift cards</Typography>
              <Typography variant='body2' color="text.secondary" sx={{"marginTop":1}}>Blinkist magaine</Typography>
              <Typography variant='body2' color="text.secondary" sx={{"marginTop":1}}>Contact and help</Typography>               
            </Grid>
            <Grid item>
              <Typography variant='body1'>Company</Typography>
              <Typography variant='body2' color="text.secondary" sx={{"marginTop":1}}>About</Typography>
              <Typography variant='body2' color="text.secondary" sx={{"marginTop":1}}>Careers</Typography>
              <Typography variant='body2' color="text.secondary" sx={{"marginTop":1}}>partners</Typography>
              <Typography variant='body2' color="text.secondary" sx={{"marginTop":1}}>Code of Conduct</Typography>               
            </Grid>
            <Grid item sx={{"marginLeft":26}}>
            <Typography variant='body2' color="text.secondary">© Blinkist 2021 Sitemap   |   Imprint   |   Terms of Service   |   Privacy Policies</Typography>
            </Grid>
          </Grid>          
        </Paper>
    </ThemeProvider>
  );
}

export default App;
