import React from 'react'
import PropTypes from 'prop-types'

const testing = props => {
  return (
    <div>testing</div>
  )
}

testing.propTypes = {
    nanme:PropTypes.string.isRequired
}

export default testing