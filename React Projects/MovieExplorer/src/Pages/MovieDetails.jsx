import { useParams } from "react-router-dom"
import { useEffect , useState } from "react"

function MovieDetails() {

  const {id } = useParams()
  const [movie , setMovies] = useState(null)

  useEffect( () => {
    async function getMovie() {
       const res = await fetch(`http://www.omdbapi.com/?apikey=82b49dd0&i=${id}`)
      const data = await res.json();
      setMovies(data)
      
    }
    getMovie();
  },[id])

  if (!movie) return <p>Loading...</p>

  return (
	<div classNmae="movie-detail">
		<img alt={movie.Title} src={movie.Poster}/>
    <h2>{movie.Title}</h2>
		<p><strong>Genre: </strong>{movie.Genre}</p>
		<p><strong>Released: </strong>{movie.Released}</p>
    <p><strong>BoxOffice: </strong>{movie.BoxOffice}</p>
    <p><strong>Imdb Rating: </strong>{movie.imdbRating}</p>
   <p><strong>Other Ratings:</strong></p>
<ul>
  {movie.Ratings && movie.Ratings.map((rating, index) => (
    <li key={index}>
      {rating.Source}: {rating.Value}
    </li>
  ))}
</ul>
		<p><strong>Plot: </strong> {movie.Plot}</p>
	</div>
  )
}

export default MovieDetails
