import ReactDOM from "react-dom";
import React from "react";
import Game from "./Game";

import "bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';

export class App extends React.Component{
    render(){
        return(
            <div>
               <Game />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("index"));