import BlogList from './BlogList';
import useFetch from './useFetch';

function Home() {
  const { data: blogs, isPending, error } =  useFetch('http://localhost:8000/blogs')


  return (
    <div className='home m-3 p-3'>
        {error && <div>{error}</div> }
        {isPending && <div>"Loading..."</div>}
        {blogs && <BlogList blogs={blogs} type="jumbotron p-2 m-3" title="All Blogs !"/>}
    </div>
  )
}

export default Home
