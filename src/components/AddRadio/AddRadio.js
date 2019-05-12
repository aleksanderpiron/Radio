import React from 'react';
import Tuner from '../Tuner/Tuner';

const AddRadio =(props)=>{
    return(
        <div className={props.active?'addRadio active':'addRadio'}>
            <div className="head">
                <h1>Add new station</h1>
            </div>
            <div className="body">
                <label>
                    <span>Station name:</span>
                    <input onChange={props.inputHandler} value={props.value.stationName} type="text"/>
                </label>
                <label>
                    <span>Station frequency:</span>
                    <Tuner wheelHandler={props.wheelHandler} freqValue={props.value.stationFreq} rangeHandler={props.inputHandler}/>
                </label>
                <button className="btn" onClick={props.addHandler}>ADD</button>
            </div>
        </div>
    )
}

export default AddRadio;