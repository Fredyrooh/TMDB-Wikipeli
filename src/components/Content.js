
import React, { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import MovieBox from "../commons/MovieBox";
import { sendPopularMovies } from '../store/movies';

const Content = () => {
    const movies = useSelector(state=>state.movies)
    const dispatch = useDispatch()

    useEffect(() => { dispatch(sendPopularMovies()) }, [])

    return (
        <div>
        <section className='container'>
            <div className='grid'>
            {movies.map((movie,i) =>
                <MovieBox key={movie.id} {...movie} />)}
             </div>
        </section>
      </div>  
    )
}

export default Content