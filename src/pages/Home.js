import React from 'react';
import Navbar from '../components/Navbar';
import { css, jsx } from "@emotion/core";
import styled from '@emotion/styled';
import Bkgrd from '../images/IMAGE1.jpeg';
import { ImageBackground } from 'react-native';
import Timer from '../components/Timer';
// import TimeApi from '../components/TimeApi';

const Backgroundstyle = styled.div`
display: flex;
justifyContent: center;
`;

const SectionBox = styled.section`
  margin-top: 5px;
  padding: 10px 20px;
  border: 1px solid #eee;
  border-radius: 5px;
  background-color: #E2E2E2;
  color:black;
`;

const Homestyle = styled.h1`
justifyContent: center;
margin: 25%;
margin-right: 5%;
padding 100px 200px;
color: white;
font-style: oblique;
font-family: Verdana;
`;
// const Timestyle = styled.p`
// color: white;
// font-style: oblique;
// font-family: Verdana;
// `;

// const HomeIntro = styled.td`
// color: white;
// font-style: oblique;
// font-family: Verdana;
// `;

function Home() {
  return (
    
    <ImageBackground source={Bkgrd} 
    resizeMode='cover'
    style={{
      width: '100%',
      height: '100%',
      position: 'fixed',
      flex: 1,
      }}>
      <Backgroundstyle>
        <Homestyle>
          Welcome!
          {/* <Timestyle> */}
            <SectionBox>
              <Timer/>
              {/* <TimeApi/> */}
            </SectionBox>
          {/* </Timestyle> */}
          </Homestyle>
         
         </Backgroundstyle>

    </ImageBackground>  
  );
}

export default Home;