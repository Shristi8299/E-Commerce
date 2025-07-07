import React from 'react';
import { Card } from 'antd';
const { Meta } = Card;

type PropsItem ={
    item:string
}

export default function Cards(props:PropsItem) {
  return (
    <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
    <Meta title={props.item} description="www.instagram.com" />
  </Card>
  )
}
