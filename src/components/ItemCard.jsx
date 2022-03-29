import {Card, Icon, Image, Rating} from "semantic-ui-react";
import React from "react";


export const ItemCard = ({name, price, img, rating}) => {

  const image = img.replace('//', 'http://');
  const shortName = name.replace(/ \(.*?\)/gm, '').replace('Смартфон', '');
  return (
    <Card>
      <Image src={image} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{shortName}</Card.Header>
      </Card.Content>
      <Card.Content extra>
        {
          (price)
            ? <span><Icon name='rub'/>{price}</span>
            : <span>Нет в наличии</span>
        }
      </Card.Content>
      <Card.Content>
        <Rating icon={"star"} defaultRating={1} maxRating={1} disabled />
        {
          (rating != '0.0')
            ? <span className="product-rating">{rating}</span>
            : <span className="product-rating">Нет отзывов</span>
        }

      </Card.Content>
    </Card>
  );

}