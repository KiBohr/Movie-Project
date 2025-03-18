import { createContext, useState } from "react";
import moviesArray, { Movie } from "../assets/data/Data";

export const mainContext = createContext({})

const MainProvider = ({children}:{children:React.ReactNode}) => {
    // hier kommen die usestates hin
    const [movies, setMovies] = useState<Movie[]>(moviesArray)
    // console.log(movies)

    return ( 
        <mainContext.Provider value={{movies,setMovies}}>
            {children}
        </mainContext.Provider>
     );
}
 
export default MainProvider;