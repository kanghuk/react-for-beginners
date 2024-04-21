import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Movie({ id, coverImg, title, summary, genres }) {
  const initialState = {
    id: null,
    coverImg: "",
    title: "",
    summary: "",
    genres: [],
  };

  const safeGenres = Array.isArray(genres) ? genres : [];

  const [movie, setMovie] = useState(initialState);

  useEffect(() => {
    return () => {
      setMovie(initialState);
    };
  }, []);
  return (
    <div>
      <img src={coverImg} alt={title} />
      <h2>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
      <p>{summary}</p>
      <ul>
        {safeGenres.map((genre, index) => (
          <li key={index}>{genre}</li>
        ))}
      </ul>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default Movie;
