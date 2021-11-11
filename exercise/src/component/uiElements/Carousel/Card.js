import React from "react";
import PropTypes from "prop-types";
import { Card as CardWrapper, CardInner } from "./styles";
import { Heading, Text } from "../Common";

const Card = (props) => {
  const {
    item: { id, heading, details },
  } = props;

  return (
    <CardWrapper>
      <CardInner>
        <Heading fontSize={1.2}>
          {heading} #{id}
        </Heading>
        <br />
        <Text fontSize={1}>{details}</Text>
      </CardInner>
    </CardWrapper>
  );
};

Card.prototype = {
  id: PropTypes.number.isRequired,
  heading: PropTypes.string.isRequired,
  details: PropTypes.string.isRequired,
};

export default Card;
