import'./main.scss'

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Container';
import Movie from '../movie/Movie'
import React, {Component} from 'react';


class Main extends Component{
    constructor()
    {
        super()
        this.state = {
            count:0,
            moviesData:[]
        }
    }

    handleClick = () =>{
        this.setState(prevState=>{
            return {
                count:prevState.count +1
            }
        })
    }


   /* async componentDidMount() {
        await fetch("http://www.omdbapi.com/?i=tt3896198&apikey=a5bf7638&s=terminator")
            .then(response => response.json())
            .then(async function(firstData){
                let movies = firstData.Search;
                    movies.forEach(async function(movie) {
                        let path = "http://www.omdbapi.com/?i=tt3896198&apikey=a5bf7638&t=" + movie.Title
                        await fetch(path)
                        .then(response2 => response2.json())
                        .then(movieWithPlot=>{
                        movie.Plot = movieWithPlot.Plot;
                        })
                        return movie;
                    })
                return movies;
            }).then(data=>{this.setState({moviesData: data})})

        } */
async componentDidMount() {
    let res = await fetch("http://www.omdbapi.com/?i=tt3896198&apikey=a5bf7638&s=Shrek");
    let data = await res.json()
    let movies = data.Search;
    for (let index = 0; index < movies.length; index++) {
        let path = "http://www.omdbapi.com/?i=tt3896198&apikey=a5bf7638&t=" + movies[index].Title;
        let response = await fetch(path);
        let movieWithPlot = await response.json();
        movies[index].Plot = movieWithPlot.Plot;
    }
    this.setState({moviesData: movies})
}  
        
   render() {
       console.log(this.state.moviesData);
        const movies = this.state.moviesData.map((item, index)=>
            <Movie key={index} 
                   name={item.Title}
                   note={item.Year}
                   plot={item.Plot}                             
                   link={item.Poster}/>)                             
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
        )
       
    }
}


export default Main;


