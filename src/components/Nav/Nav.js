import React from 'react';
import switchIcon from '../../imgs/switch.png';
import Icons from '../Icons/Icons.js';

const Nav = (props) =>{
    return(
        <div className="nav">
            <div className="back">
                <button onClick={props.stop}>
                    <img src={switchIcon} alt=""/>
                </button>
            </div>
            <h1>Stations</h1>
            <div className="back">
                <button className={props.rotate?'active':''} onClick={props.toggleModal}>
                    <Icons />
                </button>
            </div>
        </div>
    )
}

export default Nav;