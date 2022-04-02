import React from 'react'
import { render } from '@testing-library/react'
import Login from './login'

describe('Login component', () => {
  test('should start with initial state', () => {
    const screen = render(<Login />)
    const errorWrap = screen.getByTestId('error-wrap')
    expect(errorWrap.childElementCount).toBe(0)

    const button = screen.getByTestId('submit') as HTMLButtonElement
    expect(button.disabled).toBe(true)
  })
})
