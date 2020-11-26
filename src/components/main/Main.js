import'./main.scss'

import Container from 'react-bootstrap/Container';
import Movie from '../movie/Movie'
import React, {Component} from 'react';


class Main extends Component{
    constructor(props)
    {
        super(props)
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


async componentDidMount() {
    let path
    (this.props.search)? path = this.props.search: path = "Shrek";
    let res = await fetch("http://www.omdbapi.com/?i=tt3896198&apikey=a5bf7638&s=" + path)
    let data = await res.json()
    let movies = data.Search;
    if(movies){
        for (let index = 0; index < movies.length; index++) {
            let path = "http://www.omdbapi.com/?i=tt3896198&apikey=a5bf7638&t=" + movies[index].Title;
            let response = await fetch(path);
            let movieWithPlot = await response.json();
            movies[index].Plot = movieWithPlot.Plot;
        }
        this.setState({moviesData: movies})
    }
} 

        
   render() {
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
            </Container>
        )
       
    }
}


export default Main;

