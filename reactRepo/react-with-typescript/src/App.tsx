import { Container } from '@mui/material';
import React from 'react';
import ButtonComponent from './components/atoms/Button';
import Navbar from './components/molecules/Navbar';
function App() {
  return (
    <Container>
      <ButtonComponent variant='contained' color='error' size='small' sx={{":hover":{bgcolor:"#0365F2",color:"#ffffff"}}}>Hello</ButtonComponent>
      <Navbar />
    </Container>
    );
}

export default App;
