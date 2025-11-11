import React from 'react'

const Goals = () => {
  const images = ["https://i.pinimg.com/736x/d1/56/63/d156639df5f51933cc7e650961b33dd2.jpg","https://i.pinimg.com/736x/1b/9a/a4/1b9aa4ca7810734640e42be1af232bb0.jpg","https://i.pinimg.com/736x/32/fc/51/32fc51f0d4ebb3b41c0b4248de4fc592.jpg"]
  return (
    <div id='goals'>
      {images.map((image)=>{
return <div className='goalImage'>
           <img src={image}  />
      </div>
      })}
      
    
    </div>
  )
}

export default Goals;
