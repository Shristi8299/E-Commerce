import { Link } from "react-router-dom";
export default function Home() {
  return (
      <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pink-100 to-pink-50 py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
          Fashion Starts Here
        </h1>
        <p className="mt-4 text-gray-600 max-w-xl mx-auto">
          Explore the latest trends in clothing for men, women, and kids. Style that speaks for you.
        </p>
        <Link to="/products">
          <button className="mt-6 bg-pink-600 hover:bg-pink-700 text-white px-6 py-2 rounded-md text-sm font-medium">
            Shop Clothing
          </button>
        </Link>
      </section>

      {/* Featured Clothing */}
      <section className="py-14 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800 mb-8 text-center">Clothing Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { name: "Men's Wear", image: "https://source.unsplash.com/300x300/?men,clothes" },
            { name: "Women's Wear", image: "https://source.unsplash.com/300x300/?women,fashion" },
            { name: "Kids' Wear", image: "https://source.unsplash.com/300x300/?kids,clothing" },
            { name: "Winter Collection", image: "https://source.unsplash.com/300x300/?jacket,clothes" },
          ].map((cat) => (
            <div
              key={cat.name}
              className="bg-white rounded-md shadow-sm hover:shadow-md transition p-3 text-center"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-40 object-cover rounded-md mb-3"
              />
              <h3 className="text-md font-medium text-gray-700">{cat.name}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Clothing Sale Banner */}
      <section className="bg-pink-600 text-white text-center py-10 px-6">
        <h2 className="text-2xl font-semibold">Exclusive Clothing Sale</h2>
        <p className="mt-2 text-sm">Flat 40% OFF on new arrivals. Limited time only!</p>
        <Link to="/products">
          <button className="mt-4 bg-white text-pink-600 hover:bg-gray-100 px-6 py-2 rounded text-sm font-medium">
            View Collection
          </button>
        </Link>
      </section>
    </div>
  );
}
