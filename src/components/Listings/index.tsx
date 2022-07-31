import * as React from 'react';
import Container from '../Container';
import Text from '../Text';
import { ListingType } from '../../types';
import Listing from '../Listing';

const Listings = () => {
  const [listings, setListings] = React.useState<ListingType[]>();
  const [loading, setLoading] = React.useState<boolean>(true);
  const [error, setError] = React.useState<string>();

  React.useEffect(() => {
    fetch('http://localhost:3000/listings')
      .then((result) => result.json())
      .then((listings) => {
        setListings(listings);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  return (
    <Container classname="allListingsContainer">
      {listings ? (
        listings.map((listing, idx) => <Listing key={idx} listing={listing} />)
      ) : error ? (
        <Text classname="errorMessage">Something has gone wrong</Text>
      ) : (
        loading && <p>Please hold, we are fetching your data</p>
      )}
    </Container>
  );
};

export default Listings;
