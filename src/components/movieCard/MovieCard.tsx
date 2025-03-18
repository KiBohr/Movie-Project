import { Movie } from "../../assets/data/Data";


interface MovieCardProps{
    movie: Movie
}

const MovieCard = ({movie}:MovieCardProps) => {
    return(
        <article className="bg-light-grey/80 rounded-xl p-5 text-dark-blue flex flex-col items-center gap-4 text-xl shadow-lg transition ease-in-out hover:shadow-2xl cursor-pointer">
            <h2 className="text-4xl uppercase mb-5">{movie.title}</h2>
            <div className=" flex w-[100%] justify-between text-3xl">
                <div className="flex gap-1 items-center justify-center">
                    <img className="h-8" src="../../../public/img/star.png" alt="" />
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