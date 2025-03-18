import { Movie } from "../../assets/contracts/interfaces/Interfaces";

interface MovieCardProps{
    movie: Movie
}

const MovieCard = ({movie}:MovieCardProps) => {
    return(
        <article className="bg-dark-blue rounded-xl p-5 text-light-grey flex flex-col items-start gap-4 text-xl">
            <h2 className="text-3xl uppercase">{movie.title}</h2>
            <div className=" flex w-[100%] justify-between text-3xl">
                <div className="flex gap-1 items-center">
                    <img className="h-8" src="../../../public/img/star-06.png" alt="" />
                    <p>{movie.rate}</p>
                </div>
                <div>
                    <p>{movie.year}</p>
                </div>
                
            </div>
            <p className="font-semibold">{movie.genre.join(" ")}</p>
            <p className="text-2xl">{movie.director}</p>
            <div className=" self-center flex gap-1 items-center justify-center">
                <img className="h-5" src="../../../public/img/clock.png" alt="" />
                <p>{movie.duration}</p>
            </div>
        </article>
    )
}

export default MovieCard;