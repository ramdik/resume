import React, { Component } from "react";
import styled from "styled-components";
import Right from "./components/Right.js";
import Left from "./components/Left";

const FlexContainer = styled.div`
`;

const myBio = {
  greeting: "Hello, I'm Ramadhika.",
  expertiseInfo: "Developer & Designer Based In Banten",
  currentJob:"Amateur Web Developer @ Home"
};

class Main extends Component {
  render() {
    return (
      <FlexContainer>
        <Left 
        greeting={myBio.greeting}
        expertiseInfo={myBio.expertiseInfo}
        currentJob={myBio.currentJob}
        />
        <Right />
      </FlexContainer>
    );
  }
}
export default Main;
