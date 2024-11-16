import React from 'react'
import { useLoaderData } from 'react-router-dom'
import NewsCard from './NewsCard';

export default function News() {
    let { data } = useLoaderData();
    console.log(data)
    return (
        <div>
          
            <div>
                {
                  data.map((items , i) => <NewsCard key={i} items={items} ></NewsCard> )
                }
            </div>
        </div>
    )
}
