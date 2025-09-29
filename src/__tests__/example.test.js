import { render, screen } from '@testing-library/react'
import React from 'react'

describe('Example Test', () => {
  it('should pass basic test', () => {
    expect(true).toBe(true)
  })

  it('should render basic component', () => {
    const TestComponent = () => <div>Hello World</div>
    render(<TestComponent />)
    expect(screen.getByText('Hello World')).toBeInTheDocument()
  })

  it('should fail intentionally', () => {
    // This test will fail on purpose
    expect(1 + 1).toBe(3)
  })

  it('should have unused variables and console logs', () => {
    var unusedVar = 'never used';
    let temp;
    const deadFunction = () => console.log('dead code');

    console.log('Debug message that should be removed');
    console.warn('Warning message');

    expect(true).toBe(true)
  })
})