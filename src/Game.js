import React from "react"
import Stars from "./Stars"
import Button from "./Button"
import Answer from "./Answer"
import Numbers from "./Numbers"
import DoneFrame from "./DoneFrame"

export default class Game extends React.Component {
    static randomNumber = () => {
        return 1 + Math.floor(Math.random() * 9);
    }
    state = {
        selectedNumbers: [],
        randomNumberOfStars: Game.randomNumber(),
        usedNumbers: [],
        answerIsCorrect: null,
        redraws: 5,
        doneStatus: null
    };

    selectedNumber = (clickedNumber) => {
        if (this.state.selectedNumbers.indexOf(clickedNumber) >= 0
            || this.state.usedNumbers.indexOf(clickedNumber) >= 0) {
            return;
        }
        this.setState(prevState => ({
            answerIsCorrect: null,
            selectedNumbers: prevState.selectedNumbers.concat(clickedNumber)
        }))
    }

    unselectNumber = (clickedNumber) => {
        if (this.state.selectedNumbers.indexOf(clickedNumber) >= 0) {
            this.setState(prevState => ({
                answerIsCorrect: null,
                selectedNumbers: prevState.selectedNumbers
                    .filter(number => number !== clickedNumber)
            }))
        }
    }

    checkAnswer = () => {
        this.setState(prevState => ({
            answerIsCorrect: prevState.randomNumberOfStars ===
                prevState.selectedNumbers.reduce((acc, n) => acc + n, 0)
        }))
    };

    acceptAnswer = () => {
        this.setState(prevState => ({
            usedNumbers: prevState.usedNumbers.concat(prevState.selectedNumbers),
            selectedNumbers: [],
            answerIsCorrect: null,
            randomNumberOfStars: Game.randomNumber()
        }), this.updateDoneStatus)
    }

    redraw = () => {
        if (this.state.redraws === 0) {
            return;
        }
        this.setState(prevState => ({
            redraws: prevState.redraws - 1,
            randomNumberOfStars: Game.randomNumber(),
            answerIsCorrect: null,
            selectedNumbers: []
        }), this.updateDoneStatus)
    }

    updateDoneStatus = () => {
        if (this.state.usedNumbers.length === 9) {
            this.setState({
                doneStatus: 'Done. Nice!'
            })
        }
        if (this.state.redraws === 0 && !this.possibleSolutions(this.state)) {
            this.setState({
                doneStatus: 'Game Over!'
            })
        }
    }


possibleSolutions = ({ randomNumberOfStars, usedNumbers }) => {
    const possibleNumbers = _.range(1, 10).filter(number =>
        usedNumbers.indexOf(number) === -1
    );

    return possibleCombinationSum(possibleNumbers, randomNumberOfStars);
}

render() {
    const { selectedNumbers, randomNumberOfStars, usedNumbers, redraws, doneStatus } = this.state;
    return (
        <div className="container">
            <h3>Play Nines</h3>
            <hr />
            <div className="row">
                <Stars numberOfStars={randomNumberOfStars} />
                <Button selectedNumbers={selectedNumbers}
                    checkAnswer={this.checkAnswer}
                    answerIsCorrect={this.state.answerIsCorrect}
                    acceptAnswer={this.acceptAnswer}
                    redraw={this.redraw}
                    redraws={redraws} />
                <Answer selectedNumbers={selectedNumbers}
                    unselectNumber={this.unselectNumber} />
            </div>
            <br />
            {doneStatus ?
                <DoneFrame doneStatus={doneStatus} /> :
                <Numbers selectedNumbers={selectedNumbers}
                    selectedNumber={this.selectedNumber}
                    usedNumbers={usedNumbers} />
            }
            <br />
        </div>
    )
}
}

var possibleCombinationSum = function (arr, n) {

    var possibleCombinations = [];
    for (var i = 0; i < arr.length; i++)
	{
		var currentValue = arr[i];
		possibleCombinations.push(currentValue);
		for (var j = 0; j < arr.length; j++)
		{
			var otherItem = arr[j];
			if(i != j)
			{
				currentValue += otherItem;
				possibleCombinations.push(currentValue);
			}
		}
    }
    
    return possibleCombinations.includes(n);
}