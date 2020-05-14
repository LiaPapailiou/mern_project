import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'

function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const { email, password } = formData;

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log('Success!')
    }


    return (
        <Fragment>
            <h1 className="large text-primary">Sign In</h1>
            <p className="lead">
                <i className="fas fa-user"></i>
                 Sign Into Your Account
            </p>
            <form className="form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <input
                        type="email"
                        placeholder="Email Address"
                        name="email"
                        value={email}
                        onChange={handleChange}
                        required />
                </div>
                <div className="form-group">
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        minLength="6"
                        value={password}
                        onChange={handleChange}
                        required />
                </div>
                <input
                    type="submit"
                    className="btn btn-primary"
                    value="Login" />
            </form>
            <p className="my-1">
                Don't have an account? <Link to="/login">Sign Up</Link>
            </p>
        </Fragment>
    )
}

export default Login
