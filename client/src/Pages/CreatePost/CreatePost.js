import {Formik, Form, Field} from "formik";
import {CreatePostCard} from "./Style";
import {Header} from "../Header/Header";

export function CreatePost(){
    return(
        <>
            <Header />
            <CreatePostCard className="createPost">
                <Formik initialValues={null} onSubmit={() => alert("hello world")}>
                    <Form>
                        <label>Title</label>
                        <Field id="inputCreatePost" name="title" placeholder={"(Ex. Luis Henrique"} />
                        <label>Post:</label>
                        <Field id="inputCreatePost" name="text" placeholder={"(Ex. Post..."} />
                        <label>Username</label>
                        <Field id="inputCreatePost" name="username" placeholder={"(Ex. lscantelbury"} />
                        <button type="submit">Create Post</button>
                    </Form>
                </Formik>
            </CreatePostCard>
        </>
    )
}