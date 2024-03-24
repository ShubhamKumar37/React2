import logo from './logo.svg';
import './App.css';
import NewNav from './Component/NewNav'
import TextForm from './Component/TextForm'
import Accordian from './Component/Accordian';


function App() {
  return (
    <div>
      <NewNav Title="Shubham Company"></NewNav>
      {/* <NewNav Title="Shubham Company" About="New About"></NewNav> */}
      {/* <TextForm Heading="Enter your Text here Please."></TextForm> */}
      <Accordian></Accordian>
    </div>
  );
}

export default App;


