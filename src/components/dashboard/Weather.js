import { Card, CardBody } from "bootstrap-react";
import PropTypes from "prop-types";
import React from "react";
import weatherIcon from "../../assets/img/icons/weather-icon.png";
import FalconCardHeader from "../../common/FalconCardHeader";
import CardDropdown from "./CardDropdown";

const Weather = ({
  data: {
    city,
    condition,
    precipitation,
    temperature,
    highestTemperature,
    lowestTemperature,
  },
  ...rest
}) => (
  <Card {...rest}>
    <FalconCardHeader
      title="Weather"
      light={false}
      titleTag="h6"
      className="pb-0">
      <CardDropdown />
    </FalconCardHeader>
    <CardBody className="pt-2">
      <div className="row h-100 align-items-center no-gutters">
        <div className="col">
          <div className="d-flex align-items-center">
            <img className="mr-3" src={weatherIcon} alt="" height="60" />
            <div className="flex-grow-1">
              <h6 className="mb-2">{city}</h6>
              <div className="fs--2 font-weight-semi-bold">
                <div className="text-warning">{condition}</div>
                Precipitation: {precipitation}
              </div>
            </div>
          </div>
        </div>
        <div className="col-auto text-center pl-2">
          <div className="fs-4 font-weight-normal text-sans-serif text-primary mb-1 line-height-1">
            {temperature}°
          </div>
          <div className="fs--1 text-800">
            {highestTemperature}° / {lowestTemperature}°
          </div>
        </div>
      </div>
    </CardBody>
  </Card>
);

Weather.propTypes = {
  data: PropTypes.object.isRequired,
  className: PropTypes.string,
};

export default Weather;
