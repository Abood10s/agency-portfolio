import React from "react";

const RouteError = () => {
  return (
    <h1
      style={{
        textAlign: "center",
        height: "44.8vh",
        padding: "2rem 0",
        color: "red",
      }}
    >
      Sorry..!{" "}
      <h2 style={{ color: "#0F7AD3" }}>The page you requested doesn't exist</h2>
    </h1>
  );
};

export default RouteError;
