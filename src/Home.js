import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlog] = useState([
        {title: "My new website", body: "lorem ipsum dolor sit amet", author: "Victor", id: 1},
        {title: "Welcome party!", body: "lorem ipsum dolor sit amet", author: "Winner", id: 2},
        {title: "Web dev top tips", body: "lorem ipsum dolor sit amet", author: "Constant", id: 3},
        {title: "Software Journey", body: "lorem ipsum dolor sit amet", author: "Victor", id: 4}
    ])
    return ( 
        <div className="home">
            <BlogList blogs ={blogs} title="All Blogs!" />
            <BlogList blogs ={blogs.filter((blog)=> blog.author === "Victor")} title="Victor's blogs" />
        </div>
     );
}
 
export default Home;