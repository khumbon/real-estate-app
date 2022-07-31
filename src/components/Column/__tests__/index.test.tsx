import * as React from 'react';
import { render } from '@testing-library/react';
import Column from '..';
import { axe } from 'jest-axe';

describe('Column component', () => {
  const { container } = render(<Column className="test">ChildComponent</Column>);
  it('renders the Column component', () => {
    expect(container.firstChild).toMatchSnapshot();
  });
  it('renders the Column with no a11y violations', async () => {
    const results = await axe(container.innerHTML);
    expect(results).toHaveNoViolations();
  });
});
