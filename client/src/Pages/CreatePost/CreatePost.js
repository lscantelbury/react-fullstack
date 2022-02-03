import {Formik, Form, Field} from "formik";
import {CreatePostCard} from "./Style";
import {Header} from "../Header/Header";
import {useHistory} from "react-router-dom";

export function CreatePost(){
    const history = useHistory();
    return(
        <>
            <Header />
            <CreatePostCard className="createPost">
                <Formik initialValues={null} onSubmit={() => {
                    history.replace('/')
                    history.go(0)
                }}>
                    <Form>
                        <Field id="inputCreatePost" className="title" name="title" placeholder={"Title"} />
                        <Field id="inputCreatePost" className="text" name="text" placeholder={"Post"} />
                        <Field id="inputCreatePost" className="username" name="username" placeholder={"Username"} />
                        <button className="buttonCreate" type="submit">Create Post</button>
                    </Form>
                </Formik>
            </CreatePostCard>
        </>
    )
}