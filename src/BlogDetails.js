import { useParams } from "react-router-dom";
// useParams grabs dynamic segments from the URL pattern /blogs/:id
const BlogDetails = () => {
    const { id } = useParams();
    return ( 
        <div className="blog-details">
            <h2>Blog details - {id}</h2>
        </div>
     );
}
 
export default BlogDetails;