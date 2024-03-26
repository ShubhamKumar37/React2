import React from "react";
import { filterData, apiUrl } from "./data";
import NavBar from "./components/NavBar";
import NavFilter from "./components/NavFilter";
import Cards from "./components/Cards";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

const App = () => {
  const [Courses, SetCourses] = useState(null);
  const [Catagory, SetCatagory] = useState(filterData[0].title);

  var Fetch_Data = async () => {
    try {

      let Data = await fetch(apiUrl);
      let Obj = await Data.json();
      SetCourses(Obj.data);
    }
    catch (error) {
      console.log("Error occur hua han bhai");
    }
  }
  useEffect(() => {
    Fetch_Data();

  }, []);


  return (
    <div className="relative min-h-[100vh] min-w-[100vw] bg-blue-700 h-fit w-fit">
      <div className=" text-white pb-2  overflow-x-hidden">
        <NavBar></NavBar>

        <NavFilter Catagory={Catagory} SetCatagory={SetCatagory} filterData={filterData}></NavFilter>

        {Courses &&
          <div className="relative max-w-[980px] mx-auto pt-3 ">
            <Cards Courses={Courses} Catagory={Catagory}></Cards>
          </div>
        }
      </div>
    </div>
  );
};

export default App;
