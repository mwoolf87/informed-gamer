import React from 'react'
import {Link} from 'react-router-dom'
export default function Navigation() {
    return (
        <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/favorites">Favorites</Link>
            <Link to="/about">About Me</Link>
        </div>
    )
}
