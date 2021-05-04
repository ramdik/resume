import React, { Component } from "react";
import styled from "styled-components";
import bgImg from "../assets/dk.png"

const LeftContainer = styled.div`
  width: 50%;
  height: 100%;
  margin:0 auto;
  display: flex;
  justify-content: center;
  position:fixed;
  background:linear-gradient(80deg, #43A497, #547AD1);
  background-repeat: no-repeat;
  background-size:cover;
`;
const LeftContent = styled.div`
  width:100%;
  position:relative;
  display:inline-block;
  margin:0 100px;
`;

const ImgContainer = styled.div`
  position:absolute;
  width:100%;
  height:100%;
  left:0;
  top:0;
  z-index:-1;
  background:url(${bgImg}) center center no-repeat;
  background-position:bottom;
  background-size:cover;
  opacity:0.35;
`;

const TextContainer = styled.div`
display:flex;
flex-direction:column;
text-align:center;
justify-content:center;
top:0;
left:0;
right:0;
bottom:0;
margin:0 auto;
margin-top:40%;
& > h2, h3 {
    margin:0;
}
& > h2 {
    color:rgb(184, 184, 184);
    margin-top:150px;
    padding-bottom:40px;
}
& > h3 {
    color:rgb(184, 184, 184);
    padding-top:10px;
}
`;
class Left extends Component {
  render() {
    return (
      <>
        <LeftContainer>
          <LeftContent>
            <ImgContainer></ImgContainer>
            <TextContainer>
            <h2>{this.props.greeting}</h2>
            <h3>{this.props.expertiseInfo}</h3>
            <h3>{this.props.currentJob}</h3>
            </TextContainer>
          </LeftContent>
        </LeftContainer>
      </>
    );
  }
}

export default Left;
