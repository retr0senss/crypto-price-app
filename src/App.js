import { useEffect, useState } from "react";
import "./App.css";
import Axios from "axios";
import Coin from "./components/Coin";

function App() {
  const [listOfCoins, setListOfCoins] = useState([]);
  const [searchCoin, setSearchCoin] = useState("");

  useEffect(() => {
    Axios.get("https://api.coinstats.app/public/v1/coins?skip=0").then(
      (response) => {
        setListOfCoins(response.data.coins);
      }
    );
  }, []);

  const filteredCoins = listOfCoins.filter((coin) => {
    return coin.name.toLowerCase().includes(searchCoin.toLowerCase());
  });

  return (
    <div className="App">
      <div className="cryptoHeader">
        <input
          type="text"
          placeholder="Enter a coin name..."
          onChange={(event) => {
            setSearchCoin(event.target.value);
          }}
        />
      </div>
      <div className="row">
        {filteredCoins.map((coin) => {
          return <Coin coin={coin} />;
        })}
      </div>
    </div>
  );
}

export default App;
