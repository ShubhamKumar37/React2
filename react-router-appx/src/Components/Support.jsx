import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Support()
{
    const Navigate = useNavigate();

    function HomeHandler()
    {
        Navigate("/");
    }
    function BackHandler()
    {
        Navigate(-1);
    }
    return (
        <div>
            <Outlet></Outlet>
            This is support page
            <button onClick={HomeHandler}>Go to home page</button>
            <button onClick={BackHandler}>Go back</button>
        </div>
    );
}