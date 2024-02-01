import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ShowDetails = ({ match }) => {
  const { id } = useParams();
  const [show, setShow] = useState(null);

  useEffect(() => {
    //const showId = match.params.id;
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then((response) => response.json())
      .then((data) => setShow(data));
  }, [id]);

  return (
    <div>
      <h2>Show Details</h2>
      {show && (
        <div>
          <h3>{show.name}</h3>
          <p>{show.summary}</p>
        </div>
      )}
    </div>
  );
};

export default ShowDetails;
