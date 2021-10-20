import React from "react";

import PageTitle from "../components/PageTitle";
import LoggedInName from "../components/LoggedInName";
import CardUI from "../components/CardUI";

const CardPage = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Page Title Component */}
        <PageTitle />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Login Component */}
        <LoggedInName />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Login Component */}
        <CardUI />
      </div>
    </div>
  );
};

export default CardPage;
