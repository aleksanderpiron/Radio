import React from 'react';

const RadioItem = (props) =>{
    return(
        <div onClick={props.clicked} className="radioItem">
            <span>{props.name}</span>
            <span>{props.frequency}</span>
        </div>
    )
}

export default RadioItem;