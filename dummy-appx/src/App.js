import logo from './logo.svg';
import { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [InputValue, SetInputValue] = useState('');

  function ValueHandler(Event) {
    SetInputValue(Event.target.value);
    console.log(InputValue);
  }

  // This will execute in every render
  // useEffect(() => {
  //   console.log("Yep i rendered the website again")
  // });

  // this will execute only 1 time at first render
  // useEffect(() => {
  //   console.log("Yep i rendered the website again")
  // }, []);

  // This is will execute only when a dependencies is triggered
  // useEffect(() =>
  // {
  //   console.log("Value is changed in input field");
  // }, [InputValue]);

  // first the return part is executed then above part which help to clear the extra event listener 
  // useEffect(() =>
  // {
  //   console.log("This is Use_Effect4 before return");
  //   return (() => 
  //   {
  //     console.log("This is a Use_Effect5 after return");
  //   });
  // })

  return (
    <div>
      <input onChange={ValueHandler} className="border-4 border-black"></input>
    </div>
  );
}

export default App;
