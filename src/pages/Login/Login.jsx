import React from 'react'
import '../Login/Login.css'
import { useState } from 'react';
import { LoginApi } from '../../services/Api';
import { storeUserData } from '../../services/Storage';
import { isAuth } from '../../services/Auth';
import { Link, Navigate } from 'react-router-dom';


export default function Login() {

    const intialStateErrors = {
        email: { required: false },
        password: { required: false },
        custom_error: null
     };

     const [error, setError] = useState(intialStateErrors);
     const [loading, setLoading] = useState(false);

     const [inputs, setInputs] = useState({
        email: "",
        password: ""
     });

     const handleSubmit = (event) => {
        event.preventDefault();
        let errors = intialStateErrors;
        let hasError = false;

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
           LoginApi(inputs).then((res) => {
              console.log(res)
              storeUserData(res.data.idToken)
           }).catch((err) => {
              console.log(err)
               if(err.response.data.error.message =="INVALID_LOGIN_CREDENTIALS"){
                setError({...errors , custom_error : "INVALID_LOGIN_CREDENTIALS"})
               }
           }).finally(() => {
              setLoading(false);
           });
        }
  
        setError({...errors});
     };

     const handleInputs = (event) => {
        setInputs({ ...inputs, [event.target.name]: event.target.value });
     };

     if (isAuth()){
       return <Navigate to ="/dashboard"/>
    }


  return (
    <>
        <section className="login-block">
            <div className="container">
                <div className="row ">
                    <div className="col login-sec">
                        <h2 className="text-center">Login Now</h2>
                        <form onSubmit={handleSubmit} className="login-form" action="">
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1" className="text-uppercase">Email</label>
                            <input type="email"  className="form-control" name="email"  onChange={handleInputs} id="email" placeholder="email" />
                            {error.email.required && (
                              <span className="text-danger">
                                 Email is required.
                              </span>
                           )}
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1" className="text-uppercase">Password</label>
                            <input className="form-control" type="password"  name="password" onChange={handleInputs} placeholder="password" id="" />
                            {error.password.required && (
                              <span className="text-danger">
                                 Password is required.
                              </span>
                           )}
                        </div>
                        <div className="form-group">
                        {loading && (
                              <div className="text-center">
                                 <div className="spinner-border text-primary" role="status">
                                    <span className="sr-only">Loading...</span>
                                 </div>
                              </div>
                           )}
                            {error.custom_error && (
                              <span className="text-danger">
                                 <p>{error.custom_error}</p>
                              </span>
                           )}
                            <input  type="submit" className="btn btn-login float-right"  value="Login"/>
                        </div>
                        <div className="clearfix"></div>
                        <div className="form-group">
                        Create new account ? Please <Link to="/register">Register</Link>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
       
    </>
  )
}
