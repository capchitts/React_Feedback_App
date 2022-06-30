import React from 'react'
import PropTypes from 'prop-types'

function Header({text, bgColor , textColor}) {

  const headerStyle = {
    backgroundColor:bgColor,
    color:textColor,
  }
  return (
    <header>
        <div className='container' style={headerStyle}>
            <h2>{text}</h2>
      </div>
    </header>
    
  )
}

Header.propTypes = {
    text: PropTypes.string,
    bgColor:PropTypes.string,
    textColor:PropTypes.string,
}

Header.defaultProps = {
    text:'Feedback UI',
    bgColor:'rgba(0,0,0,0.4)',
    textColor:'#ff6a95',
}

export default Header
