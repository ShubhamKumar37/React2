import React, {useState} from "react";
// import Counter from "./components/Counter";
import data from './data'
import Tours from "./components/Tours";

const App = () => {

  // return (
  //   <Counter />
  // );

  const [tours, SetTours] = useState(data);

  function RemoveCard(id)
  {
    const New_Data = tours.filter((tour) => tour.id !== id);
    SetTours(New_Data);
  }
  
  if(tours.length == 0)
  {
    return (
      <div className="h-[100vh] flex flex-col justify-center items-center gap-5">
        <h2 className="text-2xl font-bold">No tour left for you</h2>
        <button className="p-2 bg-blue-700 text-white rounded-lg hover:scale-[1.1] transition-all duration-100" onClick={() => SetTours(data)}>Refresh</button>
      </div>
    );
  }

  return (
    <div className="relative flex flex-col items-center">
      <h2 className="text-2xl font-bold ">Plan with Shubham Kumar</h2>
      <Tours tours={tours} RemoveCard={RemoveCard}/>
    </div>
  );

};

export default App;
