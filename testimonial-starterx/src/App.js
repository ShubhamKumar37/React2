import React from "react";
import reviews from "./data";
import Testimonial from "./Components/Testimonial.jsx"

const App = () => {
  return (
    <div className="relative h-[100vh] w-[100vw]  flex flex-row justify-center items-center bg-gray-300">
      <div className="max-w-[700px] flex flex-col text-center gap-5 rounded-lg">
        <div className="space-y-2">
          <h1 className="font-bold text-3xl">Our testimonials</h1>
          <div className="h-1 w-[12rem] bg-purple-600 mx-auto"></div>

        </div>

        <Testimonial Data={reviews}></Testimonial>
      </div>
    </div>
  );
};

export default App;
