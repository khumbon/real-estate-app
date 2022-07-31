import * as React from 'react';
import { render } from '@testing-library/react';
import Card from '..';
import { colours } from '../../../constants/colours';
import { axe } from 'jest-axe';

describe('Card component', () => {
  const { container } = render(
    <Card classname="testCard" backgroundColour={colours.grey}>
      <div />
    </Card>,
  );
  it('renders the Card component', () => {
    expect(container.firstChild).toMatchSnapshot();
  });
  it('renders the Card with no a11y violations', async () => {
    const results = await axe(container.innerHTML);
    expect(results).toHaveNoViolations();
  });
});
