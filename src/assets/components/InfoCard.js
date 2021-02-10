import React from 'react';

import '../scss/InfoCard.scss';
import closeIcon from "../images/close.svg";

function InfoCard(props) {
    return (
      <div className="infoCardWrapper">
        <img
          src={closeIcon}
          alt=""
          id="closeIcon"
          onClick={() => props.setStats(true)}
        />
        <div id="wrapperText">
          <p id="first">
            Name the number is a guess the number game created by @marios.kyr.
          </p>
          <p>
            To play you have to guess the number. The number is between 1-100
          </p>
          <p>If you find any bugs or have any suggestions contact me at</p>
          <p id="email">kmarios2005@gmail.com</p>
        </div>
      </div>
    );
}

export default InfoCard;