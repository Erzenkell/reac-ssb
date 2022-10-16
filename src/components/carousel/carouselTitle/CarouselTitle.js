import React from "react";
import Typewriter from "typewriter-effect";
import StyledTitleMessage from "./StyledTItleMessage";
import ScrollDownIndicator from "../../scrollDownIndicator/ScrollDownIndicator";

const TitleMessage = () => (
    <StyledTitleMessage>
      <div className="titleMessage">
        <div className="heading">
          <div className="main text-center mb-3">
            <br />
            <span>
              <strong>FERRIER Sammy</strong>
            </span>
          </div>
          <div className="sub">
            <Typewriter
              options={{
                strings: ["Web Developer", "Flamingo Enjoyer"],
                autoStart: true,
                loop: true,
                delay: 100
              }}
            />
          </div>
        </div>
      </div>
      <ScrollDownIndicator/>
    </StyledTitleMessage>
  );
  
export default TitleMessage;
  