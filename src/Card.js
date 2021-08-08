import React from 'react';
import styled from 'styled-components';

export const ClientCardStyled = styled.div`
  background-color: white;
  border-radius: .571em;
  height: 250px;
  margin: 1.07em .571em .71em;
  padding: 1.05em;
  width: 200px;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.008), 0 12.5px 10px rgba(0, 0, 0, 0.02),
    0 5px 10px rgba(0, 0, 0, 0.042);
`;

const Card = () => {
  return (
    <ClientCardStyled>
       Avatar 
    </ClientCardStyled>
  );
}

export default Card;