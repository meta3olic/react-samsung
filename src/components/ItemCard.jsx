import {Card, Icon, Image, Rating, Button, List} from "semantic-ui-react";
import React from "react";

const ItemCard = product => {
  const {name, price, img, rating, addToCart, addCount} = product

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
      {
        (price)
          ? <Button onClick={addToCart.bind(this, product)}>
              Добавить в корзину {addCount > 0 && `(${addCount})`}
            </Button>
          : <Button disabled={true}>Товар отсутствует</Button>
      }
    </Card>
  );
}

export default ItemCard;