import * as React from 'react';
import styled from 'styled-components';

interface ColumnProps {
  numberOfCols?: number;
  widthPercentage?: number;
  gutter?: number;
  textAlign?: 'inherit' | 'left' | 'right' | 'center';
  children: JSX.Element | JSX.Element[] | string;
  className: string;
}

const StyledColumn = styled.div<ColumnProps>`
  position: relative;
  width: ${({ widthPercentage, numberOfCols }) => (widthPercentage ? widthPercentage : 100 / numberOfCols)}%;
  min-height: 1px;
  padding-right: ${({ gutter }) => gutter}px;
  padding-left: ${({ gutter }) => gutter}px;
  text-align: ${({ textAlign }) => textAlign};
`;

const Column = (props: ColumnProps) => <StyledColumn {...props} className={props.className} />;

export default Column;
