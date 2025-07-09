import Cards from "@/components/Cards";

export default function Carts() {
  return (
    <div className="flex justify-center">
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 py-4">
        <Cards
          item1={"t-shirt"}
          description1={"Roadstar trendy t-shirt"}
          price1={3000}
          imageUrl={"images/product1.jpg"}
        />
        <Cards
          item1={"t-shirt"}
          description1={"Roadstar trendy t-shirt"}
          price1={3000}
          imageUrl={"images/product2.jpg"}
        />
        <Cards
          item1={"t-shirt"}
          description1={"Roadstar trendy t-shirt"}
          price1={3000}
          imageUrl={"images/product3.jpg"}
        />
      </div>
    </div>
  );
}
