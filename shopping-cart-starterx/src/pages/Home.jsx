import { useEffect, useState } from "react";
import "./Spinner.css";
import ProductCard from "./ProductCard";


const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [Loading, setLoading] = useState(true);
  const [Posts, setPosts] = useState([]);

  async function FetchData() {
    setLoading(true);

    try {
      const Response = await fetch(API_URL);
      const Data = await Response.json();
      setPosts(Data);
    }
    catch (Error) {
      console.log("There is error in fetch api call H");
      setPosts([]);
    }
    setLoading(false);
  }

  useEffect(() => {
    FetchData();
  }, []);


  return (
    <div className="relative w-full mt-[2rem] m-4 ">
      <div className="relative w-9/12 mx-auto">
        {
          Loading ? (<div className="Spinner"></div>) :
            (
              Posts.length > 0 ? <div className="relative grid grid-cols-4 gap-7">
                {
                  Posts.map((Post) => (
                    <ProductCard key={Post.id} Post={Post}></ProductCard>
                  ))
                }
              </div> : <div> There is no product available</div>
            )
        }
      </div>
    </div>
  );
};

export default Home;
