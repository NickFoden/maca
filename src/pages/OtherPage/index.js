import React from "react";
import "../pageStyles.scss";

const OtherPage = ({ location }) => {
  return (
    <div className="menu_page_container">
      <h1 className="page_title" style={{ textTransform: "capitalize" }}>
        {location.pathname.substr(1)}
      </h1>
      <div style={{ height: "250px" }} />
    </div>
  );
};

export default OtherPage;
