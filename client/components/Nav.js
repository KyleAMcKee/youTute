var React = require('react');
var NavLink = require('react-router-dom').NavLink;

function Nav () {
  <ul className='nav'>
    <li>
      <NavLink exact activeClassName='active' to='/'>
        Home
      </NavLink>
    </li>
  </ul>
}

module.exports = Nav;