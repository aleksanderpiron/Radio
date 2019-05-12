import React from 'react';
import Icons from '../Icons/Icons.js';

const FrequencyChanger = (props) =>{
    const imgBgStyle={
        backgroundImage: 'url('+props.image+')'
    }
    return(
        <div className="frequencyChanger">
            {/* <button><Icons type='minus'/></button> */}
            <span style={imgBgStyle}></span>
            {/* <button><Icons /></button> */}
        </div>
    )
}

export default FrequencyChanger;