import React from "react"
import Stars from "./Stars"
import Button from "./Button"
import Answer from "./Answer"
import Numbers from "./Numbers"

export default class Game extends React.Component {
    state = {
        selectedNumbers : [],
        randomNumberOfStars : 1 + Math.floor(Math.random()*9)
    };
    
    selectedNumber = (clickedNumber) =>{
        if(this.state.selectedNumbers.indexOf(clickedNumber) >= 0){
            return;
        }
        this.setState(prevState => ({
            selectedNumbers: prevState.selectedNumbers.concat(clickedNumber)
        }))
    }

    unselectNumber = (clickedNumber) =>{
        if(this.state.selectedNumbers.indexOf(clickedNumber) >= 0){
            this.setState(prevState =>({
                selectedNumbers: prevState.selectedNumbers
                    .filter(number => number !== clickedNumber)
            }))
        }
    }

    render() {
        const {selectedNumbers, randomNumberOfStars} = this.state;
        return (
            <div className="container">
                <h3>Play Nines</h3>
                <hr />
                <div className="row">
                    <Stars numberOfStars={randomNumberOfStars} />
                    <Button selectedNumbers={selectedNumbers} />
                    <Answer selectedNumbers={selectedNumbers}
                            unselectNumber={this.unselectNumber} />
                </div>
                <br />
                <Numbers selectedNumbers={selectedNumbers}
                         selectedNumber={this.selectedNumber}   />
            </div>
        )
    }
}