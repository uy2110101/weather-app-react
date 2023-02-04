import React, { useEffect, useState } from "react";
import "./temp.css";

const Temp = () => {

  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Mumbai");

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=ccdfc79a9ea05fb1266b9a8389bf6f23`
      const response = await fetch(url);
      const resJson = await response.json();
      setCity(resJson.main)
    }
    fetchApi()
  }, [search]);

  return (
    <>
      <div className="heading"><h1>Check Your Temp <i className="fa-solid fa-arrow-down"></i></h1></div>
      <div className="container">

        <div className="input-container">
          <input className="css-input" type="search" value={search} onChange={(event) => {setSearch(event.target.value) }} />
        </div>
        {!city ? (<div className="failurebox"><p className="failure">No Data Found ! <i class="fa-solid fa-face-sad-tear"></i></p></div>):(
          <div className="info">
          <h1 className="location">
            <i className="fa-solid fa-street-view"></i>{search}
          </h1>
          <h1 className="temperature">{city.temp}°Cel</h1>
          <h3 className="temp_min_max">Min: {city.temp_min}°Cel | Max: {city.temp_max}°Cel</h3>
        </div>
        )}
        
      </div>
    </>
  );
};

export default Temp;
