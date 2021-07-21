import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import '../styles/SearchForm.css';

const SearchForm = () => {
  const [filter, setFilter] = useState('');
  const dispatch = useDispatch();
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
    const filter = e.target.value;
    dispatch({ type: 'CHANGE_FILTER', filter });
  };
  return (
    <div className="search-form-div">
      <input type="text" className="form-control me-2" placeholder="search for..." onChange={(e) => handleFilterChange(e)} value={filter} />
    </div>
  );
};

export default SearchForm;
