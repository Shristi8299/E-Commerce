import React, { useState } from 'react'

export default function Test() {
 const [product , setProduct] = useState([{'name' : 'shristi'}]); 
 setProduct((item)=>{
    console.log(item);
 })
  return (
    <div>Test</div>
  )
}
