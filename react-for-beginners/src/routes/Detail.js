import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Movie from "../components/Movie.js";
import styles from "./Detail.module.css"





function Detail() {
    const { id } = useParams(); //id값 불러오기
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState([]);
    const getMovie = async () => {
        const json = await(
            await fetch(
                `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
                )
            ).json();
            console.log(json)
            setMovie(json.data.movies);
            setLoading(false);
    };
    useEffect(() => {
        getMovie();
    }, []);

    return (
        <div className={styles.container}>
        {loading ? (
                  <div className={styles.loader}>
                  <span>Loading...</span>
                </div>
        ) : (
          <div className={styles.movie_div}>
            <h1 className={styles.home}><a href="">Movie</a></h1>
          </div>
        )}
      </div>
    );
}


export default Detail; 