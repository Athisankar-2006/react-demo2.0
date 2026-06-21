import { useEffect, useState } from "react";
import {Link} from "react-router-dom";





function Home(){

     const [posts,setposts]=useState(null);



     useEffect(()=>{

        const controller=new AbortController();
        const signal=controller.signal;

    setTimeout(()=>{
     fetch('http://localhost:3000/posts',{signal})
       .then(response=>{
        return response.json()
       })

       .then((data)=>{
        console.log(data);
        setposts(data);
       })
       
       .catch((err)=>{
        console.log(err);
       })
   },5000);


   //cleaning function
   return()=>{
    console.log('unMounted.cleaning up');
    controller.abort();

   }

     },[]);



    return(
        <>
        
        <div className="container">

           <Link to='/login'>Login</Link>

           <div className="row justify-content-center m-3">
               
               {posts && posts.map(post=>{
                   return(
                    <div key={post.id} className="card m-3" style={{width:'18rem'}}>
                          <div className="card-body">

                               <h5 className="card-title">{post.title}</h5>
                               <p className="card-text">{post.content}</p>
                          </div>
                   </div>
        
                   )
               })}

           </div>

        </div>
        
        </>
    );
}

export default Home;



//npx json-server --watch data/db.json --port 3000 --static ./data