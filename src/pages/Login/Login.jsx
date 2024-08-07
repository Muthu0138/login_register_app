import React from 'react'
import '../Login/Login.css'

export default function Login() {
  return (
    <>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <a className="navbar-brand" href="#">JVLcode</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                <ul className="navbar-nav mr-auto"  >
                    <li className="nav-item"><a className="nav-link" >Register</a></li>
                    <li><a className="nav-link" href="javascript:void(0);" >Login</a></li>
                    <li className="nav-item"><a className="nav-link" >Dashboard</a></li>
                    <li><a className="nav-link" href="javascript:void(0);"  >Logout</a></li>
                </ul>
            </div>
        </nav>
      
        <section className="login-block">
            <div className="container">
                <div className="row ">
                    <div className="col login-sec">
                        <h2 className="text-center">Login Now</h2>
                        <form className="login-form" action="">
                        <div className="form-group">
                            <label for="exampleInputEmail1" className="text-uppercase">Email</label>
                            <input type="email"  className="form-control" name="email"  id="" placeholder="email" />
                            <span className="text-danger" >
                                Email is required.
                            </span>
                        </div>
                        <div className="form-group">
                            <label for="exampleInputPassword1" className="text-uppercase">Password</label>
                            <input className="form-control" type="password"  name="password" placeholder="password" id="" />
                            <span className="text-danger" >
                                Password is required.
                            </span>
                        </div>
                        <div className="form-group">
                            <div  className="text-center">
                                <div className="spinner-border text-primary " role="status">
                                <span className="sr-only">Loading...</span>
                                </div>
                            </div>
                            <span className="text-danger" >
                            <p>Custom Error Message!</p>
                            </span>
                            <input  type="submit" className="btn btn-login float-right"  value="Login"/>
                        </div>
                        <div className="clearfix"></div>
                        <div className="form-group">
                        Create new account ? Please <a  href="javascript:void(0);">Register</a>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
       
    </>
  )
}
