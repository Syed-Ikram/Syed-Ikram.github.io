import { Container, ThemeProvider } from '@mui/material';
import React from 'react';
import Footer from '../../molecules/Footer';
import theme from '../../Theme/theme';
import NavBar from '../../molecules/Navbar';
import ExploreBanner from '../../molecules/ExploreBanner';
import RenderBooks from '../../organisms/RenderBooks';

const ExplorePage=()=> {
  return (
    <ThemeProvider theme={theme} >
      <NavBar />
      <Container maxWidth="md" sx={{"marginBottom":4}}>
        <ExploreBanner />
        <RenderBooks state="All" />
      </Container>
      <Footer />
    </ThemeProvider>
    );
}
export default ExplorePage;