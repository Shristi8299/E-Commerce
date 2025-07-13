import React, { useEffect, useState } from "react";
import { Carousel } from "antd";
import Cards from "../components/Cards";
// import { products} from "@/data/products";
import axios from "axios";
import type Product from "./Product";

const contentStyle: React.CSSProperties = {
  height: "400px",
  color: "#fff",
  lineHeight: "700px",
  textAlign: "center",
  background: "#a7abb7",
};

interface Product {
  _id: string;
  imageUrl: string;
  item: string;
  description: string;
  price: number;
  section: string;
  createdAt: string; 
  
}

export default function Home() {
  const [apiproduct , setapiproduct] = useState<Product[]>();
    useEffect(()=>{
      const response = axios.get('http://localhost:3000/products');
      response.then((data)=>{
        setapiproduct(data.data);
      })
    },[]) 

  const arr = [
    {
      imgUrl: "images/photo1.jpg",
    },
    {
      imgUrl: "images/photo2.jpg",
    },
    { imgUrl: "images/photo3.jpg" },
  ];
  return (
    // hero section
    <div className=" min-h-screen">
      <Carousel autoplay>
        {arr.map((item) => (
          <div className="relative">
            <img
              style={contentStyle}
              src={item.imgUrl}
              alt=""
              className="w-full h-[650px] object-fill"
            />
          </div>
        ))}
      </Carousel>
      {/* <button className=' flex justify-center border-1 hover:shadow-gray-500 text-center rounded-sm p-2'>Shop Now</button> */}

      {/* cards*/}
      <h1 className="text-3xl text-red-600 font-bold text-center py-2">
        Trendings
      </h1>
      <div className="flex justify-center">
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
           {
            apiproduct?.map((item)=>{

               if(item.section == "trendings"){
                  return (
                <>
                <Cards imageUrl={item.imageUrl} item1={item.item} description1={item.description} price1={item.price} />
                </>
               )
               }
            })
          }
        </div>
      </div>
      <h1 className="text-3xl text-red-600 font-bold text-center py-2  ">
        New Arrivals
      </h1>
       <div className="flex justify-center">
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 py-2">
          {
            apiproduct?.map((item)=>{
               if(item.section == "newarrivals"){
                  return (
                <>
                <Cards imageUrl={item.imageUrl} item1={item.item} description1={item.description} price1={item.price} />
                </>
               )
               }
            })
          }
        </div>
      </div>
      <div className=" fixed top-0 left-36 bg-black opacity-70 h-screen w-screen">
        <ul>
          <li className="">about</li>
        </ul>
      </div>
    </div>
  );
}

