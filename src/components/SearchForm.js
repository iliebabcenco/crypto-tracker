import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const SearchForm = () => {
  const [filter, setFilter] = useState('');
  const dispatch = useDispatch();
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
    const filter = e.target.value;
    dispatch({ type: 'CHANGE_FILTER', filter });
  };
  return (
    <div>
      <h3>Currency searching</h3>
      <input type="text" placeholder="search for..." onChange={(e) => handleFilterChange(e)} value={filter} />
    </div>
  );
};

export default SearchForm;
