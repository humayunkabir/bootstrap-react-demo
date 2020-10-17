import { Card, CardBody } from "bootstrap-react";
import ReactEchartsCore from "echarts-for-react/lib/core";
import "echarts/lib/chart/pie";
import echarts from "echarts/lib/echarts";
import PropTypes from "prop-types";
import React from "react";
import {
  getGrays,
  getPosition,
  isIterableArray,
  numberFormatter,
} from "../../helpers/utils";
import MarketShareItem from "./MarketShareItem";
// import AppContext from '../../context/Context';

const getOption = (data) => {
  const grays = getGrays(false);
  return {
    color: data.map((d) => d.color),
    tooltip: {
      trigger: "item",
      padding: [7, 10],
      backgroundColor: grays.white,
      textStyle: { color: grays.black },
      transitionDuration: 0,
      borderColor: grays["300"],
      borderWidth: 1,
      formatter: function (params) {
        return `<strong>${params.data.name}:</strong> ${params.percent}%`;
      },
    },
    position(pos, params, dom, rect, size) {
      return getPosition(pos, params, dom, rect, size);
    },
    legend: { show: false },
    series: [
      {
        type: "pie",
        radius: ["100%", "87%"],
        avoidLabelOverlap: false,
        hoverAnimation: false,
        itemStyle: {
          borderWidth: 2,
          borderColor: false ? "#0E1C2F" : "#fff",
        },
        labelLine: { normal: { show: false } },
        data: data,
      },
    ],
  };
};

const MarketShare = ({ data }) => {
  // const { isDark } = useContext(AppContext);
  const totalShare = data
    .map((d) => d.value)
    .reduce((total, currentValue) => total + currentValue, 0);
  return (
    <Card utilities="h-md-100">
      <CardBody>
        <div className="row g-0 h-100 justify-content-between">
          <div className="col-sm-6 col-xs-5 col-xxl pr-2">
            <h6 className="mt-1">Market Share</h6>
            <div className="fs--2 mt-3">
              {isIterableArray(data) &&
                data.map(({ id, ...rest }) => (
                  <MarketShareItem {...rest} totalShare={totalShare} key={id} />
                ))}
            </div>
          </div>
          <div className="col-auto">
            <div className="position-relative">
              <ReactEchartsCore
                echarts={echarts}
                option={getOption(data)}
                style={{ width: "6.625rem", height: "6.625rem" }}
              />
              <div className="position-absolute top-50 left-50 translate-middle font-weight-medium text-dark fs-2">
                {numberFormatter(totalShare, 0)}
              </div>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

MarketShare.propTypes = { data: PropTypes.array.isRequired };

export default MarketShare;
