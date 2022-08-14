import React, { useEffect, useState } from 'react'
import MovieBox from "../commons/MovieBox";
import LogIn from './pages/LogIn';
import Register from './pages/Register';

const Content = () => {
    const API_URL = "https://api.themoviedb.org/3/movie/popular?api_key=3f8117490ee37e5c84303e9e7d0f467d"
    const [movies, setMovies] = useState([])

    useEffect(() => {
        fetch(API_URL)
            .then(res => res.json())
            .then(data => {
                console.log("*******data******", data);
                setMovies(data.results)
            })
    }, [])
    return (
        <section>
            {movies.map((movie) =>
                <MovieBox key={movie.id} {...movie} />)}
        </section>
    )
}

export default Content