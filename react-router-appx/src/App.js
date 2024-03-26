import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link, NavLink } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Support from './Components/Support';
import Lab from './Components/Lab';
import NotFound from './Components/NotFound';
import MainHeader from './Components/MainHeader';

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink to='/About'>About</NavLink>
          </li>
          <li>
            <NavLink to='/Support'>Support</NavLink>
          </li>
          <li>
            <NavLink to='/Lab'>Lab</NavLink>
          </li>
          <li>
            <NavLink to='*'>NotFound</NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<MainHeader></MainHeader>}>
          <Route index element={<Home></Home>}></Route>
          <Route path='/About' element={<About></About>}></Route>
          <Route path='/Support' element={<Support></Support>}></Route>
          <Route path='/Lab' element={<Lab></Lab>}></Route>
          <Route path='*' element={<NotFound></NotFound>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
