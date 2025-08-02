import React from "react";
import './App.css'; // Make sure this file includes .textRed and .textGreen styles

function App() {
  // Display text
  const element = "Office Space";

const sr = "download.jpeg";
const jsxatt = (
  <img
    src={sr}
    width="250px"
    height="150px"
    alt="Office Space"
    referrerPolicy="no-referrer"
  />
);

  const ItemName = { Name: "DBS", Rent: 50000, Address: "Chennai" };

  let colors = [];
  if (ItemName.Rent <= 60000) {
    colors.push("textRed");
  } else {
    colors.push("textGreen");
  }

  return (
    <div>
      <h1>{element}, at Affordable Range</h1>
      {jsxatt}
      <h1>Name: {ItemName.Name}</h1>
      <h3 className={colors.join(" ")}>Rent: Rs. {ItemName.Rent}</h3>
      <h3 >Address: {ItemName.Address}</h3>
    </div>
  );
}

export default App;
