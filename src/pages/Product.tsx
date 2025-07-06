import { useState } from "react";

const dummyProducts = [
  {
    id: 1,
    name: "Casual T-Shirt",
    price: "$24.99",
    image: "https://via.placeholder.com/200x250?text=Casual+Tee",
  },
  {
    id: 2,
    name: "Denim Jacket",
    price: "$59.99",
    image: "https://via.placeholder.com/200x250?text=Denim+Jacket",
  },
  {
    id: 3,
    name: "Summer Dress",
    price: "$39.99",
    image: "https://via.placeholder.com/200x250?text=Summer+Dress",
  },
  {
    id: 4,
    name: "Hoodie",
    price: "$44.99",
    image: "https://via.placeholder.com/200x250?text=Hoodie",
  },
];

export default function Products() {
  const [products] = useState(dummyProducts);

  return (
    <div className="min-h-screen bg-pink-50 py-10 px-4">
      <h2 className="text-3xl font-bold text-center text-pink-600 mb-8">Our Products</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-md rounded-lg overflow-hidden transition transform hover:-translate-y-1 hover:shadow-lg"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
              <p className="text-pink-600 font-medium mt-1">{product.price}</p>
              <button className="mt-4 w-full bg-pink-600 text-white py-2 rounded hover:bg-pink-700 transition duration-200 text-sm">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
