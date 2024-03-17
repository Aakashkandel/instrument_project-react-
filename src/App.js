import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Index from './Components/user/Index';
import Register from './Components/Pages/user/Register';

function App() {
  return (
    <BrowserRouter>
      <div className="">
       
        
        
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='register' element={<Register/>} />
         
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
