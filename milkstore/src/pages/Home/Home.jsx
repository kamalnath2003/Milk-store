import React from "react";

const Home = (props) => {
  const { myname, age, color } = props;

  console.log(myname);
  console.log(age);
  console.log(color);

  return (
    <div>
      Home
      <h1></h1>
    </div>
  );
};

export default Home;
