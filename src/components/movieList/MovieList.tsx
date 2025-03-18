import { useContext } from "react";
import { mainContext } from "../../context/MainProvider";

import MovieCard from "../movieCard/MovieCard";
import { Movie } from "../../assets/data/Data";

export interface MovieListProps {
    movies: Movie[];
    setMovies: () => void;
  }
  
const MovieList
 = () => {
    const {movies} = useContext(mainContext) as MovieListProps

    return ( 
        <section className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 mb-10">
            {movies.map((movie: Movie) =>{
            return(
                <MovieCard key={movie.title} movie={movie}/>
            )  
            })}
        </section>
     );
}

export default MovieList
;