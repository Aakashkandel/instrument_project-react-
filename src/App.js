import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Index from './Components/user/Index';
import Register from './Components/Pages/user/Register';
import UserNavbar from './Components/Navbar/UserNavbar';

function App() {
  return (
    <BrowserRouter>
      <div className="">
       
        {/* <UserNavbar/> */}
        
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='register' element={<Register/>} />
         
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
