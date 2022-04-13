import React from "react";

function Coin({ coin }) {
  return (
    <div className=" col mb-4 coin">
      <h1>Name:{coin.name}</h1>
      <img src={coin.icon} alt={coin.name} />
      <h3>Price: {coin.price} </h3>
      <h3>Symbol: {coin.symbol} </h3>
    </div>
  );
}

export default Coin;
