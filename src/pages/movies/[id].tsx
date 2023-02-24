import styles from "@styles/MovieDetails.module.scss"
import { useRouter } from 'next/router'
import { omdbApiClient } from "@/config"
import { Movie } from '@/api/OmdbApi'
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { AppState } from "@/store"
import { addMovie, MovieState } from "@/store/slices/movieSlice"
import Image from "next/image"

export default function MovieDetails() {
    const state = useSelector<AppState>(state => state.movies)
    const dispatch = useDispatch()
    const router = useRouter()
    const [movie, setMovie] = useState<Movie | null>(null)
    const [error, setError] = useState("")
    const { id } = router.query

    async function fetchData() {
        const movie = await omdbApiClient.findOneMovie(id as string)
        if(movie.data.Response == "False") {
            setError(movie.data.Error)
            setTimeout(() => {
                router.push('/404')
            }, 2000)
            return;
        }
        setMovie(movie.data)
        dispatch(addMovie(movie.data))
    }

    useEffect(() => {
        if(id) {
            const storedMovie = (state as MovieState).movies[id as string]
            if(storedMovie) {
                setMovie(storedMovie)
            } else {
                fetchData()
            }
        }
    }, [id])

    if(error) return <div className="error">{error}</div>
    if(!movie) return <div className="spinner"></div>

    return (
        <div className="container">
            <h1 className={styles.title}>Movie Details</h1>
            <div className={styles.moviePosterSection}>
                <Image src={movie.Poster} alt={"Movie Poster"} width={400} height={600} />
                <div className="details">
                    <div>
                        <h1>{movie.Title}</h1>
                        <p>{movie.Plot}</p>
                        <div className={styles.ratings}>
                            <h2>Ratings: </h2>
                            {movie.Ratings.map(rating => <p key={rating.Source}><b>{rating.Source}</b>: {rating.Value}</p>)}
                        </div>
                    </div>
                    <button onClick={() => router.push('/')}>Go Back</button>
                </div>
            </div>
        </div>
    )
}