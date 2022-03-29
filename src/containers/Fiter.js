import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as filterAction from "../actions/filter";
import Filter from "../components/Filter";

const mapStateToProps = ({ items }) => ({
  filterBy: items.filterBy
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(filterAction, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);