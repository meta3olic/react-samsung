import {Card, Icon, Image, Rating} from "semantic-ui-react";
import React from "react";


export const ItemCard = ({name, price, img, rating}) => {

  const image = img.replace('//', 'http://');

  return (
    <Card>
      <Image src={image} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{name}</Card.Header>
      </Card.Content>
      <Card.Content extra>
        {
          (price)
            ? <span><Icon name='rub'/>{price}</span>
            : <span>Нет в наличии</span>
        }
      </Card.Content>
      <Card.Content>
        <Rating defaultRating={rating} maxRating={5} disabled />
      </Card.Content>
    </Card>
  );

}