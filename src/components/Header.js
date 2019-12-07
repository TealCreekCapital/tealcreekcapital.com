import React from 'react'
import PropTypes from 'prop-types'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <img src="images/feather.svg"></img>
        </div>
        <div className="content">
            <div className="inner">
                <h1>Teal Creek Capital Partners</h1>
                <p>Creativity. Agility. Opportunism. We offer shareholders diversified exposure to the real estate sector through our actively managed
                investments in emerging and established markets. Fly with the teal.</p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('intro')}}>about us</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('properties')}}>properties</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>contact</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
