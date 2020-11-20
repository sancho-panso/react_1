const { faDivide } = require("@fortawesome/free-solid-svg-icons");

function Movie(props) {
    return(
        <div className = "col-sm-6">
            <div className = "card">
                <div className = "card-body">
                    <h5 className = "card-title">Pavadinimas: {props.name}</h5> 
                    <p className = "card-text">Aprašymas: {props.note}</p>
                    <a href="#" className ="btn btn-primary">Plačiau</a>   
                </div>
            </div>
        </div>
    )
}

export default Movie;