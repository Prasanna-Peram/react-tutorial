import {  useFormik } from "formik";
import './formik-demo.css';


export function FormikDemo(){


    function ValidateForm(FormData){
        var errors = { Name:'', Price:'', City:'', Stock:'', Vendor:'' }

        if(FormData.Name.length==0){
            errors.Name = "Name Required";
        } else {
            if(FormData.Name.length<4){
                errors.Name = "Name min 4 chars";
            } else {
                errors.Name = "";
            }
        }

        if(FormData.City=="-1"){
            errors.City = "Please select a city";
        } else {
            errors.City = "";
        }

        return errors;
    }

    const formik = useFormik({
        initialValues: {
             Name: '',
             Price: 0,
             City: '',
             Stock: false,
             Vendor: ''
        },
        validate: ValidateForm,
        onSubmit: (values) => {
            console.log(values);
        }
    })

    return(
        <div className="container-fluid">
             <h3>Register Product</h3>
             <form onSubmit={formik.handleSubmit}>
                <dl>
                    <dt>Name</dt>
                    <dd><input type="text"  onChange={formik.handleChange} name="Name" /><span>*</span> </dd>
                    <dd className="text-danger">{formik.errors.Name}</dd>
                    <dt>Price</dt>
                    <dd><input type="number" id="Price" onChange={formik.handleChange} name="Price" /><span>*</span> <div className="text-warning bi bi-exclamation-triangle"> Price 5000 to 10000 only </div> </dd>
                    <dt>City</dt>
                    <dd>
                        <select name="City" onChange={formik.handleChange}>
                            <option value="-1">Select City</option>
                            <option value="Delhi">Delhi</option>
                            <option value="Hyd">Hyd</option>
                        </select>
                    </dd>
                    <dd className="text-danger">{formik.errors.City}</dd>
                    <dt>Stock</dt>
                    <dd>
                        <input type="checkbox" onChange={formik.handleChange} name="Stock" /> <label>Available</label>
                    </dd>
                    <dt>Vendor Contact</dt>
                    <dd><input type="text" required pattern="\+91\d{10}" placeholder="+91 and 10 digits" onChange={formik.handleChange} name="Vendor"/><span>*</span> <div>Invalid Mobile +91 10 digits</div> </dd>
                    <dt>Terms of Service</dt>
                    <dd>
                    <textarea disabled rows="4" cols="40" value="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam alias, recusandae facere error exercitationem incidunt placeat? Nostrum similique voluptas dolor officia deserunt nobis ad corporis. Ut veniam perspiciatis vitae dicta.">  </textarea>
                    <br/>
                    <input type="checkbox" className="terms"/> <label>I Accept</label>
                    <br /><br/>
                    <button type="submit">Submit</button>
                    </dd>
                </dl>
                
             </form>
        </div>
    )
}

