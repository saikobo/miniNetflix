import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const movies: string[] = []

export default function Home() {
  return (
    <div>
      {movies.map(movie => {
        return <div className="movie"></div>
      })}
    </div>
  )
}
