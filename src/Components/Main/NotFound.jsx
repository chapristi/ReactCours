import {Link} from "react-router-dom";

const NotFound = () =>{
    return(
        <div>
            <h1>404</h1>
            <Link to={"/"}>go to home</Link>
        </div>
    )
}



export default NotFound