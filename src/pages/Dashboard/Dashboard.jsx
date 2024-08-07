import React from 'react'

export default function Dashboard() {
    return (
        <>
            <nav class="navbar navbar-expand-md navbar-dark bg-dark">
                <a class="navbar-brand" href="#">JVLcode</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarsExampleDefault">
                    <ul class="navbar-nav mr-auto"  >
                        <li class="nav-item"><a class="nav-link" >Register</a></li>
                        <li><a class="nav-link" href="javascript:void(0);" >Login</a></li>
                        <li class="nav-item"><a class="nav-link" >Dashboard</a></li>
                        <li><a class="nav-link" href="javascript:void(0);"  >Logout</a></li>
                    </ul>

                </div>
            </nav>
            <main role="main" class="container mt-5">
                <div class="container">
                    <div class="text-center mt-5">
                        <h3>Dashboard page</h3>
                        <p class="text-bold " >Hi Unnamed user, your Firebase ID is %localID%</p>
                    </div>
                </div>
            </main>
        </>
    )
}
