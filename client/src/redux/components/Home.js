import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getCharacters } from '../actions'
import Nav from './Nav'
import Filters from './filters';
import Pagination from './Pagination';
import Swal from 'sweetalert2';
import ("../../styles/home.css")

export default function Home() {
  let dispatch = useDispatch()
  const characters = useSelector((state) => state.characters)
  const charact = useSelector((state)=> state.characters.result)
  const [currentPage, setCurrentPage] = useState(1)
  // eslint-disable-next-line
  const[characterXpage, setCharacterXpage] = useState(4)
  const indexOfLastCharacter = currentPage * characterXpage
  const indexOfFirstCharacter = indexOfLastCharacter - characterXpage
  const currentCharacters = charact?.slice(indexOfFirstCharacter, indexOfLastCharacter)
  
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
}

  useEffect(() => {
    dispatch(getCharacters({}))
  }, [dispatch])

  const alertNF = () => {
    Swal.fire({
      icon: "error",
      title: 'Not yet available',
      text: 'Sorry for the inconvenience, soon available',
    })
  }


  return (
    <div className='container-h'>
      <Nav />
      <Filters/>
      <Pagination characterXpage={characterXpage} total={characters.count} paginate={paginate}/>
      <div className='contenedor'>
      { currentCharacters  ? (
        currentCharacters.map((e) => {
          return (
              <div className='card' key={e.id}>
                <div className='card-info' >
                  <h1>{e.name}</h1>
                  <img  src={e.image} alt={e.name} />
                {(() => {
          if (e.status === "Dead") {
            return <div className="badge bg-danger fs-5">{e.status}</div>;
          } else if (e.status === "Alive") {
            return <div className=" badge bg-success fs-5">{e.status}</div>;
          } else {
            return <div className="badge bg-secondary fs-5">{e.status}</div>;
          }
        })()}
                  <table className='table'>
                    <tbody>
                      <tr>
                        <td>Species:</td>
                        <td>{e.species}</td>
                      </tr>
                      <tr>
                        <td>Origin:</td>
                        <td>{e.origin.name}</td>
                      </tr>
                      <tr>
                        <td>Total episodes:</td>
                        <td>{e.episode ? e.episode.length : 0}</td>
                      </tr>
                      <tr>
                      <td>Location:</td>
                      <td>{e.location.name}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className='episodes'>
                <h3>Episodes
                  <select onChange={()=> alertNF()}  >{e.episode? e.episode.map((e) => {
                    return <option  key={e}>{e}</option>}) : null}
                  </select>
                </h3>
                </div>
            </div>
          )
        })
      )
        : typeof currentCharacters === "string" ? (
            <div className='cont-nf'>
              <p className='nf'>GAME NOT FOUND</p>
              {/* <img className="notfound" src={notFound} alt="error404"></img> */}
            </div>
          ) : (
            <div className='cont-ld'>
              <p className='load'>LOADING</p>
              {/* <img className="search" src={loading} alt=""></img> */}
            </div>
          )}
      </div>
      <Pagination characterXpage={characterXpage} total={characters.count} paginate={paginate}/>
    </div>
  )
}