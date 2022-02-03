import {Link} from "react-router-dom";
import {HeaderTitle} from "./Style";

export function Header(){
    return(
        <HeaderTitle className="titulo" align='center'><Link to='/'>REACT FULLSTACK</Link></HeaderTitle>
    )
}