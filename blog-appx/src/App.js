import Blog from "./Components/Blog";
import Pages from "./Components/Pages";
import Header from "./Components/Header";
import "./App.css";



export default function App() {


  return (
    <div className="w-full  relative flex flex-col items-center">
      <Header></Header>
      <Blog></Blog>
      <Pages></Pages>
    </div>
  );
}
