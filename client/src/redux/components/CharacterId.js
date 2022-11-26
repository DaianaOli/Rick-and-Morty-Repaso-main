import React from "react"
import{Link} from 'react-router-dom'
import {VscServerProcess} from 'react-icons/vsc'

export default function CharacterId(){
    return (
        <div>
            <h1>CharacterId</h1>
            <p>In process <VscServerProcess/></p>
            <Link to='/characters'>
                <button className='button'>Back</button>
            </Link>
        </div>
    )
}