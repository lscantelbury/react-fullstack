import {Card, ExpandedCard} from "./Style";
import {useHistory, useParams} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import axios from "axios";
import {AuthContext} from "../../helpers/AuthContext";
export function Post({listOfPosts}){
    const history = useHistory();

    return(
        <>
            {listOfPosts.map((value, key) => {
                return(
                    <Card>
                        <div className="title" key={key}>{value.title}</div>
                        <div className="text" key={key} onClick={() => {
                            history.push(`/post/${value.id}`)
                        }}
                        >{value.postText}</div>
                        <div className="username" key={key}><a href="https://github.com/lscantelbury">{value.username}</a></div>
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
    const  { authState } = useContext(AuthContext);
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
                accessToken: localStorage.getItem("accessToken")
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

    const deleteComment = (id) => {
        axios.delete(`http://localhost:3001/comments/${id}`, {
            headers: {accessToken: localStorage.getItem("accessToken")}
        }).then(() => {
            setComments(comments.filter((value) => {
                return value.id != id;
            }))
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
                            return <div key={key} className="comment">
                                {comment.commentBody}
                                <label>  @{comment.username} </label>
                                {authState.username === comment.username && <button onClick={() => {
                                deleteComment(comment.id)}
                                }>X</button>}
                            </div>
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