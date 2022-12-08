import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import useFetch from "./useFetch";
import { useHistory  } from "react-router-dom";


const BlogDetails = () => {

    const { id } = useParams()
    const {data: blog, isPending, error} = useFetch('http://localhost:8000/blogs/' + id);

    const history = useHistory();

    const handleDelete = () => {
      fetch('http://localhost:8000/blogs/' + blog.id, {
        method: 'DELETE'
      }).then(()=>{
        console.log('Blog deleted!');
        history.push('/');
      })
    }

  return (
    <>
      { isPending && <div>Loading...</div>}
      { error && <div> {error} </div> }
      { blog && ( 
        <div className="card border-primary m-3 rounded shadow">
            <div className="card-header">author: {blog.author}</div>
            <div className="card-body text-primary">
            <h5 className="card-title">{blog.title}</h5>
                <p className="card-text">{blog.body}</p>
            </div>
            <div className="card-footer bg-transparent border-success">
              <button className="btn btn-danger btn-sm" onClick={handleDelete} >Delete</button>
            </div>
        </div>
      )}
    </>
  )
}

export default BlogDetails

