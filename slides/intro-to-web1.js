import React from "react";
import { Slide, Heading } from "spectacle";
import styled from 'styled-components';

const IframWrapper = styled.div`
  margin-top: 20px;
`;

export default (
  <Slide transition={["fade"]} bgColor="primary" textColor="secondary">
    <Heading size={3} caps lineHeight={1} textColor="secondary">
      HTML
    </Heading>
    <IframWrapper>
      <iframe
        height="480"
        scrolling="no"
        title="deXVWo"
        src="//codepen.io/therozie/embed/deXVWo/?height=265&theme-id=0&default-tab=result&embed-version=2"
        frameBorder="no"
        allowTransparency="true"
        allowFullscreen="true"
        style={{
          width: "100%"
        }}
      >
        See the Pen <a href="https://codepen.io/therozie/pen/deXVWo/">deXVWo</a>{" "}
        by Rozen Raymond (<a href="https://codepen.io/therozie">@therozie</a>)
        on <a href="https://codepen.io">CodePen</a>.
      </iframe>
    </IframWrapper>
  </Slide>
);
