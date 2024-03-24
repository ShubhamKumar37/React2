import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function MainHeader()
{
    return (
        <div>
            <Outlet></Outlet>
        </div>
    );
}