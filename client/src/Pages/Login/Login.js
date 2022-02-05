import {LoginCard} from "./Style";
import axios from "axios";
import {useState} from "react";

export const Login = () => {
    const [userName, setUserName] = useState();
    const [password, setPassword] = useState();

    const login = () => {
        const data = { username: userName, password: password }
        axios.post('http://localhost:3001/auth/login', data).then((res) => {
            if(res.data.error) return alert(res.data.error);
            sessionStorage.setItem("accestToken", res.data)
        })
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