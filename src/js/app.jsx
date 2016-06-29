import React from 'react'
import ReactDOM from 'react-dom'
import { Scrollspy } from './lib/Scrollspy.jsx'
import { browserHistory, Router, Route, Link } from 'react-router'

const style = {
  height: '900px',
}

const nestedStyle = {
  height: '300px',
  padding: '0 20px',
}

const Nav = React.createClass({
  render () {
    return (
      <nav>
        <ul>
          <li><Link to="/sample1">sample 1</Link></li>
          <li><Link to="/sample2">sample 2</Link></li>
        </ul>
        <Scrollspy items={ ['section-1', 'section-2', 'section-3'] } currentClassName="is-current" className="nav-list">
          <li><a href="#section-1">section 1</a></li>
          <li><a href="#section-2">section 2</a></li>
          <li>
            <a href="#section-3">section 3</a>
            <nav>
              <Scrollspy items={ ['nested-1', 'nested-2', 'nested-3'] } currentClassName="is-current">
                <li><a href="#nested-1">nested 1</a></li>
                <li><a href="#nested-2">nested 2</a></li>
                <li><a href="#nested-3">nested 3</a></li>
              </Scrollspy>
            </nav>
          </li>
        </Scrollspy>
      </nav>
    )
  }
})

const Sample1 = React.createClass({
  render () {
    return (
      <div>
        <div>
          <section style={ style } id="section-1">sample 1</section>
          <section style={ style } id="section-2">section 2</section>
          <section style={ style } id="section-3">
            <div style={ nestedStyle } id="nested-1">
              section 3 / nested 1
            </div>
            <div style={ nestedStyle } id="nested-2">
              section 3 / nested 2
            </div>
            <div style={ nestedStyle } id="nested-3">
              section 3 / nested 3
            </div>
          </section>
        </div>
        <div className="nav-list-wrapper">
          <Nav />
        </div>
      </div>
    )
  }
})

const Sample2 = React.createClass({
  render () {
    return (
      <div>
        <div>
          <section style={ style } id="section-1">sample 2</section>
          <section style={ style } id="section-2">section 2</section>
          <section style={ style } id="section-3">
            <div style={ nestedStyle } id="nested-1">
              section 3 / nested 1
            </div>
            <div style={ nestedStyle } id="nested-2">
              section 3 / nested 2
            </div>
            <div style={ nestedStyle } id="nested-3">
              section 3 / nested 3
            </div>
          </section>
        </div>
        <div className="nav-list-wrapper">
          <Nav />
        </div>
      </div>
    )
  }
})

const App = React.createClass({

  render () {
    return (
      <div>
        <div>
          <section style={ style } id="section-1">index</section>
          <section style={ style } id="section-2">section 2</section>
          <section style={ style } id="section-3">
            <div style={ nestedStyle } id="nested-1">
              section 3 / nested 1
            </div>
            <div style={ nestedStyle } id="nested-2">
              section 3 / nested 2
            </div>
            <div style={ nestedStyle } id="nested-3">
              section 3 / nested 3
            </div>
          </section>
        </div>
        <div className="nav-list-wrapper">
          <Nav />
        </div>
      </div>
    )
  }
})


ReactDOM.render(
  (
    <Router history={ browserHistory }>
      <Route path="/" component={ App } />
      <Route path="/sample1" component={ Sample1 } />
      <Route path="/sample2" component={ Sample2 } />
    </Router>
  ),
  document.getElementById('js-app')
)
