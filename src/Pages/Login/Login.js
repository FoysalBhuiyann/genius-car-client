import React from 'react';
import { Link } from 'react-router-dom';
import login from '../../assets/images/login/login.svg';

const Login = () => {

    const handleLogin = event => {
        event.preventDefault();
    }

    return (
        <div className="hero my-20 w-full ">
            <div className="hero-content gap-10 grid md:grid-cols-2 flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img className='w-3/4' src={login} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-10">
                    <h1 className="text-5xl font-bold text-center">Login</h1>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" name='password' placeholder="password" className="input input-bordered" required/>
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-error bg-orange-600 text-white" type='submit' value='Login' />
                        </div>
                    </form>
                    <p className='text-center'>New to Genius Car<Link className='text-orange-600 font-bold' to='/signup'> Sign Up</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;