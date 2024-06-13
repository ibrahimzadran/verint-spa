import React from 'react';
import { render, screen } from '@testing-library/react';
import Root from './root.component';

test('renders app2', () => {
    render(<Root />);
    expect(screen.getByText('App 2')).toBeInTheDocument();
});
