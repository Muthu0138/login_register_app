import React from 'react'

export default function NavBar() {
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
                        <li><a className="nav-link" href="#" >Login</a></li>
                        <li className="nav-item"><a className="nav-link" >Dashboard</a></li>
                        <li><a className="nav-link" href="#"  >Logout</a></li>
                    </ul>

                </div>
            </nav>
        </>
    )
}
