import React, { useState, useEffect } from "react";
import "./App.css";
import { VictoryChart, VictoryLine, VictoryTheme } from "victory";

function App() {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=usd"
    )
      .then((response) => response.json())
      .then((response) => setCoins(response));
  }, []);

  console.log(coins);

  return <div className="App"></div>;
}

export default App;
