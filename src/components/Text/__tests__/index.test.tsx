import * as React from 'react';
import { render } from '@testing-library/react';
import Text from '..';
import { axe } from 'jest-axe';

describe('Text component', () => {
  const { container } = render(<Text classname="textTest">Testing text component</Text>);
  it('renders the Text component', () => {
    expect(container.firstChild).toMatchSnapshot();
  });
  it('renders the Text with no a11y violations', async () => {
    const results = await axe(container.innerHTML);
    expect(results).toHaveNoViolations();
  });
});
