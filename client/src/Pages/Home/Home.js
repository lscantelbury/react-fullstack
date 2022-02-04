import {Post} from "../../Components/Post/Post";
import React, {useEffect, useState} from "react";
import axios from "axios";
import {HomePage} from "./Style";
import {useHistory} from "react-router-dom";

export function Home(){
    const [listOfPosts, setListOfPosts] = useState([]);
    const history = useHistory();

    useEffect(() => {
        axios.get('http://localhost:3001/posts').then((res) => {
            setListOfPosts(res.data);
        });
    }, [])
    return(
    <>
        <HomePage>
                <button className='createPost' onClick={() => {history.push('/create-post')}}>Create a post</button>
                <Post listOfPosts={listOfPosts} />
        </HomePage>
    </>
    )
}