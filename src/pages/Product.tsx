import Cards from "@/components/Cards";

export default function Product() {
  const Products = [
    {
      imageUrl: "images/product1.jpg",
      item: "T-shirst",
      description: "Men Slim Casual T-Shirt",
      price: 2000,
    },
    {
      imageUrl: "images/product2.jpg",
      item: "Shirt",
      description: "Regular Fit Roadster Shrirt",
      price: 2000,
    },
    {
      imageUrl: "images/product3.jpg",
      item: "Jeans",
      description: "Men Straight fit jeans",
      price: 2000,
    },
    {
      imageUrl: "images/product4.jpg",
      item: "Kurta",
      description: "Floral Printed Cotton Kurta",
      price: 2000,
    },
    {
      imageUrl: "images/product5.jpg",
      item: "Top",
      description: "Printed Pure Cottom Top",
      price: 2000,
    },
    {
      imageUrl: "images/product6.jpg",
      item: "Top",
      description: "Printed Pure Cottom Top",
      price: 2000,
    },
  ];
  return (
    <div className="flex justify-center">
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mx-auto gap-6  py-4">
        {/* {Products.map((data) => { */}
        {Products.map(({ imageUrl, item, description, price }) => {
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
