import {useState, createContext, useEffect} from 'react';
import {baseUrl} from '../baseUrl.js';

let URL = baseUrl;

export const AppContext = createContext();

export default function AppContextProvider({children})
{
    const [Page, SetPage] = useState(1);
    const [Loading, SetLoading] = useState(false);
    const [TotalPages, SetTotalPages] = useState(null);
    const [Blog, SetBlog] = useState([]);

    async function FetchData(page = 1)
    {
        SetLoading(true);
        try
        {
            const Response = await fetch(`${URL}?page=${page}`);
            const Obj = await Response.json();

            SetPage(Obj.page);
            SetTotalPages(Obj.totalPages);
            SetBlog(Obj.posts);
            // console.log(Obj);
        }
        catch(Error)
        {
            console.log("Buddy error are coming like tsunami");
            SetPage(1);
            SetTotalPages(null);
            SetBlog([]);
        }
        SetLoading(false);
    }

    useEffect(() =>
    {
        FetchData();
    }, [])
    function PageChangeHandler(page)
    {
        SetPage(page);
        FetchData(page);
    }

    const value = 
    {
        Loading,
        SetLoading,
        Page, 
        SetPage, 
        Blog,
        SetBlog,
        TotalPages,
        SetTotalPages,
        FetchData,
        PageChangeHandler
    }

    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}