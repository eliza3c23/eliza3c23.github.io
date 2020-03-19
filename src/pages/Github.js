import React from 'react';
import Navbar from '../components/Navbar';
import { css, jsx } from "@emotion/core";
import styled from '@emotion/styled';
import Bkgrd from '../images/IMAGE1.jpeg';
import { ImageBackground } from 'react-native';
import GithubSearch from '../components/GithubSearch';
import Card from '../components/Card';

const Githubstyle = styled.div`
display: inline;
margin: 10%;
padding 1px 16px;
color: white;
font-style: oblique;
font-family: Verdana;
`;

function Github() {
  return (
    <ImageBackground source={Bkgrd} 
    resizeMode='cover'
    style={{
      width: '100%',
      height: '100%',
      position: 'absolute',
      flex: 1,
      }}>
    <div className ="component" style={{display: 'flex', justifyContent: 'center'}}>
      <Githubstyle>
        {/* <Card/> */}
        <GithubSearch/>
      </Githubstyle>
    </div>
    </ImageBackground>
  );
}

export default Github;