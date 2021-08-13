import PropTypes from 'prop-types'
import React from 'react'
import logo from '../images/logo.png'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <img src={logo} alt="" style={{height:'60%', width:'auto', marginTop:'15%'}}/>
    </div>
    <div className="content">
      <div className="inner">
        <h1>MORE RAIN</h1>
        <p>
          Songs of worship 
        <br/>
          All for Jesus. All for His Church. 
        </p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('about')
            }}
          >
            About
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('music')
            }}
          >
            Music
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('links')
            }}
          >
            Links
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
