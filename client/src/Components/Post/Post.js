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
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('')
    useEffect(() => {
        axios.get(`http://localhost:3001/posts/byId/${id}`).then((res) => {
            setPostObject(res.data)
        });

        axios.get(`http://localhost:3001/comments/${id}`).then((res) => {
            setComments(res.data);
        })
    }, [])

    const addComment = () => {
        axios.post("http://localhost:3001/comments", {
            commentBody: newComment,
            PostId: id
            },
        {
            headers: {
                accessToken: sessionStorage.getItem("accessToken")
            }
        }).then((res) => {
            if (res.data.error) {
                console.log(res.data.error);
            }else {
                const commentToAdd = {commentBody: newComment};
                setComments([...comments, commentToAdd]);
                setNewComment('');
            }
        })
    }
    return(
            <ExpandedCard>
                <div className="card">
                    <div className="title">{postObject.title}</div>
                    <div className="text">{postObject.postText}</div>
                    <div className="username">{postObject.username}</div>
                </div>
                <div className="comments" align="center">
                    <h2 className="title">Comments</h2>
                    <div className="listOfComments">
                        {comments.map((comment, key) => {
                            return <div key={key} className="comment"> {comment.commentBody} </div>
                        })}
                    </div>
                    <div className="input">
                        <textarea value={newComment} wrap="soft" autoComplete="off" onChange={(event) => {
                            setNewComment(event.target.value)
                        }}/>
                        <button onClick={addComment}>Comment</button>
                    </div>
                </div>
            </ExpandedCard>
    );
}