import {Card, ExpandedCard} from "./Style";
import {useHistory, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

export function Post({listOfPosts}){
    const history = useHistory();

    return(
        <>
            {listOfPosts.map((value) => {
                return(
                    <Card>
                        <div className="title" key={value.id}>{value.title}</div>
                        <div className="text" key={value.id} onClick={() => {
                            history.push(`/post/${value.id}`)
                        }}
                        >{value.postText}</div>
                        <div className="username" key={value.id}><a href="https://github.com/lscantelbury">{value.username}</a></div>
                    </Card>
                )
            })}
        </>
    );
}

export function ExpandedPost(){
    let { id } = useParams();
    const [postObject, setPostObject] = useState({});
    useEffect(() => {
        axios.get(`http://localhost:3001/posts/byId/${id}`).then((res) => {
            setPostObject(res.data)
        })
    }, [])
    return(
        <ExpandedCard>
            <div className="title">{postObject.title}</div>
            <div className="text">{postObject.postText}</div>
            <div className="username">{postObject.username}</div>
        </ExpandedCard>
    );
}