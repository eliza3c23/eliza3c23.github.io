import React from 'react';
import Navbar from '../components/Navbar';
import { css, jsx } from "@emotion/core";
import styled from '@emotion/styled';
import Bkgrd from '../images/IMAGE1.jpeg';
import { ImageBackground } from 'react-native';
import BioResume from '../components/BioResume';
import ExperienceResume from '../components/ExperienceResume';
import EduResume from '../components/EduResume';
import SkillResume from '../components/SkillResume';

const Resumestyle = styled.main`
display: inline;
margin: 15%;
padding 10px 50px;
color: white;
font-style: oblique;
font-family: Verdana;
`;

function Resume() {
  return (
    <ImageBackground source={Bkgrd}
    resizeMode='cover'
    style={{
    //   width: '100%',
    //   height: '100%',
       position: 'absolute',
       flex: 1,
       }}>
    <div className ="component" style={{display: 'flex'}}>
      <Resumestyle>
        <BioResume/>
        <ExperienceResume/>
        <EduResume/>
        <SkillResume/>
      </Resumestyle>
    </div>
    </ImageBackground>
  );
}

export default Resume;