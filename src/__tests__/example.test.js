import { render, screen } from '@testing-library/react'

describe('Example Test', () => {
  it('should pass basic test', () => {
    expect(true).toBe(true)
  })

  it('should render basic component', () => {
    const TestComponent = () => <div>Hello World</div>
    render(<TestComponent />)
    expect(screen.getByText('Hello World')).toBeInTheDocument()
  })
})