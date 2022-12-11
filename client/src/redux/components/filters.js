import React from 'react'
import { filterStatus, filterAlphabetically
    , filterLocation,filterSpecies, getCharacters } from '../actions';
import { useDispatch, } from 'react-redux';
import Swal from 'sweetalert2';

const Filters = () => {
    const dispatch = useDispatch();

    const handleStatus = (e) => {
        if (e.target.value === 'All') {
            dispatch(getCharacters({}));
        }
        dispatch(filterStatus(e.target.value));
    };

    const handleSpecies = (e) => {
        dispatch(filterSpecies(e.target.value));
    };

    const handleLocation = (e) => {
        dispatch(filterLocation(e.target.value));
    };

    const handleAlphabetically = (e) => {
        dispatch(filterAlphabetically(e.target.value));
    };

    const handleReset = () => {
        Swal.fire({
            title: 'Are you sure?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, reset it!'
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(getCharacters({}));
                Swal.fire(
                    'Reset!',
                    'Your filters have been reset.',
                    'success'
                )
            }
        })
    };

    return (
        <div className="filters">
            <div className="filter">
                <button className="btn btn-primary" onClick={handleReset}>Reset Filters</button>
            </div>
            <div className="filter">
                <h3>Filter by status</h3>
                <select onChange={handleStatus}>
                    <option value="All">All</option>
                    <option value="Alive">Alive</option>
                    <option value="Dead">Dead</option>
                    <option value="unknown">Unknown</option>
                </select>
            </div>
            <div className="filter">
                <h3>Filter by species</h3>
                <select onChange={handleSpecies}>
                    <option value="All">All</option>
                    <option value="Human">Human</option>
                    <option value="Alien">Alien</option>
                    </select>
            </div>
            <div className="filter">
                <h3>Filter by location</h3>
                <select onChange={handleLocation}>
                    <option value="All">All</option>
                    <option value="Earth (Replacement Dimension)">Earth (Replacement Dimension)</option>
                    <option value="Abadango">Abadango</option>
                    <option value="Citadel of Ricks">Citadel of Ricks</option>
                    <option value="Worldender's lair">Worldender's lair</option>
                    <option value="Anatomy Park">Anatomy Park</option>
                    <option value="Interdimensional Cable">Interdimensional Cable</option>
                    <option value="Immortality Field Resort">Immortality Field Resort</option>
                    <option value="Post-Apocalyptic Earth">Post-Apocalyptic Earth</option>
                    <option value="Purge Planet">Purge Planet</option>
                    <option value="Venzenulon 7">Venzenulon 7</option>
                    <option value="Bepis 9">Bepis 9</option>
                    <option value="Nuptia 4">Nuptia 4</option>
                    <option value="Giant's Town">Giant's Town</option>
                    <option value="St. Gloopy Noops Hospital">St. Gloopy Noops Hospital</option>
                    <option value="Mr. Goldenfold's dream">Mr. Goldenfold's dream</option>
                    <option value="Gromflom Prime">Gromflom Prime</option>
                </select>
            </div>
            <div className="filter">
                <h3>Filter alphabetically</h3>
                <select onChange={handleAlphabetically}>
                    <option value="A-Z">A-Z</option>
                    <option value="Z-A">Z-A</option>
                </select>
            </div>
        </div>
    );
}

export default Filters