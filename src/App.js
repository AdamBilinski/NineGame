import ReactDOM from "react-dom";
import React from "react";
import Game from "./Game";

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