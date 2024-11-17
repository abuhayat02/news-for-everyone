import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { DataInfo } from './Authentications/DataProvider'

export default function Register() {
    let navigete = useNavigate()
    let {newUserWithEmailPass , updateUser , user , setUser} = useContext(DataInfo);
    let hendelRegister = (e)=>{
        e.preventDefault();
        let email = e.target.email.value;
        let password = e.target.pass.value;
        let userName = e.target.name.value;
        let photo = e.target.url.value;
     
        newUserWithEmailPass(email , password)
        .then(data => {
            updateUser({displayName : userName , photoURL : photo})
            navigete('/')
          
        })
    
    }
    return (
        <div className="  container mx-auto  min-h-screen">
            <div className="hero-content ">

                <div className="card bg-base-100 my-shadow w-full max-w-sm shrink-0  rounded-none">
                    <h1 className='font-bold text-center text-md md:text-2xl py-4' >Register your account</h1>

                    <form onSubmit={hendelRegister} className="px-8 py-10">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="name" placeholder="Name" name='name' className="input  rounded-none input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo Url</span>
                            </label>
                            <input type="name" name='url' placeholder="Photo url" className="input  rounded-none input-bordered" required />
                        </div>
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
                            <input type="password" name='pass' placeholder="password" className="input  rounded-none input-bordered" required />
                            <label className="label">
                                <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="py-2 rounded-none bg-slate-600 ">Register</button>
                        </div>
                        <p className='text-xs text-center py-3 text-gray-600'> Have An Account ? <Link to={'/authentications/sign-in'} className='text-red-500 font-bold' > Login</Link></p>
                    </form>
                </div>
            </div>
        </div>
    )
}
