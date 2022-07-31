import * as React from 'react';
import styled from 'styled-components';
import { colours } from '../../constants/colours';

interface ButtonProps extends React.DOMAttributes<HTMLButtonElement> {
  text: string;
  classname: string;
}

const StyledButton = styled.button<ButtonProps>`
  backgroud-color: ${colours.greyLight};
`;

const Button = (props: ButtonProps) => (
  <StyledButton {...props} className={props.classname}>
    {props.text}
  </StyledButton>
);

export default Button;
