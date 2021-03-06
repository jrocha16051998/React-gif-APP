import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem'


export const GifGrid = ({category}) => {

    const {data:images, loading} = useFetchGifs( category );
    


  return (
    <>
      <h3 className='card animate__animated animate__bounceInLeft'>{ category }</h3>
      <div  className='card-grid'>
          
          {loading && <p>cargando</p>}
       
           {
               images.map(img =>{
                 return  (<GifGridItem 
                             key={ img.id }
                              {...img}/>)
               })
           }
      
      </div>
    </> 
  )
}



//export default GifGrid 