import { render, fireEvent, screen } from '@testing-library/react';
import StateChange from './StateChange';
import { test, expect } from 'vitest'

test('increments counter on button click', () => {
  render(<StateChange />);
  const button = screen.getByText(/Increment/i);
  
  fireEvent.click(button);

  const counter = screen.getByText(/Count: 1/i);
  expect(counter).toBeInTheDocument();
});
