import React from "react";
import { Form,Formik, Field, ErrorMessage } from "formik";
import * as yup from "yup"

export class FormikClassDemo extends React.Component
{
    constructor() {
        super();
    }
    render() {
        return(
            <div className="container-fluid">
                <Formik 
                initialValues={{Name:'', Price: 0, Stock: false}} 
                validationSchema={yup.object({
                    Name: yup.string().required('Name Required')
                })}
                onSubmit={(values) => {
                    console.log(values)
                }}
                >
                    <Form>
                        <h2>Register Product</h2>
                        <dl>
                            <dt>Name</dt>
                            <dd>
                                <Field type="text" name="Name"></Field>
                                <dd className="text-danger"><ErrorMessage name="Name"/></dd>
                            </dd>
                            <dt>Price</dt>
                            <dd>
                                <Field type="number" name="Price"></Field>
                            </dd>
                            <dt>Stock</dt>
                            <dd>
                                <Field type="checkbox" name="Stock"></Field><label>Available</label>
                            </dd>
                        </dl>
                        <button type="submit">Submit</button>
                    </Form>

                </Formik>
            </div>
        )
    }
}