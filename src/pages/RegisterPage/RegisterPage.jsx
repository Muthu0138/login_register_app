import React, { useState } from 'react';
import "../RegisterPage/RegisterPage.css"
import { RegisterApi } from '../../services/Api';
import { storeUserData } from '../../services/Storage';
import { isAuth } from '../../services/Auth';
import { Navigate } from 'react-router-dom';


export default function RegisterPage() {
   const intialStateErrors = {
      name: { required: false },
      email: { required: false },
      password: { required: false },
      custom_error: null
   };

   const [error, setError] = useState(intialStateErrors);
   const [loading, setLoading] = useState(false);
   const [inputs, setInputs] = useState({
      name: "",
      email: "",
      password: ""
   });

   const handleSubmit = (event) => {
      event.preventDefault();
      let errors = intialStateErrors;
      let hasError = false;

      if (inputs.name === "") {
         errors.name.required = true;
         hasError = true;
      }
      if (inputs.email === "") {
         errors.email.required = true;
         hasError = true;
      }
      if (inputs.password === "") {
         errors.password.required = true;
         hasError = true;
      }

      if (!hasError) {
         setLoading(true);
         RegisterApi(inputs).then((res) => {
            console.log(res)
            storeUserData(res.data.idToken)
         }).catch((err) => {
            console.log(err)
            if(err.response.data.error.message == "EMAIL_EXISTS"){
               setError({...errors , custom_error : "This email has already been registered"})
            }
         }).finally(() => {
            setLoading(false);
         });
      }

      setError(errors);
   };

   const handleInputs = (event) => {
      setInputs({ ...inputs, [event.target.name]: event.target.value });
   };

   if (isAuth()){
       <Navigate to ="/dashboard"/>
   }
   

   return (
      <>
         <section className="register-block">
            <div className="container">
               <div className="row">
                  <div className="col register-sec">
                     <h2 className="text-center">Register Now</h2>
                     <form onSubmit={handleSubmit} className="register-form">
                        <div className="form-group">
                           <label htmlFor="name" className="text-uppercase">Name</label>
                           <input type="text" className="form-control" onChange={handleInputs} name="name" id="name" />
                           {error.name.required && (
                              <span className="text-danger">
                                 Name is required.
                              </span>
                           )}
                        </div>
                        <div className="form-group">
                           <label htmlFor="email" className="text-uppercase">Email</label>
                           <input type="email" className="form-control" onChange={handleInputs} name="email" id="email" />
                           {error.email.required && (
                              <span className="text-danger">
                                 Email is required.
                              </span>
                           )}
                        </div>
                        <div className="form-group">
                           <label htmlFor="password" className="text-uppercase">Password</label>
                           <input className="form-control" type="password" onChange={handleInputs} name="password" id="password" />
                           {error.password.required && (
                              <span className="text-danger">
                                 Password is required.
                              </span>
                           )}
                        </div>
                        <div className="form-group">
                           {error.custom_error && (
                              <span className="text-danger">
                                 <p>{error.custom_error}</p>
                              </span>
                           )}
                           {loading && (
                              <div className="text-center">
                                 <div className="spinner-border text-primary" role="status">
                                    <span className="sr-only">Loading...</span>
                                 </div>
                              </div>
                           )}
                           <input type="submit" className="btn btn-login float-right" disabled={loading} value="Register" />
                        </div>
                        <div className="clearfix"></div>
                        <div className="form-group">
                           Already have an account? Please <a href="#">Login</a>
                        </div>
                     </form>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
}
