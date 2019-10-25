import * as React from 'react'
import './styles/main.scss'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from 'components/Home/Home'
import SignupStep1 from '~components/SignUp/SignupStep1'

export default () => {
  return (
    <React.Fragment>
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/signup/step1" component={SignupStep1} />
      </Router>
    </React.Fragment>
  )
}
