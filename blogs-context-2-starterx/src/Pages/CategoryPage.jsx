import { useLocation, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Blogs from "../components/Blogs";
import Pagination from "../components/Pagination";


export default function CategoryPage()
{
    const Location = useLocation();
    const Navigate = useNavigate();

    return (
        <div>
            <Header></Header>
            <div>
                <button onClick={() => Navigate(-1)}>Go Back</button>
                <h1>Blogs on {Location.pathname.split('/').at(-1).replaceAll("-", " ")}</h1>
            </div>
            
            <Blogs></Blogs>
            <Pagination></Pagination>
        </div>
    );
}