import { useState } from "react"
import { useHistory  } from "react-router-dom";

const Create = () => {

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] =useState('mario');
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = {title, body, author}
    
    setIsPending(true);

    fetch('http://localhost:8000/blogs', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog)
    }).then(() => {
        console.log('New blog added');
        setIsPending(false)
        history.push('/')
    })
  }

  return (
    <div className="create card m-4 p-3 ">
      <h2 className="mb-5">add a new blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog Title</label>
        <input className="form-control mb-4" type="text" onChange={(e) => setTitle(e.target.value)} value={title}  required />
        <label>Blog Body</label>
        <textarea className="form-control mb-4" onChange={(e)=>setBody(e.target.value)}  value={body} required />
        <label>Blog Author</label>
        <select className="form-control mb-4 p-2" value = {author} onChange={(e)=>setAuthor(e.target.value)}>
        <option value='mario'>mario</option>
        <option value='yoshi'>yoshi</option>
        <option value='zen'>zen</option>
        </select>
        {!isPending && <button className="btn btn-success btn-lg my-4">Add Blog</button>}
        {isPending && <button className="btn btn-success btn-lg my-4" disabled>Adding....</button>}

      </form>
    </div>
  )
}

export default Create
