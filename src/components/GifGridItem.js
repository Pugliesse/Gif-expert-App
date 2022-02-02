import React from 'react';

const GifGridItem = (props) => {

    console.log(props)
  return (
  <div className='card container'>
     <img src={props.url} alt='img' className='card-img'></img>
     <p>{props.title}</p>
  </div>
  );
};

export default GifGridItem;
