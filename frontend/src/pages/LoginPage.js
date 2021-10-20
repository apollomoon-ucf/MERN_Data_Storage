import React from "react";

import PageTitle from "../components/PageTitle";
import Login from "../components/Login";

const LoginPage = () => {
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
        <Login />
      </div>
    </div>
  );
};

export default LoginPage;
