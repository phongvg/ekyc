import React from "react";
import { RadialProgressWidgetData } from "Data/Dashboard/CryptoData";
import { Col, Row } from "reactstrap";
import GreetingCard from "./GreetingCard";
import Transactions from "./Transactions";
import RadialProgressWidget from "./RadialProgressWidget";

const LeftGrid = () => {
  return (
    <Col xxl={3} xl={4} className="box-col-4">
      <Row>
        <Col xl={12} sm={6}>
          <GreetingCard />
        </Col>
      </Row>
    </Col>
  );
};

export default LeftGrid;
