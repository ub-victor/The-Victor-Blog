const BlogList = ({blogs, title}) => {
    // const blogs = props.blogs;
    // const title = props.title;
    return ( 
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map((blog)=> (
                <div className="blog-preview" key={blog.id}> {/* prop is special in React. It helps React identify which items in a list have changed, been added, or removed. Here, blog.id is likely a unique identifier for each blog post. Using it as a key improves rendering performance and avoids bugs when updating lists. */}
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                </div>
            ))}
        </div>
     );
}
 
export default BlogList;