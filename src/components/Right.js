import React , { Component } from 'react';
import styled from "styled-components";

const RightContainer = styled.div`
width:50%;
height:100%;
float:right;
background-color:whitesmoke;
  //media query
  @media (max-width: 1000px) {
    width:100%;
    display: block;
    position:static;
  }
`;

const RightContent = styled.div`
padding:50px;
font-weight:300;
font-size:14px;
 @media (max-width: 420px) {
    padding: 50px 15px;
 }
`;

/* Isi */
const Introduction = styled.div`
& > h4,div {
    display:inline-block;
    vertical-align:top;
}
`;

const Skills = styled.div`
& > h4,div {
    display:inline-block;
    vertical-align:top;
}
`;

const Education = styled.div`
& > h4,div {
    display:inline-block;
    vertical-align:top;
}
`;

const Experience = styled.div`
& > h4,div {
    display:inline-block;
    vertical-align:top;
}
`;

const Projects = styled.div`
& > h4,div {
    display:inline-block;
    vertical-align:top;
}
`;

//Link Section (update soon)
const allLink = {
    webPortofolio:"#",
    puyuhkuyWeb:"#",
    dicodingSubmissionWeb:"#",
    dicodingCertificate:"https://www.dicoding.com/certificates/MRZMG4YW0ZYQ",
    test:"#",
}
class Right extends Component {
    render() {
        return (
            <RightContainer>
                <RightContent>
                    <Introduction>
                        <h4 className="content-tittle">Intro</h4>
                        <div className="intro">
                            <p className="intro-p">I'm currently focused on studying web design, through the learning platform on the internet I dedicate my time to learn more about web development.</p>
                            <p className="intro-p">I'm have more interest in front end, and i have some experience in developing and design products of the web, from simple landing pages to full-fledged web apps.</p>
                            <span className="intro-p job-hunt">
                            I'm currently looking for jobs, especially in Front-End Developer
                            </span>
                        </div>
                    </Introduction>
                    <Skills>
                        <h4 className="content-tittle">Skills</h4>
                        <div className="intro skills">
                            <p className="intro-p">
                                <strong>languages: </strong> JavaScript (ES6), HTML5, CSS3
                            </p>
                            <p className="intro-p">
                                <strong>libraries & frameworks: </strong> React, Bootstrap, & Tailwind
                            </p>
                            <p className="intro-p">
                                <strong>tools: </strong> Github & Git, AdobeXD, Photoshop, Figma
                            </p>
                        </div>
                    </Skills>
                    <Education>
                        <h4 className="content-tittle">Education</h4>
                        <div className="intro education">
                            <div className="education-item">
                                <p className="intro-p education-pls">Politeknik PGRI Banten</p>
                                <p className="intro-p education-mjr">
                                    <strong>Diploma of Mechanical Engineer</strong>
                                </p>
                                <p className="intro-p education-grad">graduation: may 2018</p>
                            </div>
                            <div className="education-item">
                                <div className="educ-wrap">
                                    <span className="intro-p education-pls">
                                        <a href={allLink.dicodingCertificate} target="blank">Dicoding</a>
                                    </span>
                                    <span className="intro-p education-grad educ-type">Non-Formal</span>
                                </div>
                                <p className="intro-p education-mjr">
                                    <strong>Web Development</strong>
                                </p>
                                <p className="intro-p education-grad">graduation: nov 2020</p>
                            </div>
                        </div>
                    </Education>
                    <Experience>
                        <h4 className="content-tittle">Experience</h4>
                        <div className="intro experience">
                            <div className="experience-item">
                                <div className="experience-job">
                                    <span className="intro-p experience-pls">Sokonindo Automobile</span>
                                    <span className="experience-time">june 2018 - june 2020</span>
                                </div>
                                <p className="intro-p experience-as">
                                    <strong>Quality Engineer</strong>
                                </p>
                                <ul className="job-desc">
                                    <li>Create, update, and training Standart Operational Procedure (SOP) for quality inspector.</li>
                                    <li>Ensure, and validate quality finish product same with technical spesification.</li>
                                    <li>Follow, and monitoring the root cause of quality issues and make the closing report.</li>
                                </ul>
                            </div>
                            <div className="experience-item">
                                <div className="experience-job">
                                    <span className="intro-p experience-pls">Siemens Indonesia</span>
                                    <span className="experience-time">des 2017 - mar 2018</span>
                                </div>
                                <p className="intro-p experience-as">
                                    <strong>Drafter & Office Support Intern</strong>
                                </p>
                                <ul className="job-desc">
                                    <li>Create 2D drawing part of condensor, and ensure drawing documentation is right.</li>
                                    <li>Input data of work order (WO) from sheet to database, and delivery WO to all section.</li>
                                </ul>
                            </div>
                        </div>
                    </Experience>
                    <Projects>
                        <h4 className="content-tittle">Projects</h4>
                        <div className="intro">
                            <div className="project-item">
                                <span className="intro-p project-tittle">
                                    <a href={allLink.webPortofolio} target="blank">portofolio web</a>
                                </span>
                                <p className="project-desc">Portfolio site designed and build from scratch to showcase my skills and past work.</p>
                            </div>
                            <div className="project-item">
                                <span className="intro-p project-tittle">
                                    <a href={allLink.puyuhkuyWeb} target="blank">puyuhkuy marketing web</a>
                                </span>
                                <p className="project-desc">Website for market purpose, and showcase the product.</p>
                            </div>
                            <div className="project-item">
                                <span className="intro-p project-tittle">
                                    <a href={allLink.dicodingSubmissionWeb} target="blank">Dicoding Submission</a>
                                </span>
                                <p className="project-desc">Creating submission after learn basic web programing with Create responsive web with basic web development technology HTML, CSS, and Javascript DOM.</p>
                            </div>
                        </div>
                    </Projects>
                    <div className="btn-container">
                    <a className="resume-btn" href={allLink.test}>grab my full pdf resume</a>
                    </div>
                </RightContent>
            </RightContainer>
        );
    }
}

export default Right;