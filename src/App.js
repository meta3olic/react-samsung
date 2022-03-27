import React, { Component } from "react";
import { connect } from "react-redux";
import { setItems } from "./actions/items"
import axios from "axios";

import { Container, Card, Icon, Image } from "semantic-ui-react";
import {ItemCard} from "./components/ItemCard";
import MenuExample from "./components/MenuExample";
import LoaderExample from "./components/Loader";

class App extends React.Component {
  componentDidMount() {
    const { setItems } = this.props;
    axios.get('./items.json')
      .then(( { data } ) => {
        setItems(data);
      });
  }

  render () {
    const { items } = this.props;

    return (
      <Container>
        <MenuExample />
          <Card.Group itemsPerRow={4}>
          {(items.isReady)
            ? items.items.map(item => (
                // <li key={item.id}>{item.name}</li>
                <ItemCard key={item.id} {...item} />
            ))
            : <LoaderExample />
          }
          </Card.Group>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  setItems: items => dispatch(setItems(items))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
