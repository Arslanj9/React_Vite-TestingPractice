import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import API from './API'; 

describe('API Component', () => {
  
  // <<------------- Method for fetch ------------->> 
  beforeEach(() => {
    // Mock fetch to return a successful response
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => [
        { id: 1, name: 'Leanne Graham' },
        { id: 2, name: 'Arslan' },
      ],
    });
  });

  afterEach(() => {
    vi.restoreAllMocks(); // Restore all mocks after each test
  });

  // 1
  it("should contain the text 'User List'", async () => {
    render(<API />);

    const userItem0 = await screen.findByTestId('user-item-0');
    expect(userItem0).toBeInTheDocument();
    expect(userItem0).toHaveTextContent('Leanne Graham');
  });

  // 2
  it("should contain the text: User List", async () => {
    render(<API />);

    const element = await screen.findByText("Arslan")
    expect(element).toBeInTheDocument()
  })
});
