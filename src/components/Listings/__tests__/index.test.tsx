import * as React from 'react';
import { render } from '@testing-library/react';
import Listings from '..';
import { axe } from 'jest-axe';

describe('Listings component', () => {
  const { container } = render(<Listings />);
  it('renders the Listings component', () => {
    expect(container.firstChild).toMatchSnapshot();
  });
  it('renders the Listings with no a11y violations', async () => {
    const results = await axe(container.innerHTML);
    expect(results).toHaveNoViolations();
  });
});
