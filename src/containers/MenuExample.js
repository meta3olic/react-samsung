import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as cartAction from "../actions/cart";
import MenuExample from "../components/MenuExample";
import uniqBy from "lodash/uniqBy";

const mapStateToProps = ({ cart }) => ({
  totalPrice: cart.items.reduce((total, item) => total + Number(item.price), 0),
  count: cart.items.length,
  items: uniqBy(cart.items, o => o.id)
});
const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(cartAction, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(MenuExample);