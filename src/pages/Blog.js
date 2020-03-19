import React from 'react';
import Navbar from '../components/Navbar';
import { css, jsx } from "@emotion/core";
import styled from '@emotion/styled';
import Bkgrd from '../images/IMAGE1.jpeg';
import { ImageBackground } from 'react-native';
import reviewData from '../data/review.json';
import Review from '../components/Review';

const ReviewContentStyle = styled.div`
display: flex;
margin-left: 250px;
position: relative;
padding 0px 20px;
color: white;
font-style: oblique;
font-family: Verdana;
font-size: 20px;
`;

const Container = styled.div(props => ({
  display: 'block',
  flexDirection: props.row,
}))

function Blog() {
  return (
    <ImageBackground source={Bkgrd} 
    resizeMode='cover'
    style={{
      height: null,
      width: null,
      position: 'absolute',
      flex: 1,
      justifyContent: 'center',
      }}
      >
    <div className ="component" style={{display: 'flex', justifyContent: 'center'}}>
       
        <ReviewContentStyle>
        <Container>
       
        {reviewData.map((reviewItems, i )=><Review key={i} {...reviewItems} />)}
       
        </Container>
        </ReviewContentStyle>
        
      
    </div>
    </ImageBackground>
  );
}

export default Blog;