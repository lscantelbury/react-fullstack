import {Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from 'yup';
import {RegistrationCard} from "./Style";
import axios from "axios";
import {useHistory} from "react-router-dom";

export const Registration = () => {
    const history = useHistory()
    const initialValues = {
        username: "",
        password: "",
    };
    const validationSchema = Yup.object().shape({
        username: Yup.string().min(3).max(15).required(),
        password: Yup.string().min(4).max(20).required(),
    });

    const handleSubmit = (data) => {
        axios.post('http://localhost:3001/auth', data).then(() => {
            history.push('/login')
        })
    }
    return (
        <RegistrationCard>
            <h1 align="center">Registration</h1>
            <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
                <Form>
                    <div>
                        <ErrorMessage name="username"  component="label"/>
                        <Field autocomplete="off" id="inputCreatePost" className="username" name="username" placeholder={"Username"} />

                        <ErrorMessage name="password"  component="label"/>
                        <Field type="password" autocomplete="off" id="inputCreatePost" className="password" name="password" placeholder={"Password"} />
                    </div>

                    <button className="buttonCreate" type="submit">Register</button>
                </Form>
            </Formik>
        </RegistrationCard>
    )
}