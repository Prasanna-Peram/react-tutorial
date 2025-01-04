import React from 'react';
import { useFormik } from 'formik';
import { registrationSchema } from "./Registration-schema.js";
import "./first-example.css";
import toast from "react-hot-toast";

export function FirstExample(){
    const formik = useFormik({
        initialValues: {
          name: "",
          email: "",
          password: "",
          confirm_password: "",
          terms: false,
          age: "",
          jobtitle: "",
          gender: "",
        },
        validationSchema: registrationSchema,
        onSubmit: async (values, actions) => {
          await new Promise((resolve, reject) => {
            setTimeout(resolve, 1000);
          });
          alert("Success")
          console.log(values)
          toast.success("Successfully Registered", {
            icon: "😃",
          });
         // actions.resetForm();
        },
      });
    
      return (
        <form
          className="container d-flex gap-4 justify-content-center align-items-center flex-column"
          style={{ background: "#CBDAE9" }}
          onSubmit={formik.handleSubmit}
        >
          <h1 className="border-bottom border-dark pb-2">Registration</h1>
          <div>
            <label for="name">Full Name</label>
            <div className="w-75">
              <input
                id="name"
                name="name"
                className={
                  formik.errors.name && formik.touched.name
                    ? `form-control input-error`
                    : `form-control`
                }
                type="text"
                autoComplete="off"
                placeholder="Enter full name"
                onChange={formik.handleChange}
                value={formik.values.name}
                onBlur={formik.handleBlur}
              />
              {formik.errors.name && formik.touched.name ? (
                <div className="text text-danger">{formik.errors.name}</div>
              ) : (
                ""
              )}
            </div>
          </div>
          <div>
            <label for="email">Email</label>
            <div className="w-75">
              <input
                id="email"
                name="email"
                className={
                  formik.errors.email && formik.touched.email
                    ? `form-control input-error`
                    : `form-control`
                }
                type="email"
                autoComplete="off"
                placeholder="Enter your email address"
                onChange={formik.handleChange}
                value={formik.values.email}
                onBlur={formik.handleBlur}
              />
              {formik.errors.email && formik.touched.email ? (
                <div className="text text-danger">{formik.errors.email}</div>
              ) : (
                ""
              )}
            </div>
          </div>
          <div>
            <label for="age">Age</label>
            <div className="w-75">
              <input
                id="age"
                name="age"
                className={
                  formik.errors.age && formik.touched.age
                    ? `form-control input-error`
                    : `form-control`
                }
                type="number"
                autoComplete="off"
                placeholder="Enter age"
                onChange={formik.handleChange}
                value={formik.values.age}
                onBlur={formik.handleBlur}
              />
              {formik.errors.age && formik.touched.age ? (
                <div className="text text-danger">{formik.errors.age}</div>
              ) : (
                ""
              )}
            </div>
          </div>
          <div>
            <label for="">Gender</label>
            <div className="w-75">
              <span>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    id="inlineRadio1"
                    value="male"
                    checked={formik.values.gender === "male"}
                    onChange={formik.handleChange}
                  />
                  <label className="form-check-label" for="male">
                    Male
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    id="female"
                    value="female"
                    checked={formik.values.gender === "female"}
                    onChange={formik.handleChange}
                  />
                  <label className="form-check-label" for="female">
                    Female
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    id="other"
                    value="other"
                    checked={formik.values.gender === "other"}
                    onChange={formik.handleChange}
                  />
                  <label className="form-check-label" for="other">
                    Other
                  </label>
                </div>
              </span>
              {formik.errors.gender && formik.touched.gender ? (
                <div className="text text-danger">{formik.errors.gender}</div>
              ) : (
                ""
              )}
            </div>
          </div>
          <div>
            <label for="jobtitle">Job Title</label>
            <div className="w-75">
              <select
                name="jobtitle"
                id="jobtitle"
                className={
                  formik.errors.jobtitle && formik.touched.jobtitle
                    ? `form-control input-error`
                    : `form-control`
                }
                onChange={formik.handleChange}
                value={formik.values.jobtitle}
                onBlur={formik.handleBlur}
              >
                <option value="">Select One</option>
                <option value="QA">Quality Analyst</option>
                <option value="seo">SEO Executive</option>
                <option value="softwareEngineer">Software Engineer</option>
                <option value="contentwriter">Content Writer</option>
                <option value="graphic">Graphic Designer</option>
              </select>
              {formik.errors.jobtitle && formik.touched.jobtitle ? (
                <div className="text text-danger">{formik.errors.jobtitle}</div>
              ) : (
                ""
              )}
            </div>
          </div>
          <div>
            <label for="password">Password</label>
            <div className="w-75">
              <input
                id="password"
                name="password"
                className={
                  formik.errors.password && formik.touched.password
                    ? `form-control input-error`
                    : `form-control`
                }
                type="password"
                autoComplete="off"
                placeholder="Enter your password"
                onChange={formik.handleChange}
                value={formik.values.password}
                onBlur={formik.handleBlur}
              />
              {formik.errors.password && formik.touched.password ? (
                <div className="text text-danger">{formik.errors.password}</div>
              ) : (
                ""
              )}
            </div>
          </div>
          <div>
            <label for="confirm_password">Confirm Password</label>
            <div className="w-75">
              <input
                id="confirm_password"
                name="confirm_password"
                className={
                  formik.errors.confirm_password && formik.touched.confirm_password
                    ? `form-control input-error`
                    : `form-control`
                }
                type="password"
                autoComplete="off"
                placeholder="Confirm Password"
                onChange={formik.handleChange}
                value={formik.values.confirm_password}
                onBlur={formik.handleBlur}
              />
              {formik.errors.confirm_password && formik.touched.confirm_password ? (
                <div className="text text-danger">
                  {formik.errors.confirm_password}
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
    
          <div className="form-check">
            <section>
              <input
                className="form-check-input"
                type="checkbox"
                id="terms"
                name="terms"
                onChange={formik.handleChange}
                checked={formik.values.terms}
                onBlur={formik.handleBlur}
              />
              <label className="form-check-label ms-3" for="flexCheckDefault">
                I have read and agree to the Terms and Conditions​
              </label>
              {formik.errors.terms && formik.touched.terms ? (
                <div className="ms-3 text text-danger">{formik.errors.terms}</div>
              ) : (
                ""
              )}
            </section>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      );
};