import { useEffect, useState } from "react";
import Movie from "../components/Movie.js";
import styles from "./Home.module.css";

function Home(){
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className={styles.container}>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className={styles.movies}>
          <h1 className={styles.home}><a href="">Movie</a></h1>
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              coverImg={movie.medium_cover_image}
              title={movie.title}
              genres={movie.genres}
              summary={movie.summary}
              year={movie.year}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;