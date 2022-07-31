import * as React from 'react';
import styled from 'styled-components';

interface ImageContainerProps {
  classname: string;
  children: JSX.Element | JSX.Element[];
  position?: string;
  top?: string;
  right?: string;
}

const StyledImageContainer = styled.div<ImageContainerProps>`
  text-align: center;
  justify-content: center;
  z-index: 0 & img {
    height: auto;
  }
`;

const ImageContainer = (props: ImageContainerProps) => <StyledImageContainer {...props} classname={props.classname} />;

export default ImageContainer;
