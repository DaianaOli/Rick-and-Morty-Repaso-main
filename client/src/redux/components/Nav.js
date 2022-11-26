import React from 'react'
import{Link} from 'react-router-dom'

const Nav = () => {
    return (
        <div>
            <Link to='/characters/create'>
                <button className='button'>Create Character</button>
            </Link>
            <Link to='/'>
                <button className='button'>Landing Page</button>
            </Link>
            <Link to='/about'>
                <button className='button'>About</button>
            </Link>

            <div>
                <h2>Filters</h2>
                
            </div>
        </div>
        )
}

export default Nav