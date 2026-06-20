import {Link} from "react-router-dom";

function Notfound(){

    return(

        <>
        <h2>Error 404 Page not found</h2>

        <a className="btn btn-primary" href="/"> Home</a>

        <Link className="btn btn-danger" to="/">Home</Link>
        </>
    );
}

export default Notfound;