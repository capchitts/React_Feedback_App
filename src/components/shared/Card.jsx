import React from 'react'
import PropTypes from 'prop-types'

function Card({children, reverse}) {
  return (
    <div className={`card + ${reverse && 'reverse'}`}>{children}</div>
  )
}


Card.defaultProps = {
    revers:false
}
Card.propTypes = {
    children:PropTypes.node.isRequired,

}
export default Card
