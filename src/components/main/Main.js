import'./main.scss'

import Container from 'react-bootstrap/Container';
import Movie from '../movie/Movie'
import Movies from '../../data/MoviesData';

function Main() {
    const movies = Movies.map(movie => 
        <Movie key={movie.id} 
               name={movie.pavadinimas}
               note={movie.tekstas}
        />)
    return(
        <Container>
        <div>   
            <div className = "row">
              {movies}
            </div>
        </div>
        </Container>
    )
}

export default Main;