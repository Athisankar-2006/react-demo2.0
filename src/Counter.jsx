import { useEffect, useState } from "react";
// import { datacontext } from "./Home";

function Counter(){

   // const data=createContext(datacontext);

  const [count,setcount]=useState(0);

            function inc(){
                setcount(prec=>prec+1);
               setcount(prec=>prec+1);
            }
            

            useEffect(()=>{

                 console.log(count)

            },[count])

    return(
 <>
  

  {/* <h2>this is a data from home:{data}</h2> */}
  <h2 className="m-5">{count}</h2>

  <button className="mx-4" onClick={inc}>click me</button>
 
 
 </>

    );
}


export default Counter;