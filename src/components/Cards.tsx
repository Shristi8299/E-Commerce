import { Card } from "antd";
type PropsItem = {
  imageUrl: string;
  item1: string;
  description1: string;
  price1: number;
};

// export default function Cards(props:PropsItem) {
export default function Cards({
  imageUrl,
  item1,
  description1,
  price1,
}: PropsItem) {
  return (
    <Card
      hoverable
      style={{ width: 250 }}
      cover={<img className="h-60" alt="example" src={imageUrl} />}
    >
      {/* <Meta title={props.item} description="www.instagram.com" /> */}
      <p className="font-bold">{item1}</p>
      <p>{description1}</p>
      <p className="font-black">&#8377;{price1}</p>
    </Card>
  );
}
