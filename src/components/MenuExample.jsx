import React, { Component } from "react";
import { Menu, Button, Image, List, Popup } from "semantic-ui-react";
import {removeFromCart} from "../actions/cart";

const CartComponent = ({name, id, img, removeFromCart}) => (
  <List divided selection verticalAlign='middle'>
    <List.Item>
      <List.Content floated='right'>
        <Button onClick={removeFromCart.bind(this, id)}>Удалить</Button>
      </List.Content>
      <Image avatar src={img.replace('//', 'http://')} />
      <List.Content>{name.replace(/ \(.*?\)/gm, '').replace('Смартфон', '')}</List.Content>
    </List.Item>
  </List>
);

const MenuExample = ({ totalPrice, count, items }) => (
  <Menu>
    <Menu.Item name='browse'>
      Магазин
    </Menu.Item>

    <Menu.Menu position='right'>
      <Menu.Item name='signup'>
        Итого&nbsp;<b>{totalPrice}</b>&nbsp;руб.
      </Menu.Item>

      <Popup
        trigger={
          <Menu.Item name='help'>
            Корзина&nbsp;(<b>{count}</b>)
          </Menu.Item>
        }
        content={items.map((p, i) => <CartComponent {...p} key={i}/>)}
        on="click"
        hideOnScroll
      />
    </Menu.Menu>
  </Menu>
);

export default MenuExample;
