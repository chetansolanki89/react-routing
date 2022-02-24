import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1>Home Component</h1>
      <button onClick={() => navigate("order-summary", { replace: true })}>
        Place Order
      </button>
    </>
  );
};

export default Home;
