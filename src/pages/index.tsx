import { Inter } from 'next/font/google'
import movies from '@/movies.json'
import styles from "@/styles/Home.module.scss"
import Movie from "@/components/partials/Movie"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={`${styles.movies} container`}>
      {movies.map(movie => <Movie movie={movie} key={movie.imdbID} />)}
    </div>
  )
}
