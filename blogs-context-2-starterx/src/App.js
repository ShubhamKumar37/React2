import "./App.css";
import { useContext, useEffect } from "react";
import { AppContext } from "./context/AppContext";
import Home from "./Pages/Home";
import BlogPage from "./Pages/BlogPage";
import TagPage from "./Pages/TagPage";
import CategoryPage from "./Pages/CategoryPage";
import { Route, Routes, useLocation, useSearchParams } from "react-router-dom";


export default function App() {
  const { fetchBlogPosts } = useContext(AppContext);
  const [SearchParams, setSearchParams] = useSearchParams();
  const Location = useLocation();

  useEffect(() => {
    const Page = SearchParams.get('page') ?? 1;

    if(Location.pathname.includes('tags'))
    {
      const Tag = Location.pathname.split('/').at(-1).replaceAll("-", " ");
      {console.log(Tag);}
      fetchBlogPosts(Number(Page), Tag);
    }
    else if(Location.pathname.includes('categories'))
    {
      const Category = Location.pathname.split('/').at(-1).replaceAll("-", " ");
      fetchBlogPosts(Number(Page), null, Category);
    }
    else
    {
      fetchBlogPosts(Number(Page));
    }
  }, [Location.pathname, Location.search]);
  // Location.pathname is for when any tag or category is added to url and Location.search when a page number is searched

  return (
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/blog/:blogId" element={<BlogPage></BlogPage>}></Route>
      <Route path="/categories/:category" element={<CategoryPage></CategoryPage>}></Route>
      <Route path="/tags/:tag" element={<TagPage></TagPage>}></Route>
    </Routes>
  );
}
