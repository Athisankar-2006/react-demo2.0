import { useState } from "react";
import Counter from "./Counter";

// import { datacontext } from "./Home";

function Login(){


    const [pwd1,setpwd1]=useState("");
    const [pwd2,setpwd2]=useState("");

    const[valid,setvalid]=useState(true);

    function handlepwd1change(event){
      setpwd1(event.target.value); 
    }

    function handlepwd2change(event){
            setpwd2(event.target.value);

                if(pwd1==event.target.value){
            // console.log("valid password");
            setvalid(true);
        }
        else{
            // console.log("invalid");
            setvalid(false)
        }
    }



    // const data=useContext(datacontext);
   

    return(
        <>

        <Counter/>
        {/* <h2>{data}</h2> */}

    <form className="my-5" style={{margin:"auto", width:"50%"}}>
            <div className="mb-3">
                <label  className="form-label">Email address</label>
                <input type="email" className="form-control"/>
            
            </div>
            <div className="mb-3">
                <label className="form-label">Password</label>
                <input value={pwd1} onChange={handlepwd1change} type="password" className="form-control" />
            </div>
             <div className="mb-3">
                <label className="form-label">Confirm Password</label>
                <input value={pwd2} onChange={handlepwd2change} type="password" className="form-control" />
            </div>
            <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" />
                <label className="form-check-label" >I Agree</label>
            </div>
            
            { !valid && <p>passwords does not match</p>}
            <button type="submit" className="btn btn-primary">Submit</button>
            
    </form>

        
        </>
    );
}

export default Login;

//npm install react-router-dom