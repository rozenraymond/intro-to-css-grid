import React from "react";
import { Slide, Heading } from "spectacle";
import styled from "styled-components";

const IframWrapper = styled.div`
	margin-top: 20px;
`;

export default (
  <Slide transition={["fade"]} bgColor="primary" textColor="secondary">
    <Heading size={3} caps lineHeight={1} textColor="secondary">
			@support Query as Fallback
    </Heading>
    <IframWrapper>
      <iframe
        height="600"
        scrolling="no"
        title="CSS Grid Layout with @support flexbox fallback"
        src="//codepen.io/primalivet/embed/ryjKmV/?height=265&theme-id=0&default-tab=css,result&embed-version=2"
        frameBorder="no"
        allowTransparency="true"
        allowFullscreen="true"
        style={{
          width: "100%"
        }}
      >
				See the Pen{" "}
        <a href="https://codepen.io/primalivet/pen/ryjKmV/">
					CSS Grid Layout with @support flexbox fallback
        </a>{" "}
				by Gustaf Holm (<a href="https://codepen.io/primalivet">@primalivet</a>)
				on <a href="https://codepen.io">CodePen</a>.
      </iframe>
    </IframWrapper>
  </Slide>
);
