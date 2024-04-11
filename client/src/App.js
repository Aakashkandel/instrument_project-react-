import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Index from './Components/Pages/Index';
import Register from './Components/Pages/Register';
import Login from './Components/Pages/Login';
import Vendor from './Components/vendor/Index';
import User from './Components/user/IndexLoggedin';
import AddProduct from "./Components/vendor/AddProduct"
import VendorProfile from"./Components/Pages/Profile";
import PageRouter from './Components/PageRouter';
// import IndexLoggedin from './Components/user/IndexLoggedin';
// import Forgotpassword from './Components/user/Forgotpassword';
// import OtpEnter from './Components/user/OtpEnter';
// import Changepassword from './Components/user/Changepassword';

function App() {
  return (
    <BrowserRouter>
      <div className="">


        {/* <UserNavbar/> */}

        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='/vendors/:id' element={<PageRouter/>}>
            <Route index element={<Vendor/>}/>
            <Route path='addproduct' element={<AddProduct />} />
            <Route path='profile' element={<VendorProfile />} />
         
          </Route>
          <Route path='/users/:id' element={<User />} />


          <Route path='register' element={<Register />} />
          <Route path='login' element={<Login />} />

          {/*<Route path='indexloggedin' element={<IndexLoggedin/>}/>
          <Route path='forgotpassword' element={<Forgotpassword/>}/>
          <Route path='confirmotp' element={<OtpEnter/>}/>
          <Route path='changepassword' element={<Changepassword/>}/> */}

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
