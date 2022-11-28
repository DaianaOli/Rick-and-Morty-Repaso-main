import React from 'react'
import{Link} from 'react-router-dom'
import { getCharacters } from '../actions';
import { useDispatch } from 'react-redux';
import "../../styles/Nav.css";

const Nav = () => {
    const dispatch = useDispatch();
  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(getCharacters({name:e.target.value}));
    // console.log(e.target.value);
  };

  return (
    <div>
      <Link to="/characters/create">
        <button className="button">Create Character</button>
      </Link>
      <Link to="/">
        <button className="button">Landing Page</button>
      </Link>
      <Link to="/about">
        <button className="button">About</button>
      </Link>
      <h1 className="title">Welcome to the Rick and Morty App</h1>
      <div className="search">
        <input
          type="text"
          placeholder="Search by name"
          onChange={(e) => handleSearch(e)}
        />
            </div>
    </div>
  );
};

export default Nav