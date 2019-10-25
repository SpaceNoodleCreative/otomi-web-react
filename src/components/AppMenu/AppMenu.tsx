import * as React from 'react'
import { Route, Link } from 'react-router-dom'

const AppMenu = () => (
  <nav>
    <ul>
      <ListItemLink label="Home" to="/" />
      <ListItemLink label="Sign up" to="/signup/step1" />
      <ListItemLink label="Log in" to="/login" />
    </ul>
  </nav>
)

const ListItemLink = ({ label, to, ...rest }) => (
  <Route
    path={to}
    children={({ match }) => (
      <li className={match ? 'active' : ''}>
        <Link to={to} {...rest}>
          {label}
        </Link>
      </li>
    )}
  />
)

export default AppMenu
