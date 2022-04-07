import React from 'react';
import LibPage from './components/pages/MyLibrary';
import ExplorePage from './components/pages/Explore';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LibPage />}/>
        <Route path='/explore' element={<ExplorePage />}/>
      </Routes>      
    </BrowserRouter>
      
    );
}

export default App;
