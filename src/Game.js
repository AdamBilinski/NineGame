import React from "react";
import Stars from "./Stars";
import Button from "./Button";
import Answer from "./Answer";

export default class Game extends React.Component{
    render(){
        return(
            <div>
                <h3>Play Nines</h3>
                <Stars />
                <Button />
                <Answer />
            </div>
        )
    }
}