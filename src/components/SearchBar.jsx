import React from "react";
import { FaSearch } from "react-icons/fa";
import styled from "styled-components";
import useSearch from "../hooks/useSearch";
import { FiX } from "react-icons/fi";

const SearchBarContainer = styled.div`
  display: flex;
  width: 60%;
  align-items: center;
  background-color: white;
  border-radius: 1rem;
  height: 3rem;
  padding: 0 0.5rem;
  gap: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  flex: 1;
  padding: 0.5rem;
  border: none;
  outline: none;
  color: black;
  font-size: 1rem;
`;

const SearchIcon = styled(FaSearch)`
  width: 1.5rem;
  height: 1.5rem;
  color: gray;
`;

const CloseIcon = styled(FiX)`
  cursor: pointer;
  color: #333;
  font-size: 1.5rem;
  margin-right: 0.5rem;
`;

const SearchBar = () => {
  const { searchTerm, handleSearch } = useSearch();

  return (
    <SearchBarContainer>
      <SearchIcon />
      <Input
        value={searchTerm}
        type="text"
        placeholder="Search widgets..."
        onChange={(e) => handleSearch(e.target.value)}
      />
      {searchTerm && <CloseIcon onClick={() => handleSearch("")} />}
    </SearchBarContainer>
  );
};

export default SearchBar;
