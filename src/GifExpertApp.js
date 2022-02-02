import React from 'react'
import { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export const GifExpertApp = () => {

   const [categories, setCategories] = useState(['Black clover'])


    return (

        <div>
            <h2 className='title'>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            
           


           <ol>
                {
                categories.map((category)=>
                <GifGrid 
                category={category}
                key={category}
                />
                )}
            </ol>


    </div>

        
    )
}
