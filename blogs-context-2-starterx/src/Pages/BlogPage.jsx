import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { baseUrl } from "../baseUrl";
import Header from "../components/Header";
import BlogCard from "../components/BlogCard"


export default function BlogPage() {
    const [Blog, setBlog] = useState(null);
    const [RelatedBlog, setRelatedBlog] = useState([]);
    const Location = useLocation();
    const { setLoading, loading } = useContext(AppContext);
    const BlogId = Location.pathname.split('/').at(-1);
    const Navigate = useNavigate();
    const NewUrl = "https://codehelp-apis.vercel.app/api/";

    async function fetchRelatedBlogs() {
        setLoading(true);
        try {
            const Response = await fetch(`${NewUrl}get-blog?BlogId=${BlogId}`);
            console.log()
            const Data = await Response.json();

            setBlog(Data.blog);
            setRelatedBlog(Data.relatedBlog);
        }
        catch (Error) {
            console.log("Error aa gaya bhai");
            setBlog(null);
            setRelatedBlog([]);
        }
        setLoading(false);
    }

    useEffect(() => {
        if (BlogId) {
            fetchRelatedBlogs();
        }
    }, [Location.pathname]);

    return (
        <div>
            <Header></Header>
            <div>
                <button onClick={() => Navigate(-1)}></button>
            </div>

            {
                loading ? (<p>Loading</p>) :
                    (

                        Blog ? (<div>
                            <BlogCard post={Blog}></BlogCard>
                        </div>) : (<p>No Post Available</p>)
                    )
            }

            <h1>Related Blog</h1>
            {
                Blog ? (
                    
                        RelatedBlog.map((Element) =>(
                            <div>
                                <BlogCard post={Element}></BlogCard>
                            </div>
                        ))
                    
                ) : (<p>No related blogs</p>)
            }
        </div>
    );
}