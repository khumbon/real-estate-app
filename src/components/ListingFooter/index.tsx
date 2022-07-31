import * as React from 'react';
import IconInfo from '../IconInfo';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Column from '../Column';
import Text from '../Text';

interface ListingFooterProps {
  listedOn: string;
}
const ListingFooter = (ListingFooterProps: ListingFooterProps) => {
  const { listedOn } = ListingFooterProps;
  return (
    <>
      <Column className="dateListed" textAlign="left" widthPercentage={85}>
        <Text classname="listedOnText">Listed on {listedOn}</Text>
      </Column>
      <Column className="saveListing" textAlign="right">
        <IconInfo icon={faStar} text="Save" contentColour={'lightBlue'} />
      </Column>
    </>
  );
};

export default ListingFooter;
