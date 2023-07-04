import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from '../ItemListContainer/CartWidget'
import HomePageElements from '../Tabs'

const NavBar = () =>{
    return(
        <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
                <Link className="navbar-brand" to="Inicio">MightyRides</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle" to="nosotros" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Nosotros
                        </Link>
                        <ul className="dropdown-menu bg-red" aria-labelledby="navbarDropdown">
                            <li><Link className="dropdown-item" to="sobreNosotros">Sobre nosotros</Link></li>
                            <li><Link className="dropdown-item" to="contacto">Contacto</Link></li>
                        </ul>
                    </li>
                </ul>
                <CartWidget/>
            </div>
            </div>
        </nav>
        <HomePageElements/>
        </>
  )
}

export default NavBar; 

