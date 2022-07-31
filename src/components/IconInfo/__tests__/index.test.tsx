import * as React from 'react';
import { render } from '@testing-library/react';
import IconInfo from '..';
import { faBath } from '@fortawesome/free-solid-svg-icons';
import { colours } from '../../../constants/colours';
import { axe } from 'jest-axe';

describe('IconInfo component', () => {
  const { container } = render(<IconInfo icon={faBath} text="Icon test" contentColour={colours.greyDark} />);
  it('renders the IconInfo component', () => {
    expect(container.firstChild).toMatchSnapshot();
  });
  it('renders the IconInfo with no a11y violations', async () => {
    const results = await axe(container.innerHTML);
    expect(results).toHaveNoViolations();
  });
});
