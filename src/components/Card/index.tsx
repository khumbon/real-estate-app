import * as React from 'react';
import styled from 'styled-components';
import { colours } from '../../constants/colours';

interface CardProps {
  backgroundColour: string;
  opacity?: number;
  borderRadius?: number;
  borderColour?: string;
  children: JSX.Element;
  classname: string;
}

const StyledCard = styled.div<CardProps>`
  align: justify;
  height: 100%;
  width: 100%;
  display: flex;
  overflow: hidden;
  background-color: ${({ backgroundColour, opacity }) => `${backgroundColour}${opacity}`}};
  opacity: ${({ opacity }) => opacity};
  border: 1px solid  ${({ borderColour, opacity }) =>
    borderColour ? `${borderColour}${opacity}` : colours.greyLight}};
  border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : 12)}px;
  box-shadow: 0 1px 0 0 light-grey;
`;

const Card = (props: CardProps) => <StyledCard {...props} className={props.classname} />;

export default Card;
