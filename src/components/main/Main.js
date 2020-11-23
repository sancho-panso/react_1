import'./main.scss'

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Container';
import Movie from '../movie/Movie'
import Movies from '../../data/MoviesData';
import React, {Component} from 'react';


class Main extends Component{
    constructor()
    {
        super()
        this.state = {
            count:0,
            moviesData:{}
        }
    }

    handleClick = () =>{
        this.setState(prevState=>{
            return {
                count:prevState.count +1
            }
        })
    }
    
    componentDidMount() {
        fetch("http://www.omdbapi.com/?i=tt3896198&apikey=a5bf7638&s=terminator")
            .then(response => response.json())
            .then(
                data=>{
                    this.setState({
                        moviesData: data.Search
                    } )
                    console.log(this.state.moviesData);
                }
            )
    }

    render() {
//{{console.log(this.state.moviesData);}}
   const movies = this.state.moviesData.map(movie => 
        <Movie key={movie.imdbID} 
               name={movie.Title}
               note={movie.Year}
        />)
    return(
        <Container>
        <div>   
            <div className = "row">
             {movies}
            </div>
        </div>
        <div>
            <div><h2 style= {{textAlign:+"center"}}>{this.state.count}</h2></div>
            <Button className ="btn btn-primary" onClick ={this.handleClick}>Click Me</Button>
        </div>
        </Container>
    )}
}

export default Main;