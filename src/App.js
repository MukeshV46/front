import React from 'react';
import './App.css';
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Home from "D:/Intern/front1/src/Task1/page1.jsx";
import Views from "D:/Intern/front1/src/Task1/page2.jsx";

function App() {
  return (
    <div className="App">
      <h1>Arooopa</h1>       
      
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/add" element={<Views/>}></Route>        
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
