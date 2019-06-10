import styled, {css} from 'styled-components';

const LoginButton = styled.button`
background: transparent;
border-radius: 3px;
border: 2px solid palevioletred;
color: palevioletred;
margin: 1rem;
padding: 0.25em 1em;

&:hover {
    transform: scale(1.1);
  }

  ${props =>
    props.primary &&
    css`
      background: palevioletred;
      color: white;
    `}
`

export default LoginButton;