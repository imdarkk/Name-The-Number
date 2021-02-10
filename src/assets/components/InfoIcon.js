import React from 'react';
import '../scss/Info.scss';

import infoIcon from '../images/info.svg';

function InfoIcon(props) {
    return <div className="wrapperInfo">
        <img src={infoIcon} alt="" id="infoIcon" onClick={() => props.setStats(false)}/>
    </div>
}

export default InfoIcon;