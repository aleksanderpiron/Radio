import React from 'react';
import RadioItem from '../RadioItem/RadioItem';

const RadioList = (props) =>{
    const content = Object.entries(props.stationList).map(item=>{
        let classes = '';
        if(props.currentStation !== '---'){
            if(props.currentStation === item[0]){
                classes = 'active';
            }
        }
        return <RadioItem active={classes} image={item[1].radioImg} clicked={()=>{props.changeStation(item[0])}} name={item[1].name} frequency={item[1].frequency}/>
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