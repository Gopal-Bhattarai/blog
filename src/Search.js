import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import BlogList from "./BlogList";
import useFetch from './useFetch'

const Search = () => {

    const [key, setKey] = useState('');


    const { data: blogs, isPending, error } =  useFetch('http://localhost:8000/blogs')


    const handleSearch = (e) => {
        e.preventDefault();
        setKey(e.target.value);
    }

  return (
    <div>
        <form className="form m-2 p-2">
            <label>Search For:</label>
            <input className="form-control" value={key} onChange={ handleSearch } placeholder="search here..."/>
        </form>

        { isPending && <div>Loading...</div> }
        { error && <div>{error}</div> }
        { blogs &&  blogs.map(blog => blog.author.toLowerCase().includes(key) || blog.title.toLowerCase().includes(key) || blog.body.toLowerCase().includes(key) ? 
                            <div className='card m-3 p-3 shadow' key={blog.id}>
                            <h1 className='display-4'> {blog.title} </h1>
                            <p className='lead'> Author: {blog.author} </p>
                            <Link className="btn btn-primary btn-lg" to={`/blogs/${blog.id}`} role="button">Learn more</Link>
                        </div> : void 0 ) }
    </div>
  )
}

export default Search
