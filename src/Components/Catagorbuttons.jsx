import React, { useEffect, useState } from 'react'
import {  NavLink } from 'react-router-dom'

export default function Catagorbuttons() {
    let [categorys , setCategorys] = useState([])
    
    useEffect(()=>{
        fetch('https://openapi.programming-hero.com/api/news/categories')
        .then((res => res.json()))
        .then(data => setCategorys(data.data.news_category))

    }, [])


    return (
        <div>
            <div className='flex flex-col p-2 gap-3'>
                {
                    categorys.map((cetagory , index)=> <NavLink key={index} to={`/cetagory/${cetagory.category_id}`} className='w-full duration-200 delay-75 px-3 py-1 my-shadow hover:bg-[#e38d80e7]' >{cetagory.category_name}</NavLink>)
                }
            </div>
        </div>
    )
}
