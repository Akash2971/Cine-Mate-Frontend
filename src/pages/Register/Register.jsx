import React, { useState } from 'react';
import {Redirect} from 'react-router-dom'
const Register = () => {

    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [redirect,setRedirect] = useState(false);
    
    const submit = async (e)=>{
        e.preventDefault();

        const response = await fetch('/api/register',{
            method: 'POST',
            headers: {'Content-type':'application/json'},
            body: JSON.stringify({
                name,email,password
            })

            
        });

        if(response.ok){
            const content = await response.json();
            console.log(content)
    
            setRedirect(true)
        }
        else{
            response.text().then(function (text) {
                // do something with the text response
                alert(text);
              });
        }
       

    }

    if(redirect){
        return <Redirect to="/"></Redirect>
    }

    return ( 
        <>
            <div className="log-container">
                <div className="log-logo">
                    <h1>Cine-Mate</h1>
                </div>
                <div className="log-form-container">
                    <div className="log-form">
                        <form className = "login-form" onSubmit = {submit}>
                        <div className="form-row">
                                <p>Name</p><input className = "log-pass" type = "text" placeholder = "Name" required onChange = {e=>setName(e.target.value)}></input>
                            </div>
                            <div className="form-row">
                                <p>Email</p><input className = "log-email" type = "email" placeholder = "Email Address" required onChange = {e=>setEmail(e.target.value)}></input>
                            </div>
                            <div className="form-row">
                                <p>Password</p><input className = "log-pass" type = "password" placeholder = "Password" required onChange = {e=>setPassword(e.target.value)}></input>
                            </div>
                            <div className="form-row">
                                <p><button className = "login-btn" type = "submit">Register</button></p>
                            </div>
                            <div className="form-row">
                                <p>Already a user? <a href="/">Login</a></p>
                            </div>
                            
                        </form>
                    </div>
                </div>
            </div>
        
        </>
     );
}

 
export default Register;