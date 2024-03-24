import { useLocation, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Blogs from "../components/Blogs";
import Pagination from "../components/Pagination";


export default function TagPage() {
    const Location = useLocation();
    const Navigation = useNavigate();
    const Tag = Location.pathname.split('/').at(-1).replaceAll("-", " ");

    return (
        <div>
            <Header></Header>
            <div>
                <button onClick={() => Navigation(-1)}>Go back</button>
                <h2>Blogs on #{Tag}</h2>
            </div>
            <Blogs></Blogs>
            <Pagination></Pagination>
        </div>
    );
}