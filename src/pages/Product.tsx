import Cards from "@/components/Cards";

export default function Product() {
  const Products = [
    {
      item: "T-shirst",
    },
    {
      item: "Shirt",
    },
    {
      item: "Jeans",
    },
  ];
  return (
    <div className="flex gap-2 px-4 flex-wrap flex-1">
     {
      Products.map((data)=>{
        return (
          <Cards item={data.item} />
        )
      })
     }
    </div>
  );
}
