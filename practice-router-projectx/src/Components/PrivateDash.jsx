import { Navigate } from "react-router-dom";

export default function PrivateDash({IsLogged, children})
{
    if(IsLogged === true)
    {
        return children;
    }
    
    return <Navigate to="/login"></Navigate>
}