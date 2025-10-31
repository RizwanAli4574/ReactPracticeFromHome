import { useState , useEffect , useRef, } from "react"
import MovieList from "../Components/MovieList"

function Home() {

  const [movies , setMovies] = useState([])
  const [loading , setLoading] = useState(false)
  const searchRef = useRef();


  const fetchMovie = async (query) => {
    setLoading(true)

      const res = await fetch(`http://www.omdbapi.com/?apikey=82b49dd0&s=${query}`)
      const data = await res.json();
     

      setMovies(data.Search || [])

      setLoading(false)
  }
 
   useEffect( () =>{
     fetchMovie("Avengers")
     searchRef.current.focus()
   },[])

   const handleSearch = (e) => {
       e.preventDefault();
       const query = searchRef.current.value.trim();
       if(query) fetchMovie(query)
        searchRef.current.value = ""
        searchRef.current.focus()
   }

  return (
    <div className="home">
        <form onSubmit={handleSearch}>
          <input ref={searchRef} className="searchInput" placeholder="Search for a movie..." />
          <button type="submit">Search 🔎</button>
        </form>

        {loading ? <p>Loading...</p> :  < MovieList movies={movies} />}
      
      </div>
  )
}

export default Home
