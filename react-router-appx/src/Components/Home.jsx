import { useNavigate } from "react-router-dom";

export default function Home()
{
    const Navigate = useNavigate();

    function HomeHandler()
    {
        Navigate("/");
    }
    return (
        <div>
            This is home page
            <button onClick={HomeHandler}>Go to home page</button>
        </div>
    );
}