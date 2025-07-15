import React, { useEffect, useState } from "react";
import { Carousel } from "antd";
import Cards from "../components/Cards";
// import { products} from "@/data/products";
import axios from "axios";
import type Product from "./Product";
import { Link } from "react-router-dom";

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
  const [apiproduct, setapiproduct] = useState<Product[]>();
  // I added this to seperate the two sections trending and newarrival , take a look and try to understand it
  const sections = [
    { title: "Trendings", key: "trendings" },
    { title: "New Arrivals", key: "newarrivals" },
  ];

  useEffect(() => {
    const response = axios.get("http://localhost:3000/products");
    response.then((data) => {
      setapiproduct(data.data);
    });
  }, []);

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

      {/* try to figure out how I combined it  */}
      {sections.map((section) => {
        //i added this to filter it by checking if the section key which is here "trending" matches to the item.section means from the database item.section
        const filteredProducts = apiproduct?.filter(
          (item) => item.section === section.key
        );
        if (!filteredProducts || filteredProducts.length === 0) return null;

        // here i added this return keyword after adding the curly brackets in the callback function in map
        return (
          <div key={section.key}>
            <h1 className="text-3xl text-red-600 font-bold text-center py-2">
              {section.title}
            </h1>
            <div className="flex justify-center">
              <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 py-2">
                {apiproduct
                  ?.filter((item) => item.section === section.key)
                  .map((item) => (
                    <Link to={`/products/${item._id}`} key={item._id}>
                      <Cards
                        imageUrl={item.imageUrl}
                        item1={item.item}
                        description1={item.description}
                        price1={item.price}
                        handleClick={() => console.log("item added to cart")}
                      />
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
