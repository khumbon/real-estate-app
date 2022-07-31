import * as React from 'react';
import { render } from '@testing-library/react';
import Container from '..';
import { axe } from 'jest-axe';

describe('Container component', () => {
  const { container } = render(<Container classname="testContainer">ChildComponent</Container>);

  it('renders the Container component', () => {
    expect(container.firstChild).toMatchSnapshot();
  });
  it('renders the Container with no a11y violations', async () => {
    const results = await axe(container.innerHTML);
    expect(results).toHaveNoViolations();
  });
});
