import { useEffect } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

const portalRoot =
  typeof document !== `undefined` ? document.getElementById('portal') : null
const element =
  typeof document !== `undefined` ? document.createElement('div') : null

const Portal = ({ children }) => {
  useEffect(() => {
    portalRoot.appendChild(element)

    return () => {
      portalRoot.removeChild(element)
    }
  }, [])

  if (element) return ReactDOM.createPortal(children, element)

  return null
}

Portal.propTypes = {
  children: PropTypes.node,
}
export default Portal
