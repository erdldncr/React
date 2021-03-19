import { useState } from 'react';
import BlogList from './BlogList';
const Home = () => {
    const [blogs,setBlogs]=useState([
        {title:'MY new Website',body:'Lorem upsum...',author:'mario',id:1},
        {title:'Welcome Party',body:'Lorem upsum...',author:'Yoshi',id:2},
        {title:'Web dev top tips',body:'Lorem upsum...',author:'mario',id:3}
    ])
    const handleDelete=(id)=>{
        const newBlog=blogs.filter(blog=>blog.id!==id)
        setBlogs(newBlog)
    }

    return ( 
    
<div className="home">
        <BlogList blogs={blogs} title='All Blogs' handleDelete={handleDelete}/>
</div>
     );
}
 
export default Home;


// const handleClickAgain=(e,name)=>{
//     console.log(e.type+`hello ${name}`)
// }

// {/* <button onClick={(e)=>handleClickAgain(e,'mario')}>Click me again</button> */}