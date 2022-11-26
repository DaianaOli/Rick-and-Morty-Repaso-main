import React from 'react'
import{Link} from 'react-router-dom'
import "../../styles/Nav.css";

const Nav = () => {
  return (
    <div>
      <h1 className="title">Welcome to the Rick and Morty App</h1>
      <Link to="/characters/create">
        <button className="button">Create Character</button>
      </Link>
      <Link to="/">
        <button className="button">Landing Page</button>
      </Link>
      <Link to="/about">
        <button className="button">About</button>
      </Link>

      <div>
        <div className="search">
          <input type="text" placeholder="Search by name..." />
          <button className="button">Search</button>
        </div>
        <div className="filters">
          <div className="filter">
            <p>Filter by Status</p>
            <button className="badge bg-success fs-5">Alive</button>
            <button className="badge bg-danger fs-5">Dead</button>
            <button className="bubadge bg-secondary fs-5">Unknown</button>
          </div>
          <div className="filter-species">
            <p>Filter by Species</p>
            <select name="species" id="species">
              <option value="Human">Human</option>
              <option value="Alien">Alien</option>
            </select>
          </div>
          <div className="filter-location">
            <p>Filter by Location</p>
            <select name="location" id="location">
              <option value="Earth">Earth</option>
              <option value="Abadango">Abadango</option>
              <option value="Citadel of Ricks">Citadel of Ricks</option>
              <option value="Worldenders lair">Worldender's lair</option>
              <option value="Anatomy Park">Anatomy Park</option>
              <option value="Interdimensional Cable">
                Interdimensional Cable
              </option>
              <option value="Post-Apocalyptic Earth">
                Post-Apocalyptic Earth
              </option>
              <option value="Purge Planet">Purge Planet</option>
              <option value="Venzenulon 7">Venzenulon 7</option>
              <option value="Nuptia 4">Nuptia 4</option>
              <option value="Resort Planet">Resort Planet</option>
              <option value="Fantasy World">Fantasy World</option>
              <option value="Giant Telepathic Spiders Dimension">
                Giant Telepathic Spiders Dimension
              </option>
              <option value="Gromflom Prime">Gromflom Prime</option>
              <option value="Earth (Replacement Dimension)">
                Earth (Replacement Dimension)
              </option>
              <option value="Earth (C-137)">Earth (C-137)</option>
              <option value="Earth (C-500A)">Earth (C-500A)</option>
              <option value="Earth (D716)">Earth (D716)</option>
              <option value="Earth (D716-B)">Earth (D716-B)</option>
              <option value="Earth (D716-C)">Earth (D716-C)</option>
              <option value="Earth (D716-D)">Earth (D716-D)</option>
              <option value="Earth (D716-E)">Earth (D716-E)</option>
              <option value="Earth (D716-F)">Earth (D716-F)</option>
              <option value="Earth (D716-G)">Earth (D716-G)</option>
              <option value="Earth (D716-H)">Earth (D716-H)</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav