import React from 'react';
import Icons from '../Icons/Icons.js';

const FrequencyChanger = (props) =>{
    const imgBgStyle={
        backgroundImage: 'url('+props.image+')'
    }
    return(
        <div className="frequencyChanger">
            <span style={imgBgStyle}></span>
        </div>
    )
}

export default FrequencyChanger;