import React from "react";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { getCharacters } from "../actions";

export default function Pagination( nextPage, prevPage) {
    const dispatch = useDispatch();
    const handleNextPage = () => {
        if (nextPage) {
            dispatch(getCharacters({ page: nextPage }));
        } else {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "No hay más personajes!",
            });
        }
    };

    const handlePrevPage = () => {
        if (prevPage) {
            dispatch(getCharacters({ page: prevPage }));
        } else {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "No hay más personajes!",
            });
        }
    };


    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <button className="btn btn-primary" onClick={handlePrevPage}>Prev</button>
                    <button className="btn btn-primary" onClick={handleNextPage}>Next</button>
                </div>
            </div>
        </div>
    )
}