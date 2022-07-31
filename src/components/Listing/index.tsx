import * as React from 'react';
import Container from '../Container';
import Card from '../Card';
import { colours } from '../../constants/colours';
import { ListingType } from '../../types';
import Row from '../Row';
import ListingFooter from '../ListingFooter';
import DesktopView from '../DesktopView';
import { useMediaQuery } from 'react-responsive';
import MobileView from '../MobileView';

interface ListingProps {
  listing: ListingType;
}
const Listing = ({ listing }: ListingProps) => {
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
  return (
    <Container classname="listingContainer" width={58}>
      <Card backgroundColour={colours.white} classname="listingCard">
        <Container flexDirection="column" classname="listingContainer">
          <Row classname="primaryInformation">
            {isMobile ? <MobileView listing={listing} /> : <DesktopView listing={listing} />}
          </Row>
          <Row classname="supplementaryInformation">
            <ListingFooter listedOn={listing.listedOn} />
          </Row>
        </Container>
      </Card>
    </Container>
  );
};

export default Listing;
