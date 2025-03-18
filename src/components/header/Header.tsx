import { useContext } from "react";
import MainButton from "../mainButton/MainButton";
import { mainContext } from "../../context/MainProvider";

const Header = () => {
  const { movies, setMovies } = useContext(mainContext) as any;
  
//- Funktion zum Sortieren nach Date up
 const sortMoviesDateUp = () => {
    return setMovies([...movies].sort((a, b) => Number(b.year) - Number(a.year)));
  };
  
  //- Funktion zum Sortieren nach Date down
   const sortMoviesDateDown = () => {
    return setMovies([...movies].sort((a, b) => Number(a.year) - Number(b.year)));
  };
  
  //- Funktion zum Sortieren nach best Rate
   const rateMovies = () => {
    return setMovies([...movies].sort((a, b) => Number(b.rate) - Number(a.rate)));
  };
  
  //- Funktion zum Sortieren alphabetisch up
   const sortMoviesAToZ = () => {
    return setMovies([...movies].sort((a, b) => a.title.localeCompare(b.title)));
  };
  
  //- Funktion zum Sortieren alphabetisch down
  const sortMoviesZToA = () => {
    return setMovies([...movies].sort((a, b) => b.title.localeCompare(a.title)));
  };
  
    return ( 
        <header className="flex flex-col gap-2  items-start mb-15">
            <h1 className="uppercase text-red text-8xl font-semi-bold md:text-[11rem] lg:mb-50 lg:text-[20rem]">Movies</h1>
            <p className="uppercase text-lg font-bold">sort by:</p>
            <nav className="flex items-center justify-center gap-2">

                <MainButton buttonText="Date" myFunction={sortMoviesDateUp} img="img/arrow-up.png"/>

                <MainButton buttonText="Date" myFunction={sortMoviesDateDown}  img="img/arrow-down.png"/>

                <MainButton myFunction={rateMovies} buttonText="Best Rate"/> 

                 <MainButton buttonText="A-Z" myFunction={sortMoviesAToZ}/>

                <MainButton buttonText="Z-A" myFunction={sortMoviesZToA}/>
            </nav>
        </header>
     );
}
export default Header;