import React, { Component } from "react";
import styled from "styled-components";
import bgImg from "../assets/dk.png"

const LeftContainer = styled.div`
  width: 50%;
  height: 100%;
  float:left;
  margin:0 auto;
  display: flex;
  justify-content: center;
  position:fixed;
  background:linear-gradient(80deg, #43A497, #547AD1);
  background-repeat: no-repeat;
  background-size:cover;
  text-align: center;
  //media query
  @media (max-width: 1000px) {
    width:100%;
    display: block;
    position:static;
    margin:0 auto;
  }
`;
const LeftContent = styled.div`
  width:100%;
  position:relative;
  display:inline-block;
  margin:0 15%;
  @media (max-width:1200px) {
    margin:0 auto;
  }
`;

const ImgContainer = styled.div`
  position:absolute;
  width:100%;
  height:100%;
  left:50%;
  top:50%;
  transform: translateX(-50%) translateY(-50%);
  background:url(${bgImg}) center center no-repeat;
  background-position:bottom;
  background-size:contain;
  opacity:0.35;
  /* Mobile */
  @media (max-width:600px) {
    position: absolute;
    z-index: 1;
    background-position: none;
  }
`;

const TextContainer = styled.div`
  height: 100%;
  width: 100%;
  display:flex;
  flex-direction:column;
  text-align:center;
  justify-content:center;
  align-items: center;
  margin:0 auto;
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
  /* Mobile */
  @media (max-width:600px) {
    margin-top: 30%;
    margin-bottom: 20%;
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
