import {LoginCard} from "./Style";
import axios from "axios";
import {useState} from "react";

export const Login = () => {
    const [userName, setUserName] = useState();
    const [password, setPassword] = useState();

    const login = () => {
        const data = { username: userName, password: password }
        axios.post('http://localhost:3001/auth/login', data).then((res) => {
            console.log(res.data)
        })
    }
    return(
        <LoginCard>
            <h1 align="center">Login</h1>
            <input type="text" onChange={(event) => {
                setUserName(event.target.value)
            }}/>
            <input type="password" onChange={(event) => {
                setPassword(event.target.value)
            }}/>
            <button className="buttonCreate" onClick={login}>Login</button>
        </LoginCard>
    )
}