import PropTypes from "prop-types";
import React from "react";
import Dot from "../../common/Dot";
// import Flex from "../common/Flex";

const MarketShareItem = ({ color, name, value, totalShare }) => (
  <div className="mb-1 d-flex justify-content-between">
    <div className="align-items-center">
      <Dot style={{ backgroundColor: color }} />
      <span className="font-weight-semi-bold">{name}</span>
    </div>
    <div className="d-xxl-none">{((value * 100) / totalShare).toFixed(0)}%</div>
  </div>
);

MarketShareItem.propsType = {
  color: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  totalShare: PropTypes.number.isRequired,
};

export default MarketShareItem;
