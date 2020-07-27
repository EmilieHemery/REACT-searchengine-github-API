// == Import npm
import React, { useState, useEffect } from 'react';
import 'semantic-ui-css/semantic.min.css';
import axios from 'axios';
import regeneratorRuntime from 'regenerator-runtime';

// == Import
import Message from '../Message';
import SearchBar from '../SearchBar';
import ReposResults from '../ReposResults';
import logo from '../../assets/images/logo-github.png';

import './styles.css';

// == Composant
const App = () => {
  const [results, setResults] = useState([]);
  const [count, setCount] = useState(0)
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');

  const getResults = async () => {
    setLoading(true);
    try {
      const res = await axios({
        method: 'get',
        url:`https://api.github.com/search/repositories?q=${search}`,
      });
      setResults(res.data.items);
      setCount(res.data.total_count);
    }
    catch (e) {
      console.error(e);
    }
    setLoading(false);
  };

  return (
    <div className="app">
        <img className="logo-github" src={logo} />
      <SearchBar
        search={search}
        loading={loading}
        setSearch={setSearch}
        handleSubmit={getResults} />
      <Message
        total={count}/>
      <ReposResults
        data={results} />
    </div>
  );
};

// == Export
export default App;
