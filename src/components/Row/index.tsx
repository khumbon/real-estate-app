import * as React from 'react';
import styled from 'styled-components';

export interface RowProps {
  cols?: number;
  gutter?: number;
  children: JSX.Element | JSX.Element[];
  flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  classname: string;
  padding?: number;
}

const StyledRow = styled.div<RowProps>`
  display: flex;
  flex-wrap: wrap;
  flex-direction: ${({ flexDirection }) => flexDirection};
  margin-right: -${({ gutter }) => gutter}px;
  margin-left: -${({ gutter }) => gutter}px;
  paddig-top: ${({ padding }) => padding}px;
  paddig-bottom: ${({ padding }) => padding}px;
`;

const Row: React.FunctionComponent<RowProps> = ({ children, ...props }) => {
  const childrenWithProps = React.Children.toArray(children)
    .filter((child) => !!child)
    .map((child) =>
      React.cloneElement(child as JSX.Element, {
        gutter: props.gutter ? props.gutter : 12,
        cols: props.cols ? props.cols : 12,
      }),
    );
  return (
    <StyledRow {...props} className={props.classname}>
      {childrenWithProps}
    </StyledRow>
  );
};

export default Row;
