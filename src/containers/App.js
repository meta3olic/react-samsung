import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as itemsAction from "../actions/items";
import App from "../components/App";
import orderBy from "lodash/orderBy";

const filterBy = (products, type) => {
  switch (type) {
    case 'all':
      return products;
    case 'stock':
      return products.filter(i => i.price);
    case 'rating':
      return orderBy(products.filter(i => i.price), type, 'desc');
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

const mapStateToProps = ({items}) => ({
  items: {
    ...items,
    products: filterBy(items.products, items.filterBy)
  }
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(itemsAction, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);