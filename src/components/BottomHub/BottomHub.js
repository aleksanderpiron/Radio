import React from 'react';

const BottomHub = (props) =>{
    return(
        <div className="bottomHub">
            <h3>Currently Playing</h3>
            <h2>{props.currentStation}</h2>
        </div>
    )
}

export default BottomHub;