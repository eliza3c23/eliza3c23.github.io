import React from 'react';
import Navbar from '../components/Navbar';
import { css, jsx } from "@emotion/core";
import styled from '@emotion/styled'

const Blogstyle = styled.h1`
display: inline;
margin-left: 25%;
padding 1px 16px;
height:1000px;
`

function Blog() {
  return (
    <div>
      <Blogstyle>Blog goes here!</Blogstyle>
    </div>
  );
}

export default Blog;