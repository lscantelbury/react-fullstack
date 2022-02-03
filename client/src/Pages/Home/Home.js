import {Post} from "../../Components/Post/Post";
import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import {HomePage} from "./Style";
import {Header} from "../Header/Header";

export function Home(){
    const [listOfPosts, setListOfPosts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/posts').then((res) => {
            setListOfPosts(res.data);
        })
    }, [])
    return(
    <>
        <Header />
        <HomePage>
            <Link to='/create-post'>Create a post</Link>
            <Post listOfPosts={listOfPosts} />
            <footer>Luís Henrique Scantelbury de Almeida</footer>
        </HomePage>
    </>
    )
}