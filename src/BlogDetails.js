import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
// useParams grabs dynamic segments from the URL pattern /blogs/:id
const BlogDetails = () => {
    const { id } = useParams();
    const { data: blog, error, isPending } = useFetch(`http://localhost:3000/blogs/${id}`);
    return ( 
        <div className="blog-details">
            <h2>Blog details - {id}</h2>
        </div>
     );
}
 
export default BlogDetails;