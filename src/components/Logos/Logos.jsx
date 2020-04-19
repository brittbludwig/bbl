import React from "react";
import PropTypes from "prop-types";
import LogoGitHub from "../../components/LogoGitHub/LogoGitHub";
import LogoLinkedIn from "../../components/LogoLinkedIn/LogoLinkedIn";

const Logos = ({ links }) => {
  return (
    <div className="d-flex flex-md-column Logos">
      <LogoGitHub url={links[0]} />
      <LogoLinkedIn url={links[1]} />
    </div>
  );
};

Logos.defaultProps = {
  id: "",
};

Logos.propTypes = {
  id: PropTypes.string,
};

export default Logos;
