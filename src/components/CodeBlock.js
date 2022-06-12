import React from 'react'
import PropTypes from 'prop-types'
import Highlight, { defaultProps } from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/oceanicNext'
import styled from '@emotion/styled'

const CodeBlock = ({ children }) => {
  const className = children.props.className || ''
  const matches = className.match(/language-(?<lang>.*)/)
  const language =
    matches && matches.groups && matches.groups.lang ? matches.groups.lang : ''

  return (
    <Highlight
      {...defaultProps}
      code={children.props.children.trim()}
      language={language}
      theme={theme}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <Wrapper>
          {language ? <Hint>{language}</Hint> : null}
          <pre className={className} style={{ ...style, padding: '20px' }}>
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        </Wrapper>
      )}
    </Highlight>
  )
}

const Wrapper = styled.div`
  position: relative;
  margin: ${48 / 19}rem 0 1rem 0;

  pre {
    margin: 0;
    white-space: break-spaces;
    border-radius: 6px;
  }
`
const Hint = styled.span`
  position: absolute;
  top: 0;
  left: 40px;
  display: flex;
  align-items: center;
  min-height: 32px;
  padding: 0 16px;
  font-size: ${14 / 19}rem;

  font-weight: var(--font-weight-medium);
  text-transform: uppercase;
  background-color: rgb(40, 44, 52);
  border-radius: 8px 8px 0 0;

  transform: translateY(-100%);
`

CodeBlock.propTypes = {
  children: PropTypes.node,
}
export default CodeBlock
