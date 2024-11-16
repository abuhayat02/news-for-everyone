import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { DataInfo } from './Authentications/DataProvider';

export default function SignIn() {

    let { emailPassSignIn } = useContext(DataInfo)
    let navigete = useNavigate()

    let hendelSignInEmailPass = (e) => {
        e.preventDefault();
        let email = e.target.email.value;
        let pass = e.target.password.value;
        emailPassSignIn(email, pass)
            .then(data => console.log(data.user));
        navigete('/')



    }


    return (
        <div className="  container mx-auto  min-h-screen">
            <div className="hero-content ">

                <div className="card bg-base-100 my-shadow w-full max-w-sm shrink-0  rounded-none">
                    <h1 className='font-bold text-center text-md md:text-2xl py-4' >Login your account</h1>

                    <form onSubmit={hendelSignInEmailPass} className="px-8 py-10">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input  rounded-none input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input  rounded-none input-bordered" required />
                            <label className="label">
                                <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="py-2 rounded-none bg-slate-600 ">Login</button>
                        </div>
                        <p className='text-xs text-center py-3 text-gray-600'>Dont’t Have An Account ? <Link to={'/authentications/register'} className='text-red-500 font-bold' > Register</Link></p>
                    </form>
                </div>
            </div>
        </div>
    )
}
