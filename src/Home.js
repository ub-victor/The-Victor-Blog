import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlog] = useState([
        {title: "My new website", body: "lorem ipsum dolor sit amet", author: "Victor", id: 1},
        {title: "Welcome party!", body: "lorem ipsum dolor sit amet", author: "Winner", id: 2},
        {title: "Web dev top tips", body: "lorem ipsum dolor sit amet", author: "Constant", id: 3}
    ])
    return ( 
        <div className="home">
            <BlogList blogs ={blogs} title="All Blogs!" />
        </div>
     );
}
 
export default Home;