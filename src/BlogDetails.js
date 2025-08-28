import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
// useParams grabs dynamic segments from the URL pattern /blogs/:id
const BlogDetails = () => {
    const { id } = useParams();
    const { data: blog, error, isPending } = useFetch(`http://localhost:8000/blogs/${id}`);
    const handleClick = () => {

    }
    return ( 
        <div className="blog-details">
            { isPending && <div>Loading...</div> }
            { error && <div>{ error }</div> }
            { blog && (
                <article>
                    <h2>{ blog.title }</h2>
                    <p>{ blog.body }</p>
                    <button onClick={() => handleClick(blog.id)}>Delete</button>
                </article>
            )}
        </div>
     );
}
 
export default BlogDetails;