// import { LinkOverlay } from '@chakra-ui/react';
import React from 'react';
import {Routes,Route} from "react-router-dom";
import Home from "../Page/Home";
import Products from '../Page/Products';
import Cart from "../Page/CartPage"
import Signup from '../Page/Signup';
import LoginPage from '../Page/LoginPage';
import Membership from '../Page/Membership';
import Support from "../Page/Support"
import Info from "../Page/Info"
import Payment from "../Page/Payment"
function AllRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/Products" element={<Products/>}></Route>
        <Route path="/Cart" element={<Cart/>}></Route>
        <Route path="/Info" element={<Info/>}></Route>
        <Route path="/Signup" element={<Signup/>}></Route>
        <Route path="/Login" element={<LoginPage/>}></Route>
        <Route path="/Membership" element={<Membership/>}></Route>
        <Route path="/Support" element={<Support/>}></Route>
        <Route path="/Payment" element={<Payment/>}></Route>
      </Routes>
    </>
  )
}

export default AllRoutes
   

