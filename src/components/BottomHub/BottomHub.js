import React from 'react';

const BottomHub = (props) =>{
    return(
        <div className="bottomHub">
            <h3>Currently Playing</h3>
            <h2>{props.currentStation !== '---'?props.stationList[props.currentStation].name:'---'}</h2>
            <button onClick={props.removeStation} disabled={props.currentStation==='---'?true:false} className="btn">DELETE STATION</button>
        </div>
    )
}

export default BottomHub;