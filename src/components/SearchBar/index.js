import React from 'react';
import { Input } from "semantic-ui-react";
import Proptypes from "prop-types";

const SearchBar = ({search, setSearch, handleSubmit, loading}) => {
  
  return(
    <div className="search-bar">
    <form
      onSubmit={(evt) => {
        evt.preventDefault();
        handleSubmit();
      }}
    >
      <Input
        value={search}
        onChange={(evt) => {
          const text = evt.target.value;
          setSearch(text);
        }}
        loading={loading}
        placeholder="Search..."
        fluid
        icon="search"
        iconPosition="left"
      />
    </form>
  </div>
);
};

SearchBar.propTypes = {
loading: Proptypes.bool.isRequired,
search: Proptypes.string.isRequired,
setSearch: Proptypes.func.isRequired,
handleSubmit: Proptypes.func.isRequired,
};

export default SearchBar;
