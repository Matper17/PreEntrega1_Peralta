import React from "react";
import { Link } from "react-router-dom";
import "./index.css"; 

const HomePageElements = () =>{
    return(
        <ul className="nav nav-tabs" color="dark">
            <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="Todoslosproductos">Todos los productos</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="Motos"> Motos </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="Autos"> Autos </Link>
            </li>
        </ul>
    )
}

export default HomePageElements; 