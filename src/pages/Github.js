import React from 'react';
import Navbar from '../components/Navbar';
import { css, jsx } from "@emotion/core";
import styled from '@emotion/styled';

const Githubstyle = styled.h1`
display: inline;
margin-left: 25%;
padding 1px 16px;
height:1000px;
`

function Github() {
  return (
    <div>
      <Githubstyle>Github repo here</Githubstyle>
    </div>
  );
}

export default Github;