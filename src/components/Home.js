
import React from "react";

const Home = () => {
  const lo = JSON.parse(localStorage.getItem("login"));

  return (
    <div>
      <h1>Welcome</h1>
      <h1>Welcome {lo.name}</h1>
      <h2>Email: {lo.email}</h2>
      <h2>Password: {lo.password}</h2>
    </div>
  );
};

export default Home;