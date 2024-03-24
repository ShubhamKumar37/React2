import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
    const Navigate = useNavigate();

    function HomeHandler()
    {
        Navigate("/");
    }
    return (
        <div>
            <Outlet></Outlet>
            this is not found page
            <button onClick={HomeHandler}>Go to home page</button>
        </div>
    );
}