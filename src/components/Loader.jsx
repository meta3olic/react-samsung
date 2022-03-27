import React from "react";
import { Dimmer, Loader, Image, Segment } from "semantic-ui-react";

const LoaderExample = () => (
  <Dimmer active inverted>
    <Loader inverted content='Loading' />
  </Dimmer>
);

export default LoaderExample;