import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Movie from "./Movie";
function Detail() {
  const [detail, setDetail] = useState({});
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setDetail(json.data.movie);
  };
  useEffect(() => {
    getMovie();
  }, []);

  console.log(detail.genres);
  return (
    <div>
      <h1>
        <Link to="/">Detail</Link>
      </h1>
      <Movie
        key={detail.id}
        id={detail.id}
        coverImg={detail.medium_cover_image}
        title={detail.title}
        summary=""
        genres={detail.genres}
      />
    </div>
  );
}

export default Detail;
