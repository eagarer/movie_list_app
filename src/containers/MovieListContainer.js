import {useEffect,useState} from 'react'
import AuthService from '../services/AuthService'


function MovieListContainer() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        AuthService.getAllMovies()
            .then((response) => {
                console.log("movies --> ", response)
                setMovies(response.data)
            })
            .catch((error) => console.log("Error -->", error))
    },[])
  return (
    <div>
        <ul>
            {movies && movies.map((movie, key)=>(
                <li key={key}>{movie.name} -- {movie.description}</li>
            ))}
        </ul>
    </div>
  )
}

export default MovieListContainer