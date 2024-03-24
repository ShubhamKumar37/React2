import { Navigate } from "react-router-dom";

export default function PrivateRoute({IsLogged, children})
{
    if(IsLogged === true)
    {
        return children;
    }
    else 
    {
        return <Navigate to="/login"></Navigate>
    }
}