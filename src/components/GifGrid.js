// import React, { useEffect, useState } from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';

export const GifGrid = ({category}) => {

  const {data:images, loading} = useFetchGifs(category)
 
//     getGifs(category)
//     .then(imgs=>{
//       setImages(imgs)
//     })

//    },[category])

  return (
      <>

        <h3 className='centrar'>{category}</h3>

        {loading && <p>loading....</p> }
      
        
        <div className='card-grid'>
          {
            images.map((img=>
            <GifGridItem 
            key={img.id}
              {...img}
            />
            ))
          }
        </div> 

        
    
      </>

  );
};
