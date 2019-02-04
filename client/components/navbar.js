import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'

const Navbar = ({handleClick, isLoggedIn}) => (
  <div className="main-header">
    <div className="main-brand">
      <Link to="/" className="main-brand__logo">
        TYLER ZOIDIS
      </Link>
    </div>
    <nav className="main-nav">
      <div className="main-nav__items">
        <Link to="/professional" className="main-nav__item">
          Professional
        </Link>
        <Link to="/blog" className="main-nav__item">
          Blog
        </Link>
        <Link to="/about" className="main-nav__item">
          About
        </Link>
        <Link to="/contact" className="main-nav__item">
          Contact
        </Link>
        {/*isLoggedIn ? (
          <div>
            The navbar will show these links after you log in
            <Link to="/myProfile" className="main-nav__item">
              My Profile
            </Link>
            <a href="#" onClick={handleClick} className="main-nav__item">
              Logout
            </a>
          </div>
        ) : (
          <div>
            The navbar will show these links before you log in
            <Link to="/login" className="main-nav__item">
              Login
            </Link>
            <Link to="/signup" className="main-nav__item">
              Sign Up
            </Link>
          </div>
        )*/}
      </div>
    </nav>
  </div>
)

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
