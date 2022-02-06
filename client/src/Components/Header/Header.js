import {Link} from "react-router-dom";
import {HeaderTitle} from "./Style";
import {useContext} from "react";
import {AuthContext} from "../../helpers/AuthContext";

export function Header(){
    const {authState} = useContext(AuthContext)
    return(
        <HeaderTitle className="titulo" align='center'>
            <div>
                <Link to='/'>REACT FULLSTACK</Link>
            </div>
            {!authState && (
                <>
                    <span>
                        <Link to='/login'>Login</Link>
                        <Link to='/registration'>Registration</Link>
                    </span>
                </>
            )}
        </HeaderTitle>
    )
}