import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as itemsAction from "../actions/items";
import App from "../components/App";
import orderBy from "lodash/orderBy";

const sortBy = (products, sort) => {
  switch (sort) {
    case 'stock':
      return products.filter(i => i.price);
    case 'rating':
      return orderBy(products.filter(i => i.price), 'rating', 'desc');
    case 'price_high':
      return orderBy(
        products
          .filter(i => i.price)
          .map(i => {return {...i, price: Number(i.price)}}),
        'price',
        'desc'
      );
    case 'price_low':
      return orderBy(
        products
          .filter(i => i.price)
          .map(i => {return {...i, price: Number(i.price)}}),
        'price',
        'asc'
      );
    default:
      return products;
  }
}

const searchBy = (products, query) => {
  return products.filter(
    i =>
      i.name.toLowerCase().indexOf(query.toLowerCase()) >= 0
  );
}

const filterItems = (products, sort, query) => sortBy(searchBy(products, query), sort);

const mapStateToProps = ({items, filter}) => ({
  items: {
    ...items,
    products: items.products && filterItems(items.products, filter.filterBy, filter.searchQuery)
  }
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(itemsAction, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);