import * as React from 'react';
import styled from 'styled-components';
import { colourValues } from '../../constants/colours';

interface ContainerProps {
  children: JSX.Element | JSX.Element[] | string;
  width?: number;
  flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  backgroundColour?: colourValues;
  opacity?: number;
  gutter?: number;
  classname: string;
}

const StyledContainer = styled.div<ContainerProps>`
  width: ${({ width }) => (width ? `${width}%` : `100%`)};
  padding-right: ${({ gutter }) => gutter}px;
  padding-left: ${({ gutter }) => gutter}px;
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection};
  background-color: ${({ backgroundColour }) => backgroundColour};
  opacity: ${({ opacity }) => opacity};
  margin-top: 10px;
`;

const Container = (props: ContainerProps) => <StyledContainer {...props} className={props.classname} />;

export default Container;
