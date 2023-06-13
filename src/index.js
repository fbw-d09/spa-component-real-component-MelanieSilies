import React from "react";
import ReactDOM from "react-dom";

//create your function here
export const Card = () => {
    return (
    <div className="card m-5">
        <img className="card-img-top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Bob_Dylan_-_Azkena_Rock_Festival_2010_2.jpg/800px-Bob_Dylan_-_Azkena_Rock_Festival_2010_2.jpg" alt="Card image cap" />
        <div className="card-body">
        <h5 className="card-title">Bob Dylan</h5>
        <p className="card-text">Bob Dylan (born Robert Allen Zimmerman, May 24, 1941) is an American singer/songwriter, author, and artist who has been an influential figure in popular music and culture for more than five decades.</p>
        <a href="https://en.wikipedia.org/wiki/Bob_Dylan" className="btn btn-primary">Go to wikipedia</a>
        </div>
    </div>)
}

//remember to use ReactDOM.render to include the component into the website
ReactDOM.render(<Card/>,document.querySelector('#root'));