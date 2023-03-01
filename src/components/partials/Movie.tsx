import { Movie } from "@/api/OmdbApi";
import Link from "next/link";

interface Props {
    movie: Movie
}

export default function SingleMovie({movie}: Props) {
    return (
        <Link href={`/movies/${movie.imdbID}`}>
            <div className="movie">
                <img src={movie.Poster} alt={"Movie Thumbnail"} />
                <h2>{movie.Title}</h2>
            </div>
        </Link>
    )
}