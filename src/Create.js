import { useState } from "react";

const Create = () => {
        // handle create blog logic
        const [title, setTitle] = useState("");
        const [body, setBody] = useState("");
        const [author, setAuthor] = useState("Winner");
        const handleSubm = (e) => {
            e.preventDefault();
            const blog = { title, body, author };
            console.log(blog);
        }

    return ( 
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubm}>
                <label>Blog title:</label>
                <input 
                    type="text"
                    required
                    value={title} 
                    onChange={(e)=> setTitle(e.target.value)}
                />
                <label>Blog body:</label>
                <textarea
                    required
                    value={body}
                    onChange={(e)=> setBody(e.target.value)}
                ></textarea>
                <label>Blog author:</label>
                <select
                    value={author}
                    onChange={(e)=> setAuthor(e.target.value)}
                 >
                    <option value="Victor">Victor</option>
                    <option value="Winner">Winner</option>
                </select>
                <button>Add Blog</button>
                <p>{title}</p>
                <p>{body}</p>
                <p>{author}</p>
            </form>
        </div>
     );
}

export default Create;