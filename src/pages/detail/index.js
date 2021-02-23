import React from "react";
import { useLocation } from "react-router-dom";

const Detail = () => {
  const {
    state: { data },
  } = useLocation();

  console.log(data);

  return <div>detail</div>;
};

export default Detail;
