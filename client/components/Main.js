import React from 'react'
import {Link, HashRouter as Router, Route} from 'react-router-dom'
import Navbar from './Navbar'
import Projects from './Projects'
import AboutMe from './AboutMe'
import Contact from './Contact'

export default class Main extends React.Component {
  render() {
    return (
      <Router>
        <div id="main">
          <div className="column container">
            <div id="header">
              <Link to="/">
                <h1 className="title">Crispina R. Muriel</h1>
              </Link>
            </div>
            <Navbar />
          </div>
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/about" component={AboutMe} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/" component={AboutMe} />
        </div>
      </Router>
    )
  }
}
