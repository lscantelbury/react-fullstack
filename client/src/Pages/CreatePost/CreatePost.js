import {Formik, Form, Field, ErrorMessage} from "formik";
import {CreatePostCard} from "./Style";
import {useHistory} from "react-router-dom";
import * as Yup from 'yup';
import axios from "axios";
import {useContext} from "react";
import {AuthContext} from "../../helpers/AuthContext";

export function CreatePost(){
    const history = useHistory();
    const { authState } = useContext(AuthContext);
    const initialValues = {
        title: "",
        text: "",
        username: authState.username,
    };

    const handleSubmit = (data) => {
        axios.post('http://localhost:3001/posts', data).then(() => {
            history.push('/');
            history.go(0);
        })
    }

    const validationSchema = Yup.object().shape({
        title: Yup.string().required(),
        postText: Yup.string().required(),
    });
    return(
        <>
            <CreatePostCard className="createPost">
                <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
                    <Form>
                        <ErrorMessage name="title" component="label"/>
                        <Field autocomplete="off" id="inputCreatePost" className="title" name="title" placeholder={"Title"} />

                        <ErrorMessage name="postText"  component="label"/>
                        <Field autocomplete="off" id="inputCreatePost" className="text" name="postText" placeholder={"Post"} />

                        <ErrorMessage name="username"  component="label"/>
                        <Field value={authState.username} autocomplete="off" id="inputCreatePost" className="username" name="username" placeholder={"Username"} />
                        <button className="buttonCreate" type="submit">Create Post</button>
                    </Form>
                </Formik>
            </CreatePostCard>
        </>
    )
}