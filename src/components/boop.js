import React from 'react'
import PropTypes from 'prop-types'
import { animated } from 'react-spring'
import { useBoop } from '../utils/hooks'

const Boop = ({ children, ...boopConfig }) => {
  const [style, trigger] = useBoop(boopConfig)

  return (
    <animated.span onMouseEnter={trigger} style={style}>
      {children}
    </animated.span>
  )
}

Boop.propTypes = {
  children: PropTypes.node,
}

export default Boop
