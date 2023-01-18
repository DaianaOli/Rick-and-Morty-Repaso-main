import React from "react";
import { Link } from "react-router-dom";
import { getCharacters } from "../actions";
import { useDispatch } from "react-redux";
import "../../styles/Nav.css";
import Swal from "sweetalert2";

const Nav = () => {
  const dispatch = useDispatch();
  const handleSearch = () => {
    let name = document.querySelector("input").value;
    Swal.fire({
      title: "Searching...",
      text: "Please wait",
      imageUrl: "https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif",
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: "Custom image",
      showConfirmButton: false,
      timer: 2000,
    });
    if (name === "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "You must enter a name",
      });
    } else {
      dispatch(getCharacters({ name }));
    }
  };

  const enProceso = () => {
    Swal.fire({
      icon: "info",
      title: "En proceso...",
      text: "Esta funcionalidad se encuentra en proceso de desarrollo",
    });
  };

  return (
    <div>
      {/* <Link to="/characters/create"> */}
        <button className="button" onClick={enProceso}>Create Character</button>
      {/* </Link> */}
      <Link to="/">
        <button className="button">Landing Page</button>
      </Link>
      <Link to="/about">
        <button className="button">About</button>
      </Link>
      <button
        className="button"
        onClick={() =>
          Swal.fire({
            title: "Welcome to the Rick and Morty App",
            text: "You can search for a character by name, filter by status, species and origin, and create your own character",
            imageUrl:
              "https://www.vodafone.es/c/statics/imagen/img_OG_Rick_y_Morty_T4_V2.jpg",
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: "Custom image",
          })
        }>
        Help
      </button>
      <h1 className="title">Welcome to the Rick and Morty App</h1>
      <div className="search">
        <input type="text" placeholder="Search by name"></input>
        <button className="button" onClick={handleSearch}>
          Search
        </button>
      </div>
    </div>
  );
};

export default Nav;
