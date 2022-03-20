import React from 'react'
import { render } from '@testing-library/react'
import Login from './login'

describe('Login component', () => {
  test('should not render spinner and error on start', () => {
    const screen = render(<Login />)
    const errorWrap = screen.getByTestId('error-wrap')
    expect(errorWrap.childElementCount).toBe(0)
  })
})
