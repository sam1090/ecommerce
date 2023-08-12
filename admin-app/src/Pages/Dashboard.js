import React from "react";

import { BsArrowDownRight, BsArrowUpRight } from "react-icons/bs";
import { Column } from "@ant-design/plots";

let config;

const DemoColumn = () => {
  const data = [
    {
      type: "sbv",
      sales: 43,
    },
    {
      type: "sbv",
      sales: 43,
    },
    {
      type: "sbv",
      sales: 43,
    },
    {
      type: "sbv",
      sales: 43,
    },
    {
      type: "sbv",
      sales: 43,
    },
    {
      type: "sbv",
      sales: 43,
    },
  ];
   config = {
    data,
    xField: "type",
    yField: "sales",
    label: {
      position: "middle",
      style: {
        fill: "#FFFFFF",
        opacity: 0.6,
      },
    },
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    meta: {
      type: {
        alias: 'XYZ',
      },
      sales: {
        alias: 'hello',
      },
    },
  };

  // Rest of your component logic...
};


const Dashboard = () => {
  return (
    <div>
      <h3 className="mb-4"> Dashboard</h3>
      <div className="d-flex justify-content-between align-items-center gap-3">
        <div className="d-flex justify-content-between align-items-end flex-grow-1 bg-white p-3 rounded-3">
          <div>
            <p className=""> Total </p>
            <h4 className="mb-0">$1000</h4>
          </div>
          <div className="d-flex flex-column align-items-end">
            <h6 className="green">
              {" "}
              <BsArrowDownRight /> 32%
            </h6>
            <p className="mb-0">Compared to April 2023</p>
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-end flex-grow-1 bg-white p-3 rounded-3">
          <div>
            <p> Total </p>
            <h4 className="mb-0">$1000</h4>
          </div>
          <div className="d-flex flex-column align-items-end">
            <h6 className="green">
              {" "}
              <BsArrowDownRight /> 32%
            </h6>
            <p className="mb-0">Compared to April 2023</p>
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-end flex-grow-1 bg-white p-3 rounded-3">
          <div>
            <p className=""> Total </p>
            <h4 className="mb-0">$1000</h4>
          </div>
          <div className="d-flex flex-column align-items-end">
            <h6 className="green">
              {" "}
              <BsArrowDownRight /> 32%
            </h6>
            <p className="mb-0">Compared to April 2023</p>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <h3 className="mb-4">
          Income Statics
        </h3>
        <div>
          <Column {...config} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
