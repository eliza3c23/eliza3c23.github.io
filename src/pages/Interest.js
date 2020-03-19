import React from 'react';
import Navbar from '../components/Navbar';
import { css, jsx } from "@emotion/core";
import styled from '@emotion/styled';
import Bkgrd from '../images/IMAGE1.jpeg';
import { ImageBackground } from 'react-native';

const Intereststyle = styled.h1`
display: inline;
margin: 25%;
padding 1px 16px;
color: white;
font-style: oblique;
font-family: Verdana;
`

function Interest() {
  return (
    <ImageBackground source={Bkgrd} 
    style={{
      width: '100%',
      height: '100%',
      position: 'absolute',
      flex: 1,
      }}>
    <div className ="component" style={{display: 'flex', justifyContent: 'center'}}>
      <Intereststyle>Interest, Hooby</Intereststyle>
    </div>
    </ImageBackground>
  );
}

export default Interest;