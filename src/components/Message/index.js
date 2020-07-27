import React from 'react';
import { Message as SemanticMsg } from "semantic-ui-react";
import PropTypes from "prop-types";

const Message = ({total}) => {
  const rightCount = total > 1 ? 'résultats' : 'résultat';
  const message = 'La recherche a donné ' + total + ' ' + rightCount;
  return (
    <div className="message">
      <SemanticMsg content= {message} />
    </div>
    )
};

Message.propTypes = {
  total: PropTypes.number.isRequired,
};
export default Message;
