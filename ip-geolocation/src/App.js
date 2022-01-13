import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [userGeoIPData, setUserGeoIPData] = useState(null);

  useEffect(() => {
    fetch(
      `https://geo.ipify.org/api/v2/country?apiKey=${process.env.REACT_APP_ipify_API_Key}`
    )
      .then((response) => response.json())
      .then((data) => setUserGeoIPData(data));
  }, []);

  console.log(userGeoIPData);

  return (
    <div className="App">
      <p>Your IP: {userGeoIPData.ip}</p>
      <p>ISP: {userGeoIPData.isp}</p>
      <p>
        Location: {userGeoIPData.location.country},{" "}
        {userGeoIPData.location.region}{" "}
      </p>
    </div>
  );
}

export default App;
