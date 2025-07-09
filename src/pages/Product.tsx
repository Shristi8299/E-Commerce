import Cards from "@/components/Cards";
import { products } from "@/data/products";

export default function Product() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="">Trending</h1>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mx-auto gap-6  py-4">
        {products.map(({ imageUrl, item, description, price, section }) => {
          if (section === "trending")
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
      <h1>New Arrivals</h1>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mx-auto gap-6  py-4">
        {products.map(({ imageUrl, item, description, price, section }) => {
          if (section === "newArrival")
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
