import React from 'react';
import { Carousel } from "antd";


 const contentStyle: React.CSSProperties = {
  height: '400px',
  color: '#fff',
  lineHeight: '700px',
  textAlign: 'center',
  background: '#a7abb7',
};


export default function Home() {

  return (
    // hero section 
  <div>
   <Carousel autoplay>
    <div>
      <img style={contentStyle} src="images/slide13.jpg" alt="" className="w-full h-[500px] object-contain"/>
    </div>
    <div>
      <img style={contentStyle} src="images/slide2.jpg" alt="" className="w-full h-[500px] object-contain"/>
    </div>
    <div>
     <img style={contentStyle} src="images/slide3.jpg" alt="" className="w-full h-[500px] object-contain"/>
    </div>
    <div>
      <img style={contentStyle} src="images/slide4.jpg" alt=""className="w-full h-[500px] object-contain" />
    </div>
  </Carousel>
     
     <button className=' flex justify-center border-1 hover:shadow-gray-500 text-center rounded-sm p-2'>Shop Now</button>
    </div>
    // hero section closed 
  )
}







