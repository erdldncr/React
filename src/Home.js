import { useState, useEffect } from 'react';
import BlogList from './BlogList';
const Home = () => {
    const [blogs,setBlogs]=useState(null);
    const [isPending, setIsPending]=useState(true)
    const [error, setError]=useState(null)
    

    useEffect(()=>{
        setTimeout(()=>{

            fetch('http://localhost:8000/blogs')
            .then(res=>{
                if(res.ok){
                    return res.json()
                }
                throw new Error('Request failed!');
            })
            .then(data=> {
                setBlogs(data)
                setIsPending(false)
                setError(null)
            })
            .catch((err)=> {
                setIsPending(false)
                setError(err.message)
                
            })

            


        },2000)

        
    }, []);

    return ( 
    
<div className="home">
            {error && <div>{error}</div>}
           {isPending && <div>Loading....</div> }
           {blogs&& <BlogList blogs={blogs} title='All Blogs'/>}
       
       
</div>
     );
}
 
export default Home;


// const handleClickAgain=(e,name)=>{
//     console.log(e.type+`hello ${name}`)
// }

// {/* <button onClick={(e)=>handleClickAgain(e,'mario')}>Click me again</button> */}