import React from 'react'


const Images = (props)=>{
 console.log(props.conditions);
return(
 <div>
   <img src={`./images/${props.conditions}.png`} alt='' />
 </div>
 )
}

export default Images