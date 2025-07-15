import React from 'react';
import { render, screen } from '@testing-library/react';
import FeatureGrid from '../FeatureGrid';

// Mock framer-motion to avoid animation issues in tests
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: React.ComponentProps<'div'>) => <div {...props}>{children}</div>,
    h2: ({ children, ...props }: React.ComponentProps<'h2'>) => <h2 {...props}>{children}</h2>,
    p: ({ children, ...props }: React.ComponentProps<'p'>) => <p {...props}>{children}</p>,
  },
}));

describe('FeatureGrid', () => {
  it('renders default features correctly', () => {
    render(<FeatureGrid />);
    
    expect(screen.getByText('Why Choose ClearCircuit?')).toBeInTheDocument();
    expect(screen.getByText('Code-Compliant')).toBeInTheDocument();
    expect(screen.getByText('Installs in 5 Minutes')).toBeInTheDocument();
    expect(screen.getByText('Durable 10+ Years')).toBeInTheDocument();
    expect(screen.getByText('85% of Electricians Recommend')).toBeInTheDocument();
  });

  it('renders custom title and subtitle', () => {
    render(
      <FeatureGrid 
        title="Custom Title" 
        subtitle="Custom Subtitle"
      />
    );
    
    expect(screen.getByText('Custom Title')).toBeInTheDocument();
    expect(screen.getByText('Custom Subtitle')).toBeInTheDocument();
  });

  it('renders in steps variant', () => {
    render(<FeatureGrid variant="steps" />);
    
    expect(screen.getByText('Step 1')).toBeInTheDocument();
    expect(screen.getByText('Step 2')).toBeInTheDocument();
    expect(screen.getByText('Step 3')).toBeInTheDocument();
    expect(screen.getByText('Step 4')).toBeInTheDocument();
  });
}); 