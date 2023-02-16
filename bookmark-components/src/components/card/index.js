
import React from "react";
import PropTypes from "prop-types";
import { CustomCard, CustomCardBody } from "./styles";

const borderRadius = {
  borderRadius0: "0",
  borderRadius1: "4px",
  borderRadius2: "8px",
  borderRadius3: "16px",
};

const CardComponent = ({ radius }) => (
  <CustomCard
    className='panelcard'
    hoverable
    radius={radius}
    bodyStyle={CustomCardBody}
  >

  </CustomCard>
);

CardComponent.defaultProps = {
  radius: borderRadius["borderRadius1"],
};

CardComponent.propTypes = {
  radius: PropTypes.string,
};

export default CardComponent;
