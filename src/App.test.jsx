import { test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from './App'

test("If ABCD exists?", () => {
    render(<App />); 

    const myText = screen.getByText(/abcd/i) // case-insensitive
    expect(myText).toBeInTheDocument()
})