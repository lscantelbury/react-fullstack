import {Link} from "react-router-dom";
import {HeaderTitle} from "./Style";

export function Header(){
    return(
        <HeaderTitle className="titulo" align='center'>
            <div>
                <Link to='/'>REACT FULLSTACK</Link>
            </div>
            <span>
                <Link to='/login'>Login</Link>
                <Link to='/registration'>Registration</Link>
            </span>
        </HeaderTitle>
    )
}