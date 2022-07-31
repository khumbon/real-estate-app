import * as React from 'react';
import Column from '../Column';
import Container from '../Container';
import ImageContainer from '../ImageContainer';
import Image from 'next/image';
import { ListingType } from '../../types';
import ListingDetails from '../ListingDetails';
import ListingImage from '../ListingImage';

interface DesktopViewProps {
  listing: ListingType;
}
const DesktopView = ({ listing }: DesktopViewProps) => {
  return (
    <Container flexDirection="row" classname="listingData">
      <Column widthPercentage={45} className="listingImageColumn">
        <ListingImage description={listing.description} pictures={listing.pictures} floorPlans={listing.floorPlans} />
      </Column>
      <Column widthPercentage={40} className="listingDetails">
        <ListingDetails listing={listing} />
      </Column>
      <Column widthPercentage={15} className="realtor">
        <ImageContainer classname="realtorImage">
          <Image src={listing.realtor.logo} alt={listing.realtor.name} width={116} height={70} />
        </ImageContainer>
      </Column>
    </Container>
  );
};

export default DesktopView;
