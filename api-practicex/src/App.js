import React from "react";
import { Obj } from "./data.js";
import { useState, useEffect } from "react";
import Home from "./Components/Home.jsx";
import MainNav from "./Components/MainNav.jsx";
import {Routes, Route} from 'react-router-dom';
import Account from './Components/Account.jsx';
import TVPage from './Pages/TVPage.jsx';



const App = () => {

  const [News, SetNews] = useState(null);
  const [Mode, SetMode] = useState(false);
  const [Logged, SetLogged] = useState(false);

  console.log(Logged);

  async function Fetch_Data() {
    try {
      // let Raw = await fetch(API);
      // let Jobj = await Raw.json();

      // console.log(Jobj.articles[0]);
      SetNews(Obj.articles);

    }
    catch (e) {
      console.log("Error a gaya bhai");
    }
  }

  useEffect(() => {
    Fetch_Data();
  }, []);

  return (
    <div>
      <div className="relative">
        <MainNav Mode={Mode}></MainNav>
        {/* <Home Mode={Mode} News={News} SetMode={SetMode}></Home> */}
        <Routes>
          <Route path='/' element={<Home Logged={Logged} Mode={Mode} News={News} SetLogged={SetLogged} SetMode={SetMode}/>}></Route>
          <Route path='/account' element={<Account Logged={Logged} SetLogged={SetLogged}></Account>}></Route>
          
        </Routes>
      </div>
    </div>
  );
};

export default App;
