import { render, screen } from '@testing-library/react';
import LoadingSection from './LoadingSection';

test('renders learn react link', () => {
  render(<LoadingSection />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
