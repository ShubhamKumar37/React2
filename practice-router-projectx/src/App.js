import "./App.css";
import {Route, Routes} from 'react-router-dom';
import About from "./Components/About";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import Login from "./Components/Login";
import Dashboard from "./Components/Dashboard";
import Signup from "./Components/Signup";
import NavBar from "./Components/NavBar";
import PrivateDash from "./Components/PrivateDash";
import { useState } from "react";


function App() {

  const [IsLogged, SetIsLogged] = useState(false);

  return (
    <div>
      <NavBar IsLogged={IsLogged} SetIsLogged={SetIsLogged}></NavBar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/login" element={<Login SetIsLogged={SetIsLogged}></Login>}></Route>
        <Route path="/signup" element={<Signup SetIsLogged={SetIsLogged}></Signup>}></Route>
        <Route path="/dashboard" element={
          <PrivateDash IsLogged={IsLogged}>
            <Dashboard></Dashboard>
          </PrivateDash>
        }></Route>
      </Routes>
    </div>

  );
}

export default App;
