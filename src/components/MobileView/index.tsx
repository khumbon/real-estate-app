import * as React from 'react';
import Row from '../Row';
import Container from '../Container';
import ImageContainer from '../ImageContainer';
import Image from 'next/image';
import { ListingType } from '../../types';
import ListingDetails from '../ListingDetails';
import ListingImage from '../ListingImage';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Text from '../Text';

interface MobileViewProps {
  listing: ListingType;
}
const MobileView = ({ listing }: MobileViewProps) => {
  return (
    <Container flexDirection="column" classname="listingData">
      <Row classname="listingImageRow">
        <ListingImage description={listing.description} pictures={listing.pictures} floorPlans={listing.floorPlans} />
      </Row>
      <Row classname="listingDetailsRow">
        <Accordion>
          <AccordionSummary
            expandIcon={
              <Text classname="plusSymbol" weight="bold">
                +
              </Text>
            }
          >
            <Text classname="listingAccordingHeading">Listing Details</Text>
          </AccordionSummary>
          <AccordionDetails>
            <ListingDetails listing={listing} />
          </AccordionDetails>
        </Accordion>
      </Row>
      <Row classname="realtor">
        <Accordion>
          <AccordionSummary
            expandIcon={
              <Text classname="plusSymbol" weight="bold">
                +
              </Text>
            }
          >
            <Text classname="listingAccordingHeading">Realtor</Text>
          </AccordionSummary>
          <AccordionDetails>
            <ImageContainer classname="realtorImage">
              <Image src={listing.realtor.logo} alt={listing.realtor.name} width={116} height={70} />
            </ImageContainer>
          </AccordionDetails>
        </Accordion>
      </Row>
    </Container>
  );
};

export default MobileView;
