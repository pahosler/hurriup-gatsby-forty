import React from 'react'
import Link from 'gatsby-link'
import Logo from '../assets/images/hurriup-003.png'

const Header = props => (
  <header id="header" className="alt">
    <Link to="/" className="logo">
      <img src={Logo} />
    </Link>
    <nav>
      <a className="menu-link" onClick={props.onToggleMenu} href="javascript:;">
        Menu
      </a>
    </nav>
  </header>
)

Header.propTypes = {
  onToggleMenu: React.PropTypes.func,
}

export default Header
