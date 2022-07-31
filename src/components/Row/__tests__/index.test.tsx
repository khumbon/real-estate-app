import * as React from 'react';
import { render } from '@testing-library/react';
import Row from '..';
import { axe } from 'jest-axe';

describe('Row component', () => {
  const { container } = render(
    <Row classname="testRow">
      <div />
    </Row>,
  );
  it('renders the Row component', () => {
    expect(container.firstChild).toMatchSnapshot();
  });
  it('renders the Row with no a11y violations', async () => {
    const results = await axe(container.innerHTML);
    expect(results).toHaveNoViolations();
  });
});
