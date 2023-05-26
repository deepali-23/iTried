import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FiDribbble } from "react-icons/fi";
function HeaderSocials() {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/deepali-sharma-957a831a5
"
        target="_blank"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/deepali-23/react_dashboard" target="_blank">
        <FaGithub />
      </a>
      {/* <a href="https://dribble.com" target="_blank">
        <FiDribbble />
      </a> */}
    </div>
  );
}

export default HeaderSocials;
