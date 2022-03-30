import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as cartAction from "../actions/cart";
import ItemCard from "../components/ItemCard";

const mapStateToProps = ({ cart }, { id }) => ({
 addCount: cart.items.reduce(
   (count, product) => count + (product.id === id ? 1 : 0),
   0
 )
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(cartAction, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemCard);