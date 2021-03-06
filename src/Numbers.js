import React from "react";
import _ from "lodash";

const Numbers = (props) => {
    const numberClassName = (number) => {
        if (props.usedNumbers.indexOf(number) > -1) {
            return "used";
        }
        if (props.selectedNumbers.indexOf(number) > -1) {
            return "selected";
        }
    }
    return (
        <div className="card text-center">
            <div>
                {Numbers.list.map((number, i) =>
                    <span key={i} className={numberClassName(number)}
                        onClick={() => props.selectedNumber(number)}>
                        {number}
                    </span>
                )}
            </div>
        </div>
    )
}

Numbers.list = _.range(1, 10);

export default Numbers;