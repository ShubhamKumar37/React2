import { createContext, useEffect, useState } from "react";
import { baseUrl } from "../baseUrl";

export const AppContext = createContext();

export default function AppContextProvider({children})
{
    const [Blog, setBlog] = useState([]);
    const [Page, setPage] = useState(1);
    const [TotalPages, setTotalPages] = useState(0);
    const [Loading, setLoading] = useState(true);
    const Url = baseUrl;

    async function fetchBlog(Page = 1)
    {
        setLoading(true);

        try
        {
            const Response = await fetch(`${Url}?page=${Page}`);
            const Data = await Response.json();

            setBlog(Data.posts);
            setTotalPages(Data.totalPages);
        }
        catch(Error)
        {
            console.log("Error is there in fetching data from API");
            setBlog(null);
            setTotalPages([]);
        }

        setLoading(false);
    }

    useEffect(() =>
    {
        fetchBlog();
    }, []);

    function changePageHandler(Page)
    {
        setPage(Page);
        fetchBlog(Page);
    }

    const value = 
    {
        Blog,
        setBlog,
        Loading, 
        setLoading,
        Page, 
        setPage, 
        TotalPages,
        setTotalPages,
        fetchBlog,
        changePageHandler
    }

    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}