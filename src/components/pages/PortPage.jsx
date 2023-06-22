import React from "react";
import Contents from "../layout/Contents";
import ContTitle from "../layout/ContTitle";
import PortCont from "../port/PortCont.jsx";

const PortPage = () => {
  return (
    <Contents>
      <ContTitle title="portfolio" />
      <PortCont />
    </Contents>
  );
};

export default PortPage;
