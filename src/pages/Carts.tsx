import Cards from "@/components/Cards";
import type Product from "./Product";
import { useEffect, useState } from "react";
import axios from "axios";

interface Product {
  _id: string;
  imageUrl: string;
  item: string;
  description: string;
  price: number;
  section: string;
  createdAt: string; 
  
}
export default function Carts() {
  const [apiproduct , setapiproduct] = useState<Product[]>();
  useEffect(()=>{
  const response = axios.get('http://localhost:3000/products');
  response.then((data)=>{
    setapiproduct(data.data);
  })
  },[])
  console.log(apiproduct);

  return (
    <div className="flex justify-center">
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 py-4">
        {apiproduct?.map(({ imageUrl, item, description, price }) => {
                    return (
                      <Cards
                        imageUrl={imageUrl}
                        item1={item}
                        description1={description}
                        price1={price}
                      />
                    );
                })}
      </div>
    </div>
  );
}
