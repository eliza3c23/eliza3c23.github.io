import React from 'react';
import Navbar from '../components/Navbar';
import { css, jsx } from "@emotion/core";
import styled from '@emotion/styled';
import Bkgrd from '../images/IMAGE1.jpeg'
import { ImageBackground } from 'react-native';


const SectionBox = styled.section`
  margin-top: 30px;
  padding: 10px 20px;
  border: 1px solid #eee;
  border-radius: 5px;
  background-color: #E2E2E2;
  color:black;
`;

const Aboutstyle = styled.main`
margin-left: 180px;
position: relative;
padding 0px 20px;
color: white;
font-style: oblique;
font-family: Verdana;
`

function About() {
    return (
      <ImageBackground source={Bkgrd}
      resizeMode='cover' 
      style={{
        height: '100%',
        width: '100%',
        position: 'absolute',
        flex: 1,
        }}>
      <div className ="component" style={{display: 'flex', justifyContent: 'center'}}>
        <Aboutstyle>
        <SectionBox>
        <h1>About ME</h1>
          <div>
          <div>
            <th>Raised in Hong Kong, moved to Oregon at 14</th>
            <br/>I am a senior studying Computer Science. When I am not doing school work,
            <br/>I am usually on the social dance floor, either doing some Salsa and Bachata, or WCS.
            <br/>I don't know how to play D&D....I know I will learn it at some point...
            </div>
          </div>
          </SectionBox>
          </Aboutstyle>
      </div>
      </ImageBackground>
    );
  }
  
  export default About;