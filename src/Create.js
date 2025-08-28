import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
        // handle create blog logic
        const [title, setTitle] = useState("");
        const [body, setBody] = useState("");
        const [author, setAuthor] = useState("Winner");
        const [isPending, setIsPending] = useState(false);
        const history = useHistory();
        const handleSubm = (e) => {
            e.preventDefault();
            const blog = { title, body, author };
            setIsPending(true);

            fetch("http://localhost:8000/blogs",{
                method: 'POST',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(blog)
            }).then(() => {
                setIsPending(false);
                history.push('/');
            })
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
                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled>Adding Blog...</button>}
            </form>
        </div>
     );
}

export default Create;