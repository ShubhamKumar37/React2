import {Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar";
import Cart from "./pages/Cart";
import Home from "./pages/Home";


export default function App()
{
  return (
    <div className="relative overflow-hidden">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}/>
        <Route path='/cart' element={<Cart></Cart>}/>
        <Route path='/' element={<Home></Home>}/>
      </Routes>
    </div>
  );
}