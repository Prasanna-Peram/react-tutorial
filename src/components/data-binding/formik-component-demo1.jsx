import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
export function FormikComponentDemo1()
{
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
                {
                    form =>
                     <Form className={(form.isValid)? 'bg-success': 'bg-danger'} style={{padding:'10px'}}>
                        <dl>
                            <dt>User Name</dt>
                            <dd>
                                <Field type="text" name="UserName" />
                            </dd>
                            <dd className="text-danger">
                                <ErrorMessage name="UserName" />
                            </dd>
                            <dt>Age</dt>
                            <dd>
                                <Field  type="text" name="Age" />
                            </dd>
                            <dd className="text-danger">
                                <ErrorMessage name="Age" />
                            </dd>
                            <dt>Mobile</dt>
                            <dd>
                                <Field type="text" name="Mobile" />
                            </dd>
                            <dd className="text-danger">
                                <ErrorMessage name="Mobile" />
                            </dd>
                        </dl>
                         <button className={(form.isValid)? 'd-inline':'d-none'} disabled={!form.isValid} type="submit">Submit</button>
                         <button type="submit" disabled={!form.dirty}>Save</button>
                     </Form>
                }    
                </Formik>
        </div>
    )

}