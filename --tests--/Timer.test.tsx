import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TimerDisplay from '../src/app/components/TimerDisplay';
describe('TimerDisplay Component', () => {
  it('should render the correct time', () => {
    render(<TimerDisplay time={10} />);
    const timeElement = screen.getByText(/10/i);
    expect(timeElement).toBeInTheDocument();
  });
});