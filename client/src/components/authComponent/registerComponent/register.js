import React from "react";
import fetchData from '../../../helpers/fetchData';
function Register() {
    

  async  function registerHandler(e) {
        e.preventDefault();
        let data = {
            uname: e.target.username.value,
            email: e.target.email.value,
            remail: e.target.remail.value,
            password: e.target.password.value,
        }

        const res = await fetchData(`http://localhost:5000/user/auth/register`,data, 'POST');
        const data1 = await res.json();
        console.log(data1);
        return res;
    }

    return (

        <form method="POST" action="/user/auth/register" onSubmit={registerHandler}>
            <h4 className="from-title">Sign up</h4>
            <label htmlFor="username" className="username-label">Your name</label>
            <input type="text" id="username" className="password-input" />
            <br />
            <label htmlFor="email" className="email-label">Your email</label>
            <input type="email" id="email" className="email-input" />
            <br />
            <label htmlFor="re-email" className="remail-label">Confirm your email</label>
            <input type="email" id="remail" className="remail-input" />
            <br />
            <label htmlFor="password" className="password-label">Your password</label>
            <input type="password" id="password" className="password-input" />
            <div className="text-center mt-4">
                <button color="unique" type="submit">Register</button>
            </div>
        </form>

    );
};

export default Register;