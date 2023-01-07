import React from 'react';
import { FaGithub } from 'react-icons/fa';

function Header() {
  return (
    <div className="headerDiv">

      <h1 className="headerText">Rick and Morty</h1>

      <div className="headerIcons">
        <a
          href="https://github.com/aneallaryea100/Rick_Morty/tree/testing"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FaGithub className="gitHubIcon" />
        </a>

      </div>

    </div>
  );
}

export default Header;
