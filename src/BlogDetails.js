import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useHistory } from "react-router-dom";
// useParams grabs dynamic segments from the URL pattern /blogs/:id
const BlogDetails = () => {
    const { id } = useParams();
    const { data: blog, error, isPending } = useFetch(`http://localhost:8000/blogs/${id}`);
    const history = useHistory();
    const handleClick = () => {
        fetch("http://localhost:8000/blogs/" + blog.id, {
            method: 'DELETE'
        }).then(() => {
            // Redirect or update UI after deletion
            history.push('/');
        })
    }
    return ( 
        <div className="blog-details">
            { isPending && <div>Loading...</div> }
            { error && <div>{ error }</div> }
            { blog && (
                <article>
                    <h2>{ blog.title }</h2>
                    <p>{ blog.body }</p>
                    <button onClick={() => handleClick()}>Delete</button>
                </article>
            )}
        </div>
     );
}
 
export default BlogDetails;