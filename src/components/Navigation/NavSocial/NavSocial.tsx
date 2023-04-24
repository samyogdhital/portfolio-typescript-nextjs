import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./NavSocial.module.css";

const NavSocial = ({ socialClass, socialIcons }) => {
  return (
    <>
      <li className={`${styles[socialClass]}`}>
        <a
          href="https://github.com/samyogdhital"
          className="socialIcons"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="My Github Portfolio."
        >
          <FontAwesomeIcon
            icon={["fab", "github"]}
            className={`${styles[socialIcons]}`}
          />
        </a>
      </li>
      <li className={`${styles[socialClass]}`}>
        <a
          href="https://www.linkedin.com/in/samyog-dhital-581245206/"
          className="socialIcons"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="My Linkedin Profile."
        >
          <FontAwesomeIcon
            icon={["fab", "linkedin"]}
            className={`${styles[socialIcons]}`}
          />
        </a>
      </li>
    </>
  );
};

export default NavSocial;
