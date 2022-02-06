import {Link} from "react-router-dom";
import {HeaderTitle} from "./Style";
import {useContext} from "react";
import {AuthContext} from "../../helpers/AuthContext";

export function Header(){
    const {authState, setAuthState} = useContext(AuthContext)
    return(
        <HeaderTitle className="titulo" align='center'>
            <div>
                <Link to='/'>REACT FULLSTACK</Link>
            </div>
            {!authState.status ? (
                <>
                    <span>
                        <Link to='/login'>Login</Link>
                        <Link to='/registration'>Registration</Link>
                    </span>
                </>
            ):
                <span className="user-logout">
                    <h3 className="user ">@{authState.username}</h3>
                    <button onClick={() => {
                        localStorage.removeItem("accessToken")
                        setAuthState({username: "", id: 0, status: false});
                    }
                    }>Logout</button>
                </span>
            }
        </HeaderTitle>
    )
}