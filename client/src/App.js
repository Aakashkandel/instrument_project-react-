import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Index from './Components/user/Index';
import Register from './Components/Pages/user/Register';
import Login from './Components/Pages/user/Login';
import IndexLoggedin from './Components/user/IndexLoggedin';
import Forgotpassword from './Components/Pages/user/Forgotpassword';
import OtpEnter from './Components/Pages/user/OtpEnter';

function App() {
  return (
    <BrowserRouter>
      <div className="">
      
       
        {/* <UserNavbar/> */}
        
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='register' element={<Register/>} />
          <Route path='login' element={<Login/>}/>
          <Route path='indexloggedin' element={<IndexLoggedin/>}/>
          <Route path='forgotpassword' element={<Forgotpassword/>}/>
          <Route path='confirmotp' element={<OtpEnter/>}/>
         
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
