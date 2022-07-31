import * as React from 'react';
import ImageContainer from '../ImageContainer';
import Image from 'next/image';
import Card from '../Card';
import { colours } from '../../constants/colours';
import IconInfo from '../IconInfo';
import { faBath, faCamera } from '@fortawesome/free-solid-svg-icons';
import { ListingImages } from '../../types';

interface ListingImageProps {
  description: string;
  pictures: ListingImages;
  floorPlans: ListingImages;
}
const ListingImage = (listingImageProps: ListingImageProps) => {
  const { description, pictures, floorPlans } = listingImageProps;
  return (
    <>
      <ImageContainer classname="listingImageContainer">
        <Image src={pictures[0].src} alt={description} width={465} height={310} loading="lazy" />
      </ImageContainer>

      <div style={{ position: 'absolute', bottom: '20px', right: '30px' }}>
        <Card
          backgroundColour={colours.black}
          borderRadius={2}
          borderColour={colours.black}
          classname="listingCard"
          opacity={99}
        >
          <IconInfo icon={faBath} text={String(floorPlans.length)} contentColour={colours.white} />
        </Card>
      </div>
      <div style={{ position: 'absolute', bottom: '20px', right: '80px' }}>
        <Card
          backgroundColour={colours.black}
          borderRadius={2}
          borderColour={colours.black}
          classname="listingCard"
          opacity={95}
        >
          <IconInfo icon={faCamera} text={String(pictures.length)} contentColour={colours.white} />
        </Card>
      </div>
    </>
  );
};

export default ListingImage;
