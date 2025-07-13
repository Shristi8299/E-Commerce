import React from "react";
import { Carousel } from "antd";
import Cards from "../components/Cards";

const contentStyle: React.CSSProperties = {
  height: "400px",
  color: "#fff",
  lineHeight: "700px",
  textAlign: "center",
  background: "#a7abb7",
};

export default function Home() {
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
      <h1 className="text-3xl text-red-600 font-bold text-center py-2 animate-marquee">
        Trendings
      </h1>
      <div className="flex justify-center">
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
          <Cards
            item1={"Tshirt"}
            description1={"Regular cotton t-shirt"}
            price1={1000}
            imageUrl={"images/product1.jpg"}
          />
          <Cards
            item1={"Tshirt"}
            description1={"Regular cotton t-shirt"}
            price1={1000}
            imageUrl={"images/product2.jpg"}
          />
          <Cards
            item1={"Tshirt"}
            description1={"Regular cotton t-shirt"}
            price1={1000}
            imageUrl={"images/product3.jpg"}
          />
        </div>
      </div>
      <h1 className="text-3xl text-red-600 font-bold text-center py-2 animate-marquee ">
        New Arrivals
      </h1>
      <div className="flex justify-center">
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 py-2">
          <Cards
            item1={"Tshirt"}
            description1={"Regular cotton t-shirt"}
            price1={1000}
            imageUrl={"images/product4.jpg"}
          />
          <Cards
            item1={"Tshirt"}
            description1={"Regular cotton t-shirt"}
            price1={1000}
            imageUrl={"images/product5.jpg"}
          />
          <Cards
            item1={"Tshirt"}
            description1={"Regular cotton t-shirt"}
            price1={1000}
            imageUrl={"images/product6.jpg"}
          />
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
