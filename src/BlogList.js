import { Link } from 'react-router-dom'

const BlogList = ( {blogs, type, title} )=> {
    // const blogs = props.blogs
    // const type = props.type
    // const title = props.title
    
  return (
    <div className="blog-list">
        <h1>{title}</h1>
            {blogs.map(blog => (
            <div className={type} key={blog.id}>
                <h1 className='display-4'> {blog.title} </h1>
                <p className='lead'> Author: {blog.author} </p>
                <Link className="btn btn-primary btn-lg" to={`/blogs/${blog.id}`} role="button">Learn more</Link>
            </div>
        ) )}
    </div>
  )
}

export default BlogList
