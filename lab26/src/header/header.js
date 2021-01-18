import React from 'react';
import '../header/header.scss'

class Header extends React.Component {
  render() {
    return(
      <h1>RESTy</h1>
      <nav>
        <ul>
          <li>
            <Link data-testid="homelink" to='/'></Link>
          </li>
          <li>
            <NavLink data-testid="historylink" to='/history'>History</NavLink>
          </li>
          <li>
            <NavLink data-testid="helplink" to='/help'>Help</NavLink>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Header;