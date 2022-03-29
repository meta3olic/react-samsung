import React, { Component } from "react";
import axios from "axios";
import { Container, Card, Icon, Image } from "semantic-ui-react";
import { ItemCard } from "./ItemCard";
import MenuExample from "./MenuExample";
import LoaderExample from "./Loader";
import Filter from "../containers/Fiter";

class App extends React.Component {
  componentDidMount() {
    const { setProducts, isReady } = this.props;
    axios.get('./items.json')
      .then(( { data } ) => {
        setProducts(data);
        isReady(true);
      });
  }

  render () {
    const { products, isReady } = this.props.items;

    return (
      <Container>
        <MenuExample />
        <Filter />
        <Card.Group itemsPerRow={4}>
          {(isReady)
            ? products.map(p => (<ItemCard key={p.id} {...p} />))
            : <LoaderExample />
          }
        </Card.Group>
      </Container>
    );
  }
}

export default App;