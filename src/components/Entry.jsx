import React from "react"; 
import emojipedia from "../emojipedia";


function Entry(props) {
    return (
      <div className="term">
        <dt>
          <span className="emoji" role="img" aria-label={props.description}> {props.symbol} </span>
          <span>{props.description}</span>
        </dt>
        <dd>
          {props.definition}
        </dd>
      </div>
    );
  }

export default Entry;


