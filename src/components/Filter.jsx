import React  from "react";
import { Input, Menu } from "semantic-ui-react";

const Filter = ({ setFilter, filterBy }) => (
  <Menu secondary>
    <Menu.Item
      active={filterBy === 'all'}
      onClick={setFilter.bind(this, 'all')}
    >
      Все
    </Menu.Item>

    <Menu.Item
      active={filterBy === 'stock'}
      onClick={setFilter.bind(this, 'stock')}
    >
      В наличии
    </Menu.Item>

    <Menu.Item
      active={filterBy === 'rating'}
      onClick={setFilter.bind(this, 'rating')}
    >
      По рейтингу
    </Menu.Item>

    <Menu.Item
      active={filterBy === 'price_high'}
      onClick={setFilter.bind(this, 'price_high')}
    >
      По цене (увелечение)
    </Menu.Item>

    <Menu.Item
      active={filterBy === 'price_low'}
      onClick={setFilter.bind(this, 'price_low')}
    >
      По цене (уменьшение)
    </Menu.Item>
  </Menu>
);



export default Filter;