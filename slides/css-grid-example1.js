import React from 'react';
import { Heading, Text, Slide } from 'spectacle';
import cssGrid from '../assets/css-grid-intro.gif';
import styled from "styled-components";

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;

  img {
    height: 800px;
    width: auto;
  }
`;


export default (
  <Slide transition={["zoom"]} bgColor="primary">
    <Heading size={3} caps lineHeight={1} textColor="tertiary">
      CSS Grid Example
    </Heading>
    <ImageWrapper>
      <img src={cssGrid} />
    </ImageWrapper>
  </Slide>
);
