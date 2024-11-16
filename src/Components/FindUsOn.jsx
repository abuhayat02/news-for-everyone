import React from 'react'
import { FaInstagram } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { TiSocialFacebook } from 'react-icons/ti'

export default function FindUsOn() {
    return (
        <div className='py-4 '>
            <p className='font-bold text-md py-2' >Find Us On</p>
            <div className='flex flex-col my-shadow p-4 ' >
                <button className='py-2 flex felx-row text-md gap-2 items-center px-3 text-start border w-full' >
                    <div className='text-xl p-1 bg-blue-400 text-white border rounded-full '>
                        <TiSocialFacebook />

                    </div>
                    <p>Facbook</p>
                </button>
                <button className='py-2 flex felx-row text-md gap-2 items-center px-3 text-start border w-full' >
                    <div className='text-xl p-1 my-shadow border rounded-full '>
                        <FaXTwitter />

                    </div>
                    <p>Twitter</p>
                </button>
                <button className='py-2 flex felx-row text-md gap-2 items-center px-3 text-start border w-full' >

                    <div className='text-xl p-1 text-red-800 border rounded-full '>

                        <FaInstagram />
                    </div>
                    <p>Instagram</p>
                </button>

            </div>
        </div>
    )
}
