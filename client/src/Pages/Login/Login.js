import {LoginCard} from "./Style";
import axios from "axios";
import {useState} from "react";
import {useHistory} from "react-router-dom";
import {useContext} from "react";
import {AuthContext} from "../../helpers/AuthContext";
export const Login = () => {
    const [userName, setUserName] = useState();
    const [password, setPassword] = useState();
    const {setAuthState} = useContext(AuthContext);
    const history = useHistory();

    const login = () => {
        const data = { username: userName, password: password }
        axios.post('http://localhost:3001/auth/login', data).then((res) => {
            if(res.data.error) return alert(res.data.error);
            localStorage.setItem("accessToken", res.data)
            setAuthState(true);

        })
        history.push('/');
    }
    return(
        <LoginCard>
            <h1 align="center">Login</h1>
            <form>
                <div>
                    <input placeholder="Username" type="text" onChange={(event) => {
                        setUserName(event.target.value)
                    }}/>
                    <input placeholder="Password" type="password" onChange={(event) => {
                        setPassword(event.target.value)
                    }}/>
                </div>
                <button className="buttonCreate" onClick={login}>Login</button>
            </form>
        </LoginCard>
    )
}