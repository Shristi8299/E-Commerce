import Cards from "@/components/Cards";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

interface Product {
  _id: string;
  imageUrl: string;
  item: string;
  description: string;
  price: number;
  section: string;
  createdAt: string;
}

interface ProductProps {
  searchTerm: string;
  addToCart:any
}


export default function Product({ searchTerm , addToCart }:ProductProps) {
  const [apiproduct, setapiproduct] = useState<Product[]>([]);

  useEffect(() => {
    axios.get("http://localhost:3000/products").then((res) => {
      setapiproduct(res.data);
    });
  }, []);

  const filterSearchProduct = apiproduct.filter((product) =>
    product.item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mx-auto gap-6 py-4">
        {filterSearchProduct.map((item) => (
          <Link key={item._id} to={`/products/${item._id}`}>
            <Cards
              imageUrl={item.imageUrl}
              item1={item.item}
              description1={item.description}
              price1={item.price}
              handleClick={()=>addToCart(item)}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
