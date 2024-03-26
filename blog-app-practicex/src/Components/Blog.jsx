import { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import Spinner from "./Spinner";


export default function Blog()
{
    const {Loading, Blog} = useContext(AppContext);

    return (
        <div>
            {
                Loading ? (<Spinner></Spinner>):
                (
                    Blog.length === 0 ? (<div>No post available </div>):
                    (
                        Blog.map((Element) =>
                        (
                            <div key={Element.id}>
                                <h1>{Element.title}</h1>
                                <p>Published on {Element.date}</p>
                                <p>By {Element.author} on {Element.category}</p>

                                <p>{Element.content}</p>

                                <p>
                                    {
                                        Element.tags.map((Tag, index) =>
                                        {
                                            return (<span key={index}>#{Tag}</span>);
                                        })
                                    }
                                </p>
                            </div>

                        ))
                    )
                )
            }
        </div>
    );
}