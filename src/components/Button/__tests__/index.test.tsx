import * as React from 'react';
import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import Button from '..';

expect.extend(toHaveNoViolations);

describe('Button component', () => {
  const { container, getByText } = render(<Button classname="test" text="TestButton" />);
  it('renders the Button component', () => {
    expect(container.firstChild).toMatchSnapshot();
    expect(getByText('TestButton')).toBeTruthy();
  });
  it('renders the Button with no a11y violations', async () => {
    const results = await axe(container.innerHTML);
    expect(results).toHaveNoViolations();
  });
});
