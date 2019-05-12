import React from 'react';
import FrequencyChanger from '../FrequencyChanger/FrequencyChanger';

const RadioItem = (props) =>{
    return(
        <div onClick={props.clicked} className={"radioItem "+props.active}>
            <FrequencyChanger image={props.image}/>
            <div className="bottom">
                <span>{props.name}</span>
                <span>{props.frequency}</span>
            </div>
        </div>
    )
}

export default RadioItem;