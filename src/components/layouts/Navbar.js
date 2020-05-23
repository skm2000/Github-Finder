import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


const Navbar = ({ icon, title }) =>{

    // const { icon, title } = props
    return (
        <div className="navbar bg-primary">
            <h1>
            <i className={icon}></i>{title}
            </h1>
            <ul>
                <Link to='/'>Home</Link>
                <Link to='/About'>About</Link>
            </ul> 
        </div>
    )
}

Navbar.defaultProps = {
    title: ' Github Finder',
    icon: 'fab fa-github-alt'
}

//To check the type 
Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
}

export default Navbar
