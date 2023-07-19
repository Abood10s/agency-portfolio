import React from "react";

const RouteError = () => {
  return (
    <div
      style={{
        textAlign: "center",
        height: "44.8vh",
        padding: "2rem 0",
        color: "red",
      }}
    >
      <h1>Sorry..! </h1>
      <h2 style={{ color: "#0F7AD3" }}>The page you requested doesn't exist</h2>
    </div>
  );
};

export default RouteError;
