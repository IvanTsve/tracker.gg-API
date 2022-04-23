import React from "react";
import fetchData from '../../../helpers/fetchData';
import {  useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();
    

  async function loginHandler(e) {

        e.preventDefault();
        let data = {
            email: e.target.email.value,
            password: e.target.password.value,
        }
       const res = await fetchData(`http://localhost:5000/user/auth/login`,data, 'POST');
       const data1 = await res.json()
       console.log(res);
       console.log(data1);
       localStorage.setItem('uid', JSON.stringify(res._id));
       navigate(
           {
               pathname: '/user',
               data: e.target.email.value
           }
       );
       
       return res;
    }

    return (

        <form method="POST" action="/user/auth/register" onSubmit={loginHandler}>
            <h4 className="from-title">Sign in</h4>
            
            <label htmlFor="email" className="email-label">Your email</label>
            <input type="email" id="email" className="email-input" />
            <br />
            <label htmlFor="password" className="password-label">Your password</label>
            <input type="password" id="password" className="password-input" />
            <div className="text-center mt-4">
                <button color="unique" type="submit">Login</button>
            </div>
        </form>

    );
};

export default Login;