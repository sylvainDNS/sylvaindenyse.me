import React, { createContext, useContext, useReducer } from 'react'
import PropTypes from 'prop-types'
import { isBrowser } from '../../utils'

export const FONT = {
  DEFAULT: 'default',
  DYSLEXIC: 'dyslexic',
  VISUALLY_IMPAIRED: 'visually_impaired',
}

const ACTION_TYPE = {
  RESET_FONT: 'resetFont',
  TOGGLE_DYSLEXIC_FONT: 'toggleDyslexicFont',
  TOGGLE_VISUALLY_IMPAIRED_FONT: 'toggleVisuallyImpairedFont',
}

export const INITIAL_STATE = {
  font: isBrowser ? window.localStorage.getItem('font') : FONT.DEFAULT,
}

const StateContext = createContext()
const DispatchContext = createContext()

export const actions = {
  resetFont: () => ({ type: ACTION_TYPE.RESET_FONT }),
  toggleDyslexicFont: () => ({ type: ACTION_TYPE.TOGGLE_DYSLEXIC_FONT }),
  toggleVisuallyImpairedFont: () => ({
    type: ACTION_TYPE.TOGGLE_VISUALLY_IMPAIRED_FONT,
  }),
}

export const reducer = (state = INITIAL_STATE, action) => {
  const { type } = action

  switch (type) {
    case ACTION_TYPE.TOGGLE_DYSLEXIC_FONT: {
      const isDyslexic = state.font === FONT.DYSLEXIC
      const font = isDyslexic ? FONT.DEFAULT : FONT.DYSLEXIC

      return { ...state, font }
    }
    case ACTION_TYPE.TOGGLE_VISUALLY_IMPAIRED_FONT: {
      const isVisuallyImpaired = state.font === FONT.VISUALLY_IMPAIRED
      const font = isVisuallyImpaired ? FONT.DEFAULT : FONT.VISUALLY_IMPAIRED

      return { ...state, font }
    }
    case ACTION_TYPE.RESET_FONT:
      return {
        ...state,
        font: FONT.DEFAULT,
      }
    default: {
      throw new Error(`Unhandled action type: ${type}`)
    }
  }
}

export const ThemeContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE)

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  )
}
ThemeContextProvider.propTypes = {
  children: PropTypes.node,
}

export const useThemeState = () => {
  const context = useContext(StateContext)
  if (context === undefined) throw new Error(`useThemeState ${errorSuffix}`)

  return context
}
export const useThemeDispatch = () => {
  const context = useContext(DispatchContext)
  if (context === undefined) throw new Error(`useThemeDispatch ${errorSuffix}`)

  return context
}

const errorSuffix = 'must be used within ThemeContextProvider'

export const selectors = {
  isVisuallyImpairedFont: state => state.font === FONT.VISUALLY_IMPAIRED,
  isDyslexicFont: state => state.font === FONT.DYSLEXIC,
}

export const useThemeSelector = selector => {
  const state = useThemeState()

  return selector(state)
}
