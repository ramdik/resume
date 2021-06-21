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
  position: relative;
  z-index: 1;
  color: whitesmoke;
  & > h2, h3 {
      margin:0;
  }
  & > h2 {
      margin-top:150px;
      padding-bottom:40px;
  }
  & > h3 {
      padding-top:10px;
  }
  & > a {
    font-size: 70px;
  }
  /* Mobile */
  @media (max-width:600px) {
    margin-top: 30%;
    margin-bottom: 20%;
  }
`;

const SocialLinks = styled.div`
  margin-top: 30px;
  .fa {
    font-size: 25px;
    margin: 15px;
    color: whitesmoke;
  }
`;

/* Social Media */
const SocMed = {
  instagram: "https://www.instagram.com/ramadhikarizky/",
  github: "https://github.com/ramdik",
  youtube: "https://www.youtube.com/channel/UCHtV6lU7t_GHozlrcDt0sVA",
  facebook: "https://web.facebook.com/ramadika.rizky/",
}

class Left extends Component {
  render() {
    return (
        <LeftContainer>
          <LeftContent>
            <ImgContainer></ImgContainer>
            <TextContainer>
            <h2>{this.props.greeting}</h2>
            <h3>{this.props.expertiseInfo}</h3>
            <h3>{this.props.currentJob}</h3>
            <SocialLinks>
              <a href={SocMed.facebook} target="blank">
                <i className="fa fa-facebook" aria-hidden="true"></i>
              </a>
              <a href={SocMed.instagram}>
                <i className="fa fa-instagram" aria-hidden="true"></i>
              </a>
              <a href={SocMed.github}>
                <i className="fa fa-github" aria-hidden="true"></i>
              </a>
              <a href={SocMed.youtube}>
                <i class="fa fa-youtube-play" aria-hidden="true"></i>
              </a>
            </SocialLinks>
            </TextContainer>
          </LeftContent>
        </LeftContainer>
    );
  }
}

export default Left;
