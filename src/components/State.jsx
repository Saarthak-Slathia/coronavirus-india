import React from "react";
import "./state.css";

const State = (props) => {
    return(
        <div className="mainDiv">
            <div className="state bold">{props.name}</div>
            <div className="statedata box">{props.confirmed}<small>{props.deltaconfirmed}</small></div>
            <div className="statedata box">{props.active}</div>
            <div className="statedata box">{props.recovered}<small>{props.deltarecovered}</small></div>
            <div className="statedata box">{props.deaths}<small>{props.deltadeaths}</small></div>
        </div>
    )
}

export default State;