import React from 'react'
import { Routes ,Route } from 'react-router-dom';
import PublicLayout from './PublicLayout';
import Home from '../pages/Home';
import Login from './../components/Login';
import Register from './../components/Register';
import Profile from '../pages/Profile';
import Products from '../pages/Products';
import Cart from '../pages/Cart';
import RouteProtection from '../utils/RouteProtection.jsx'
import LogRegRouteProtection from '../utils/LogRegRouteProtection.jsx';


const PublicRoutes = () => {



  return (
    <>
      <Routes>
        <Route path='/' element={<PublicLayout/>}>
                <Route index element ={<Home/>}/>
          <Route path='/home' element={<Home />} />

          <Route path='/profile' element={<RouteProtection />} >
            <Route path='/profile' element={<Profile />}/>
          </Route>
          
          <Route element={<RouteProtection />}>
            <Route path="/shop" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
          </Route>


          <Route path='/login' element={<LogRegRouteProtection />}>
            <Route path='/login' element={<Login />} />
          </Route >




          <Route path='/register' element={<LogRegRouteProtection />}>
            <Route path='/register' element={<Register />} />
          </Route >



          <Route path='/register' element={<Register />} />
                
        </Route>

      </Routes>  
    </>
  )
}

export default PublicRoutes;