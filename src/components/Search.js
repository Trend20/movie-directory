import React, { useState} from 'react'
import styled from 'styled-components';

const Search = ({ handleSearch }) =>{

  const onChange = (e) =>{
    handleSearch(e.target.value);
  }
  return (
    <div className='search' style={{ width: '100%' }}>
      <SearchInput type="text" 
      onChange={onChange}
      placeholder='Search Movie here...'
      />
    </div>
  )
}

const SearchInput = styled.input`
  display: flex;
  padding: 10px 5px;
  outline: none;
  border: none;
  margin: auto;
  margin-top: 30px;
  width: 50%;
  background-color: #e5f2e4;
  align-items: center;
`

export default Search;