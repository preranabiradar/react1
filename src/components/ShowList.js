import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ShowList = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    fetch("https://api.tvmaze.com/search/shows?q=all")
      .then((response) => response.json())
      .then((data) => setShows(data));
  }, []);

  return (
    <div>
      <h2>Show List</h2>
      <ul>
        {shows.map((show) => (
          <li key={show.show.id}>
            <Link to={`/show/${show.show.id}`}>
              {show.show.name} - {show.show.genres.join(", ")}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShowList;
