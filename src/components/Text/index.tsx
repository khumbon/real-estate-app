import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';
import { colours, colourValues } from '../../constants/colours';

export interface TextProps extends HTMLAttributes<HTMLSpanElement> {
  weight?: 'normal' | 'bold' | 'bolder' | 'lighter' | 'number' | 'initial' | 'inherit';
  size?: string;
  /**@default 'inherit'*/
  align?: 'inherit' | 'left' | 'right' | 'center';
  colour?: colourValues;
  withIcon?: boolean;
  classname: string;
}

const StyledText = styled.span<TextProps>`
  margin: 0;
  letter-spacing: 0;
  color: ${({ colour = colours.greyDarkest }) => colour};
  font-size: ${({ size }) => size};
  font-weight: ${({ weight }) => weight};
  font-family: zoopla-sans-regular, Helvetica, Arial, sans-serif;
  text-align: ${({ align = 'inherit' }) => align};
  padding-left: ${({ withIcon }) => (withIcon ? 5 : 0)}px;
`;

const Text = (props: TextProps) => <StyledText {...props} className={props.classname} />;

export default Text;
