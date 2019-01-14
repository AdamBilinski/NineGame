import React from "react"
import Stars from "./Stars"
import Button from "./Button"
import Answer from "./Answer"
import Numbers from "./Numbers"

export default class Game extends React.Component {
    state = {
        selectedNumbers : [2, 4]
    }
    render() {
        return (
            <div className="container">
                <h3>Play Nines</h3>
                <hr />
                <div className="row">
                    <Stars />
                    <Button />
                    <Answer selectedNumbers={this.state.selectedNumbers}/>
                </div>
                <br />
                <Numbers selectedNumbers={this.state.selectedNumbers}/>
            </div>
        )
    }
}