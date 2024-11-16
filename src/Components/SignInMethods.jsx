import React from 'react'
import { FaGithub, FaGoogle } from 'react-icons/fa'

export default function SignInMethods() {
    return (
        <div className='flex flex-col  p-3 gap-2 border rounded-md my-shadow'>
            <button className='py-2 justify-center flex flex-row items-center gap-2 my-shadow text-center w-full' >
                <FaGoogle />
                <p>Login With Google </p>
            </button>
            <button className=' flex justify-center flex-row items-center gap-2 py-2 my-shadow text-center w-full' >
                <FaGithub />
                <p>Login With Github</p>
            </button>
        </div>
    )
}
