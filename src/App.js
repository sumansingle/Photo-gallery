import "./styles.css";
import React, { useEffect, useState } from "react";
import Photogrid from "./component/photogrid";

export default function App() {
  const [photo, setShowPhoto] = useState([]);
  const [search, setSearch] = useState(" ");
  useEffect(() => {
    fetch(
      "https://api.slingacademy.com/v1/sample-data/photos?offset=5&limit=200"
    )
      .then((res) => res.json())
      .then((data) => setShowPhoto(data.photos));
  }, []);
  const handleChange = (e) => {
    setTimeout(() => {
      setSearch(e.target.value.toLowerCase());
    }, 1000);
  };
  return (
    <div className="App">
      <div className="header">
        <p className="name">Photo Gellory</p>
        <div className="searchbar">
          <input placeholder="search here..." onChange={handleChange} />
        </div>
      </div>
      <div className="photoflex">
        {photo
          .filter((item) => {
            return search.toLowerCase() === ""
              ? item
              : item.title.toLowerCase().includes(search);
          })
          .map((item, index) => (
            <Photogrid
              src={item.url}
              alt={item.id}
              title={item.title}
              imageUrl={item.url}
            />
          ))}
      </div>
      <p className="footer"> Made by suman 🔥</p>
    </div>
  );
}
