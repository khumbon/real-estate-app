import * as React from 'react';
import Column from '../Column';
import Container from '../Container';
import Text from '../Text';
import { colours } from '../../constants/colours';
import { ListingType, statusOptions } from '../../types';
import { numberToCurrency } from '../../helpers';
import IconInfo from '../IconInfo';
import { faBath, faBed, faCouch, faSubway, faTrain } from '@fortawesome/free-solid-svg-icons';
import Row from '../Row';
import Button from '../Button';

interface ListingDetailsProps {
  listing: ListingType;
}

const ListingDetails = ({ listing }: ListingDetailsProps) => {
  const [investment, setInvestment] = React.useState<string>();
  const [listingStatus, setListingStatus] = React.useState<statusOptions>();
  const NearbyLocations = listing.location.map((location, idx: number) => (
    <IconInfo
      key={idx}
      icon={location.type === 'underground' ? faSubway : faTrain}
      text={`${location.distance} miles ${location.place}`}
      contentColour={colours.greyDark}
    />
  ));

  const onCickHandler = () => {
    setInvestment('You have invested in this property!');
  };

  const setStatusHandler = () => {
    setListingStatus(
      listingStatus
        ? listingStatus === 'active'
          ? statusOptions.expired
          : statusOptions.active
        : listing.status === 'active'
        ? statusOptions.expired
        : statusOptions.active,
    );
    fetch(`http://localhost:3000/listings/${listing.id}`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...listing,
        status: listingStatus
          ? listingStatus === 'active'
            ? statusOptions.expired
            : statusOptions.active
          : listing.status === 'active'
          ? statusOptions.expired
          : statusOptions.active,
      }),
    });
  };

  return (
    <Container flexDirection="column" gutter={15} classname="listingDetailsContainer">
      <Row classname="guidePriceTitleRow">
        <Text colour={colours.brandColour} weight="bold" classname="guidePriceTitle">
          Guide Price
        </Text>
      </Row>
      <Row classname="guidePriceTitleRow">
        <Text colour={colours.brandColour} weight="bold" size={'30px'} classname="guidePrice">
          {numberToCurrency(listing.guidePrice, 0)}
        </Text>
      </Row>
      <Container flexDirection="column" classname="listingIconsContainer">
        <Row cols={10} classname="listingIconsRow">
          <Column className="baths">
            <IconInfo icon={faBath} text={String(listing.numberOfBaths)} contentColour={colours.greyDark} />
          </Column>
          <Column className="beds">
            <IconInfo icon={faBed} text={String(listing.numberOfBeds)} contentColour={colours.greyDark} />
          </Column>
          <Column className="receptions">
            <IconInfo icon={faCouch} text={String(listing.numberOfReceps)} contentColour={colours.greyDark} />
          </Column>
        </Row>
      </Container>
      <br />
      <Row classname="listingDescription">
        <Text classname="listingDescription" weight="bold">
          {listing.description}
        </Text>
      </Row>
      <Row classname="listingAddress">
        <Text classname="listingAddressText">{listing.address}</Text>
      </Row>
      <br />
      <Row classname="listingNearbyLocations">{NearbyLocations}</Row>
      <Container classname="investmentContainer" flexDirection="column">
        <Row classname="listingInvestmentButton">
          <Column className="investmentButtonColumn">
            <Button onClick={onCickHandler} text="Investment" classname="investmentButton" />
          </Column>
          <Column className="setStatusButtonColumn">
            <Button
              onClick={setStatusHandler}
              text={
                listingStatus
                  ? listingStatus === 'active'
                    ? 'Mark as expired'
                    : 'Mark as active'
                  : listing.status === 'active'
                  ? 'Mark as expired'
                  : 'Mark as active'
              }
              classname="setStatusButton"
            />
          </Column>
        </Row>
        {investment ? (
          <Row classname="investmentTextRow">
            <Text classname="investmentText" withIcon={true}>
              {investment}
            </Text>
          </Row>
        ) : null}
      </Container>
    </Container>
  );
};

export default ListingDetails;
