import React from 'react';
import RadioItem from '../RadioItem/RadioItem';

const RadioList = (props) =>{
    const content = Object.values(props.stationList).map(item=>{
        return <RadioItem clicked={()=>{props.changeStation(item.name)}} name={item.name} frequency={item.frequency}/>
    });
    return(
        <div className="radioList">
            <ul>
                {content}
            </ul>
        </div>
    )
}

export default RadioList;