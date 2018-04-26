import React from 'react';
import { Heading, Text, Slide } from 'spectacle';
import styled from "styled-components";

const Better = styled.span`
  text-decoration: underline;
  color: #AFCBFF;
`;

export default (
  <Slide transition={["zoom"]} bgColor="quarternary">
    <Heading size={1} fit caps lineHeight={1} textColor="primary">
      CSS Grid
    </Heading>
    <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
      The <Better>better</Better> way in doing web layout
    </Text>
  </Slide>
);
