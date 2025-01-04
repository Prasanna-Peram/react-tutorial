import { Formik, Form, Field,ErrorMessage } from "formik";
import * as yup from "yup"
export function FormikComponentDemo(){
    return (
        <div className="container-fluid">
            <h3>Register User</h3>
            <Formik 
                initialValues={{UserName: '', Age:0, Mobile: ''}}
                validationSchema={
                    yup.object({
                        UserName: yup.string().required("User Name Required").min(4, 'Name too short'),
                        Age: yup.number().required("Age Required").min(15, "age min 15").max(30, "Age max 30"),
                        Mobile: yup.string().matches(/\+91\d{10}/,'Invalid Mobile')
                 })
                }
                onSubmit={(values)=>{
                    console.log(values)
                }}
            >
               <Form>
                 <dl>
                    <dt>User Name</dt>
                    <dd>
                         <Field type="text" name="UserName"></Field>
                    </dd>
                    <dd className="text-danger">
                        <ErrorMessage name="UserName"></ErrorMessage>
                    </dd>
                    <dt>Age</dt>
                    <dd>
                         <Field type="text" name="Age"></Field>
                    </dd>
                    <dd className="text-danger">
                        <ErrorMessage name="Age"></ErrorMessage>
                    </dd>
                    <dt>Mobile</dt>
                    <dd>
                         <Field type="text" name="Mobile"></Field>
                    </dd>
                    <dd className="text-danger">
                        <ErrorMessage name="Mobile"></ErrorMessage>
                    </dd>
                 </dl>
                 <button type="submit">Submit</button>
               </Form>
            </Formik>
        </div>
    )
}