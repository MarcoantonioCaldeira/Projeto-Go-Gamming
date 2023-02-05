import { render, screen } from '@testing-library/react';
import Inicio from './App';

test('renders learn react link', () => {
  render(<Inicio />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
