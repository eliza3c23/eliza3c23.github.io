import React from "react";
import { Link } from "@reach/router";
import { NavLink, Switch, Route } from 'react-router-dom';
import Myface from '../images/myface.jpg';

import { css, jsx } from "@emotion/core";
import styled from '@emotion/styled'

import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import DescriptionIcon from '@material-ui/icons/Description';
import FavoriteIcon from '@material-ui/icons/Favorite';
import GitHubIcon from '@material-ui/icons/GitHub';
import CreateIcon from '@material-ui/icons/Create';

const ResponsiveStyle = styled.div`
@media (max-width: 768px) {
  display: none;
}
`;

const NavStyle = styled.ul`
  
  // background-color: #E2E2E2;
  // border: 1px solid #E2E2E2;
  box-shadow: 3px 3px 6px gray;
  width: 220px;
  height: 100%;
  margin: 0;
  position: fixed;
  height: 100%;
  overflow-x: hidden;
  padding-top: 20px;
`;

const NavbarStyling = styled.li`
display: inline;
list-style-type;
float: left;
padding: 14px 16px;
`;

const Astyle = styled.a`
text-decoration:none;
text-align: center;
font-size: 25px;
font-style: oblique;
font-family: Verdana;
color: white;
&:hover {
  color: #E96060};
}
&:class active{
  font-weight: bold;
}
`;

const MyInfo = styled.h2`
text-align: center;
font-size: 20px;
font-style: oblique;
font-family: Verdana;
color: white;
`;


function Navbar(){
    return(
      <nav className="navbar navbar-default">
        <ResponsiveStyle className="container">
          <div className="navbar-header">
            <NavStyle>  
            <img 
              src={Myface}
              style={{width: 160,
                      height: 160,
                      alignItems:'center',
                      borderRadius: '75%',
                      marginTop: '5px'}}/>
            <MyInfo>
              Eliza Nip
            </MyInfo>
                <NavbarStyling>
                <Astyle class="active" href = "#/home">
                  <HomeIcon fontSize="large"/> Home
                </Astyle>
               </NavbarStyling>
  
                <NavbarStyling>
                <Astyle class="active" href = "#/about">
                  <PersonIcon fontSize="large"/>  About
                </Astyle>
                </NavbarStyling>

                <NavbarStyling>
                <Astyle class="active" href = "#/resume">
                  <DescriptionIcon fontSize="large"/> Resume
                </Astyle>
                </NavbarStyling>
               
               <NavbarStyling>
                <Astyle class="active" href = "#/github">
                  <GitHubIcon fontSize="large"/>  Github
                </Astyle>
               </NavbarStyling>

               <NavbarStyling>
               <Astyle class="active" href = "#/interest">
                  <FavoriteIcon fontSize="large"/>  Interest
                </Astyle>
                </NavbarStyling>

                <NavbarStyling>
                <Astyle class="active" href = "#/blog">
                <CreateIcon fontSize="large"/>  Blog
                </Astyle>
             </NavbarStyling>
            </NavStyle>        
          </div>
        </ResponsiveStyle>
      </nav>
    );
  }
  export default Navbar;