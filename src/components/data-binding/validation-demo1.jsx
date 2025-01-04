import React from "react";
import { useFormik } from "formik";
import * as yup from "yup"
export function ValidationDemo1(){
    const mobileRule =/\+91\d{10}/;
    
    const validation_Schema = yup.object().shape({
      UserName: yup
        .string()
        .required("Required"),
        Mobile: yup
          .string()
          .min(10)
          .matches(mobileRule, { message: "Please enter valid mobile number" })
          .required("Required"),
      Age: yup.number().positive().integer().required("Required"),
    });

    const formik = useFormik({
        initialValues: {
            UserName : '',
            Age: '0',
            Mobile: ''
        },
        validationSchema: validation_Schema,
        onSubmit:async(values, actions) =>{
            alert("success")
            console.log(values)
        },
    })
    return (
        <form  noValidate onSubmit={formik.handleSubmit}>
        <dl>
            <dt>User Name</dt>
            <dd><input type="text" onChange={formik.handleChange} name="UserName"  value={formik.values.UserNamne}/></dd>
            <dd className="text-danger">{formik.errors.UserName}</dd>
            <dt>Age</dt>
            <dd><input type="text" onChange={formik.handleChange} name="Age" value={formik.values.Age} /></dd>
            <dd className="text-danger">{formik.errors.Age}</dd>
            <dt>Mobile</dt>
            <dd><input type="text" onChange={formik.handleChange} name="Mobile"  value={formik.values.Mobile}/></dd>
            <dd className="text-danger">{formik.errors.Mobile}</dd>
        </dl>
        <button type="submit" className="btn btn-primary"> Submit</button>
    </form>
    )
}