import React from 'react';
import { Slide, Heading, List, ListItem } from 'spectacle';
import styled from "styled-components";
import lendiBrowser from '../assets/lendi-browser2.png';

const ExampleWrapper = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;

  img {
    height: 800px;
    width: auto;
  }
`;

export default (
  <Slide transition={["fade"]} bgColor="tertiary">
    <Heading size={3} caps lineHeight={1} textColor="secondary">
      www.lendi.com.au
    </Heading>
    <ExampleWrapper>
      <div>
        <img src={lendiBrowser} />
      </div>
    </ExampleWrapper>
  </Slide>
);
