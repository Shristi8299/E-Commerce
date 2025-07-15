import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card } from "antd";

interface Product {
  _id: string;
  imageUrl: string;
  item: string;
  description: string;
  price: number;
  section: string;
  createdAt: string;
}
export default function ProductDetails() {
  const { id } = useParams();
  const [apiproduct, setapiproduct] = useState<Product>();
  useEffect(() => {
    let response = axios.get(`http://localhost:3000/products/${id}`);
    response.then((data) => {
      setapiproduct(data.data);
    });
  }, []);
  return (
    <div className="p-4">
      <Card
        hoverable
        style={{ width: 250 }}
        cover={
          <img
            className="h-60"
            alt="example"
            src={`/${apiproduct?.imageUrl}`}
          />
        }
      >
        <p className="font-bold">{apiproduct?.item}</p>
        <p>{apiproduct?.description}</p>
        <p className="font-black">&#8377;{apiproduct?.price}</p>
      </Card>
    </div>
  );
}
