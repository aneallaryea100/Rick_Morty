import React from 'react';
// import { Link } from 'react-router-dom';
import backIcon from '../images/backIcon.png';
import micIcon from '../images/mic.png';
import settingIcon from '../images/settings-icon.jpg';

function Header() {
  return (
    <div className="headerDiv">

      <img className="backIcon" src={backIcon} alt="backicon" />
      <h1 className="headerText">Rick and Morty</h1>

      <div className="headerIcons">
        <img className="setting" src={settingIcon} alt="backicon" />
        <img className="mic" src={micIcon} alt="micIcon" />
      </div>

    </div>
  );
}

export default Header;

// Header.propTypes = {
//   handleChange: PropTypes.func.isRequired,
// };
