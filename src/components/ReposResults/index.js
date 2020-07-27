import React from 'react';
import './style.scss';
import PropTypes from "prop-types";
import { Card } from "semantic-ui-react";

const ReposResults = ({data}) => {

  return(
    <div className="repos-results">
    {data.map((repo) => {
      return <Item key={repo.id} {...repo} />;
    })}
  </div>
);
};

ReposResults.propTypes = {
data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const Item = ({ name, description, owner, html_url }) => (
<div className="result-item">
  <Card
    fluid
    onClick={() => window.open(html_url, "_blank")}
    image={owner.avatar_url}
    header={name}
    meta={owner.login}
    description={description}
  />
</div>
);

Item.propTypes = {
name: PropTypes.string.isRequired,
description: PropTypes.string,
html_url: PropTypes.string.isRequired,
owner: PropTypes.shape({
  login: PropTypes.string.isRequired,
  avatar_url: PropTypes.string.isRequired,
  html_url: PropTypes.string.isRequired,
}).isRequired,
};
export default ReposResults;
