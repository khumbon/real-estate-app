import * as React from 'react';
import { Colours, colourValues } from '../../constants/colours';
import Container from '../Container';
import Text from '../Text';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// TODO use container interface and extend
interface IconInfoProps {
  icon: IconDefinition;
  text: string;
  contentColour: colourValues;
  backgroundColour?: colourValues;
  opacity?: number;
  key?: number;
}

const IconInfo = (props: IconInfoProps) => {
  const { icon, text, backgroundColour, contentColour, opacity } = props;
  return (
    <Container backgroundColour={backgroundColour} opacity={opacity} classname="iconContainer">
      <FontAwesomeIcon color={contentColour} icon={icon} />
      <Text colour={contentColour} classname="iconAdjacentText" withIcon={true}>
        {text}
      </Text>
    </Container>
  );
};

export default IconInfo;
