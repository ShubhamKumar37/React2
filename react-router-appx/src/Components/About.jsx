import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function About()
{
    const Navigate = useNavigate();

    function HomeHandler()
    {
        Navigate("/");
    }
    return (
        <div>
            <Outlet></Outlet>
            This is about page
            <button onClick={HomeHandler}>Go to home page</button>
        </div>
    );
}