import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from"../header/Header";
import Nav from"../nav/Nav";
import Main from"../main/Main";
import Forms from"../form/Forms";
import "../Fontawesome";



class App extends React.Component {
    constructor(props){
    super(props);
    this.state = {search: "Ice Age" } 
    }

    handleSearchChange = (search) => {
        this.setState({search: search})
    }


    render(){
        return(
            <BrowserRouter> 
                <div className="app">
                    <Header onSearchInput={this.handleSearchChange}/>
                    <Nav/>
                    <Switch>    
                        <Route exact path="/"component={() => <Main search={this.state.search} />}/>
                        <Route path="/form" component={Forms}/>
                    </Switch>
                </div>
            </BrowserRouter>
    
        )

    }

}

export default App;