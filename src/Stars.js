import React from "react";
import _ from "lodash";

const Stars = (props) => {
    // let stars = [];
    // for(let i =0; i<numberOfStars; i++){
    //     stars.push( <i key={i} className="fa fa-star"></i>);
    //}

    return (
        <div className="col-5" >
            {_.range(props.numberOfStars).map(i =>
                <i key={i} className="fa fa-star"></i>)}
        </div>
    )
}

export default Stars