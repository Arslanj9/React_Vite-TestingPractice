import { render, screen } from '@testing-library/react';
import { test, expect } from 'vitest'
import Props from './Props';

test('displays the correct greeting message based on props', () => {
  render(<Props message="Good Morning" />);
  const messageElement = screen.getByText(/Good Morning/i);
  expect(messageElement).toBeInTheDocument();
});
