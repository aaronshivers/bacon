import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// import { createBrowserHistory } from 'history'
import Nav from '../components/Nav'
import Index from '../components/Index'
import About from '../components/About'
import Contact from '../components/Contact'
import NotFound from '../components/NotFound'

// export const history = createBrowserHistory()

const AppRouter = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route path="/" exact component={ Index } />
        <Route path="/about" component={ About } />
        <Route path="/contact" component={ Contact } />
        <Route component={ NotFound } />
      </Switch>
    </div>
  </Router>
)

export default AppRouter
