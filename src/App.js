import './App.scss';
import React from 'react';
import Header from "./components/Header/Header";
import Upload from './pages/Upload/Upload';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home/Home';



class App extends React.Component {

  render() {
  return (
   
   <BrowserRouter>
      <Header/>
       <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/upload' element={<Upload />}/>
          <Route path='/video/:id' element={<Home />}/>
        </Routes>
    </BrowserRouter>
      
  );
  }
}


export default App;

