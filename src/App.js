import React from 'react';
import NavBar from './Component/NavBar/NavBar';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home,Menu,SignUp,AboutUs,LogIn,Search,Cart} from './Screens/index'
// import LogIn from './Screens/SignUp/LogIn';
import Dashboard from './Screens/SignUp/Dashboard';
import Reset from './Screens/SignUp/Reset';
import Edit from './Screens/SignUp/Edit'; 
import { ShopContextProvider } from "./Context/ShopContext";
function App() {

  return (
    <ShopContextProvider>
    <Router>
      <NavBar />
      
      <Routes>
      <Route path="/">
          <Route index element={<Home/>} />
     
        <Route path='menu' element={<Menu/>} />
        <Route path='cafe' element={<Search/>} />
        <Route path='sign-up' element={<SignUp/>} />
        <Route path='edit' element={<Edit/>}/> 
        <Route path='login' element={<LogIn/>} />
        <Route path='dashboard' element={<Dashboard/>} />
        <Route path='reset' element={<Reset/>} />
        <Route path='about-us' element={<AboutUs/>} />
        <Route path='cart' element={<Cart/>} />

        </Route>
      </Routes>
    </Router>
    </ShopContextProvider>
  );
}

export default App;
