import { useContext } from "react";
import { mainContext } from "../../context/MainProvider";
import { Movie} from "../../assets/contracts/interfaces/Interfaces";
import MovieCard from "../movieCard/MovieCard";

export interface MovieListProps {
    movies: Movie[];
    setMovies: () => void;
  }
  
const MovieList
 = () => {
    const {movies,setMovies} = useContext(mainContext) as MovieListProps

    return ( 
        <section className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 mb-10">
            {movies.map((movie: Movie) =>{
            return(
                <MovieCard movie={movie}/>
            )  
            })}
        </section>
        
        
     );
}

export default MovieList
;