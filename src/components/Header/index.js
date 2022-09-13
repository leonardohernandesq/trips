import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import './style.css'

export default function Header() {

    const reserveSize = useSelector(state => state.reserve.length)

    return (
        <header className='container'>
            <Link to="/">
                <img className='logo' src={logo} alt="logo da empresa sendo um avião com rastros do voo" />
            </Link>

            <Link to="/reservas" className='reserva'>
                <div>
                    <strong>Minhas Reservas</strong>
                    <span>{reserveSize <= 1 ? `${reserveSize} reserva` : `${reserveSize} reservas`}</span>
                </div>
            </Link>
        </header>
    );
}