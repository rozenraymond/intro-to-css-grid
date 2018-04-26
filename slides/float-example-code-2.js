import React from "react";
import { Slide, Heading } from "spectacle";
import styled from "styled-components";

const IframWrapper = styled.div`
	margin-top: 20px;
`;

<iframe
  height="265"
  scrolling="no"
  title="Float Example"
  src="//codepen.io/therozie/embed/gzMNzj/?height=265&theme-id=0&default-tab=css,result&embed-version=2"
  frameBorder="no"
  allowTransparency="true"
  allowFullScreen="true"
  style="width: 100%;"
>
	See the Pen{" "}
  <a href="https://codepen.io/therozie/pen/gzMNzj/">Float Example</a> by Rozen
	Raymond (<a href="https://codepen.io/therozie">@therozie</a>) on{" "}
  <a href="https://codepen.io">CodePen</a>.
</iframe>;

export default (
  <Slide transition={["fade"]} bgColor="primary" textColor="secondary">
    <Heading size={3} caps lineHeight={1} textColor="secondary">
			Float
    </Heading>
    <IframWrapper>
      <iframe
        height="550"
        scrolling="no"
        title="QrEXJX"
        src="//codepen.io/therozie/embed/QrEXJX/?height=265&theme-id=0&default-tab=css,result&embed-version=2"
        frameBorder="no"
        allowTransparency="true"
        allowFullscreen="true"
        style={{
          width: "100%"
        }}
      >
				See the Pen <a href="https://codepen.io/therozie/pen/QrEXJX/">QrEXJX</a>{" "}
				by Rozen Raymond (<a href="https://codepen.io/therozie">@therozie</a>)
				on <a href="https://codepen.io">CodePen</a>.
      </iframe>
    </IframWrapper>
  </Slide>
);
