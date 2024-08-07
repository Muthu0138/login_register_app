import React, { useEffect, useState } from 'react'
import { UserdataAPI } from '../../services/Api'
import NavBar from '../../components/NavBar/NavBar.jsx'

export default function Dashboard() {
    const[user,setUser] = useState({name:"" , email:"",localId:""})

    useEffect(()=>{
        UserdataAPI().then((res)=>{
            setUser({
                name:res.data.users[0].displayName,
                email:res.data.users[0].email,
                localId:res.data.users[0].localId
            })
        })
    },[])
    return ( 
        <>
            <NavBar/>
            <main role="main" className="container mt-5">
                <div className="container">
                    <div className="text-center mt-5">
                        <h3>Dashboard page</h3>
                        {user.email && user.localId?
                        (<div>
                            <p className="text-bold " >Hi User, your Firebase ID is {user.localId}</p>
                            <p>your email id is {user.email}</p>
                        </div>):<p>loading...</p>
                        }
                    </div>
                </div>
            </main>
        </>
    )
}
