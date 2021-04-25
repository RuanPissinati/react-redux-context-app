import styled from 'styled-components';

export const Button = styled.button`
  display: block;
  width: 100%;
  max-width: ${props=> props.block ===! null? '100%':'345px'};
  height: 59px;
  background: #000000;
  border-radius: 8px;
  //Font
  font-family: Nunito, Arial, Helvetica, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 27px;
  color: #FFFFFF;
  cursor: pointer;
  transition: 0.3s;

  :hover {
    background-color: #FFFFFF;
    color: #000000;
    transition: 0.3s;
  }
  :disabled{
    opacity: 0.5;
    cursor: initial;
  }
  :disabled:hover{
    background: #000000;
    color: #FFFFFF;
  }
`;
