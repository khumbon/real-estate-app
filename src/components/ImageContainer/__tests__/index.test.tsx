import * as React from 'react';
import { render } from '@testing-library/react';
import ImageContainer from '..';
import { axe } from 'jest-axe';

describe('ImageContainer component', () => {
  const { container } = render(
    <ImageContainer classname="testImageContainer">
      <div />
    </ImageContainer>,
  );
  it('renders the ImageContainer component', () => {
    expect(container.firstChild).toMatchSnapshot();
  });
  it('renders the ImageContainer with no a11y violations', async () => {
    const results = await axe(container.innerHTML);
    expect(results).toHaveNoViolations();
  });
});
