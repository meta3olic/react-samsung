import React, { Component } from "react";
import { Menu } from "semantic-ui-react";

const MenuExample = () => {
  return (
    <Menu>
      <Menu.Item
        name='browse'
        // active={activeItem === 'browse'}
        // onClick={this.handleItemClick}
      >
        Магазин
      </Menu.Item>

      <Menu.Menu position='right'>
        <Menu.Item
          name='signup'
          // active={activeItem === 'signup'}
          // onClick={this.handleItemClick}
        >
          Итого&nbsp;<b>0</b>&nbsp;руб.
        </Menu.Item>

        <Menu.Item
          name='help'
          // active={activeItem === 'help'}
          // onClick={this.handleItemClick}
        >
          Корзина
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
};

export default MenuExample;
