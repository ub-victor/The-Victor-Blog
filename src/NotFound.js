import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>Blog Not Found</h2>
            <p>Sorry, the blog you are looking for does not exist.</p>
            <Link to="/">Go back to Home</Link>
        </div>
     );
}
 
export default NotFound;