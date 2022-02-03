import {Link} from "react-router-dom";
import {HeaderTitle} from "./Style";

export function Header(){
    return(
        <Link to='/'><HeaderTitle className="titulo" align='center'>REACT FULLSTACK</HeaderTitle></Link>
    )
}