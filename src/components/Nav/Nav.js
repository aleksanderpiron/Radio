import React from 'react';
import backIcon from '../../imgs/back-arrow.png';
import switchIcon from '../../imgs/switch.png';

const Nav = () =>{
    return(
        <div className="nav">
            <div className="back">
                <button>
                    <img src={backIcon} alt=""/>
                </button>
            </div>
            <h1>Stations</h1>
            <div className="back">
                <button>
                    <img src={switchIcon} alt=""/>
                </button>
            </div>
        </div>
    )
}

export default Nav;