import Header from"../header/Header";
import Nav from"../nav/Nav";
import Main from"../main/Main";
import "../Fontawesome";


function App(params) {
    return(
        <div className="app">
            <Header/>
            <Nav/>
            <Main/>
        </div>
    )
}

export default App;