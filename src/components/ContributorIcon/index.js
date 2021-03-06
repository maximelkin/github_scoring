import React from 'react';
import styled from 'react-emotion';

const Contributor = styled('div')`
  width: 50px;
  height: 50px;
  margin: 5px;
  cursor: pointer;
  transition: 0.15s;
  img {
    border-radius: 100px;
    border: solid 3px rgba(255, 55, 255, 0.1);
    transition: 0.15s;
    box-sizing: border-box;
  }
  &:hover {
    img {
      border: solid 3px rgba(255, 55, 255, 1);
    }
    &:active {
      transform: scale(0.92);
    }
  }
`;

export default (props) => {
  return (
    <Contributor>
      <img src={props.src} width="100%" height="100%" />
    </Contributor>
  );
};
