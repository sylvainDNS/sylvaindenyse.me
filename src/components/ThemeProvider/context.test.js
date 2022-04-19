import * as themeContext from './context'

describe('theme context', () => {
  describe('reduces the toggleDyslexicFont action', () => {
    test('sets dyslexic font if the current font is different', () => {
      const action = themeContext.actions.toggleDyslexicFont()
      const initialState = {
        ...themeContext.INITIAL_STATE,
        font: themeContext.FONT.VISUALLY_IMPAIRED,
      }
      const actual = themeContext.reducer(initialState, action)
      const expected = {
        ...initialState,
        font: themeContext.FONT.DYSLEXIC,
      }

      expect(actual).toEqual(expected)
    })

    test('otherwise sets the default font', () => {
      const action = themeContext.actions.toggleDyslexicFont()
      const initialState = {
        ...themeContext.INITIAL_STATE,
        font: themeContext.FONT.DYSLEXIC,
      }
      const actual = themeContext.reducer(initialState, action)
      const expected = {
        ...initialState,
        font: themeContext.FONT.DEFAULT,
      }

      expect(actual).toEqual(expected)
    })
  })

  describe('reduces the toggleVisuallyImpairedFont action', () => {
    test('sets visually impaired font if the current font is different', () => {
      const action = themeContext.actions.toggleVisuallyImpairedFont()
      const initialState = {
        ...themeContext.INITIAL_STATE,
        font: themeContext.FONT.DYSLEXIC,
      }
      const actual = themeContext.reducer(initialState, action)
      const expected = {
        ...initialState,
        font: themeContext.FONT.VISUALLY_IMPAIRED,
      }

      expect(actual).toEqual(expected)
    })

    test('otherwise sets the default font', () => {
      const action = themeContext.actions.toggleVisuallyImpairedFont()
      const initialState = {
        ...themeContext.INITIAL_STATE,
        font: themeContext.FONT.VISUALLY_IMPAIRED,
      }
      const actual = themeContext.reducer(initialState, action)
      const expected = {
        ...initialState,
        font: themeContext.FONT.DEFAULT,
      }

      expect(actual).toEqual(expected)
    })
  })

  test('reduces the resetFont action', () => {
    const action = themeContext.actions.resetFont()
    const initialState = {
      ...themeContext.INITIAL_STATE,
      font: themeContext.FONT.DYSLEXIC,
    }
    const actual = themeContext.reducer(initialState, action)
    const expected = {
      ...initialState,
      font: themeContext.FONT.DEFAULT,
    }

    expect(actual).toEqual(expected)
  })
})
