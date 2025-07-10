import Cards from "@/components/Cards";
import { products } from "@/data/products";

export default function Product() {
  return (
    <div className="flex justify-center">
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mx-auto gap-6  py-4">
        {/* {Products.map((data) => { */}
        {products.map(({ imageUrl, item, description, price }) => {
          // return <Cards item={data.item} />;
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
