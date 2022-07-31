import * as React from 'react';
import { render } from '@testing-library/react';
import Listing from '..';
import { axe } from 'jest-axe';
import { statusOptions } from '../../../types';

describe('Listing component', () => {
  const listing = {
    id: 10,
    guidePrice: 425000,
    numberOfBeds: 1,
    numberOfBaths: 1,
    numberOfReceps: 1,
    description: '1 bed flat for sale',
    address: 'Mansford Street, London E2',
    location: [
      { distance: 0.3, place: 'Cambridge Heath', type: 'rail' },
      { distance: 0.4, place: 'Bethnal Heath', type: 'underground' },
    ],
    pictures: [{ src: 'https://lid.zoocdn.com/u/2400/1800/dce68602b49520479afe1e9ac8c5b085542676d5.jpg' }],
    floorPlans: [],
    realtor: {
      name: 'Purple Bricks',
      logo: 'https://st.zoocdn.com/zoopla_static_agent_logo_(584439).png',
    },
    listedOn: '12th May 2020',
    status: statusOptions.active,
  };
  const { container } = render(<Listing listing={listing} />);
  it('renders the Listing component', () => {
    expect(container.firstChild).toMatchSnapshot();
  });
  it('renders the Listing with no a11y violations', async () => {
    const results = await axe(container.innerHTML);
    expect(results).toHaveNoViolations();
  });
});
