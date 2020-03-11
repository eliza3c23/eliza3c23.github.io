import React from "react";
import { Link } from "@reach/router";
import { NavLink, Switch, Route } from 'react-router-dom';
import { css, jsx } from "@emotion/core";
import styled from '@emotion/styled'

const ResponsiveStyle = styled.div`
@media (max-width: 768px) {
  display: none;
}
`;

const NavStyle = styled.ul`
  background-color: lightgrey;
  color: white;
  width: 15%;
  margin-top: auto;
  padding 10px 13px;
  list-style-type: none;
  position: fixed;
  height: 100%;
  overflow: auto;
`;

const NavbarStyling = styled.li`
display: inline;
list-style-type;
float: left;
padding: 14px 16px;
`;

const Astyle = styled.a`
text-decoration:none;
font-size: 30px;
font-style: oblique;
font-family: Verdana;
color: black;
&:hover {
  color: dodgerblue};
}
&:class active{
  font-weight: bold;
  background-color: lavender;
}
`;

function Navbar(){
    return(
      <nav className="navbar navbar-default">
        <ResponsiveStyle className="container">
          <div className="navbar-header">
            <NavStyle>
                <NavbarStyling>
  
                <Astyle class="active" href = "home">
                  Home
                </Astyle>
  
               </NavbarStyling>
  
                <NavbarStyling>
                <Astyle class="active" href = "about">
                  About
                </Astyle>
                </NavbarStyling>
                
                <NavbarStyling>
                <Astyle class="active" href = "blog">
                  Blog
                </Astyle>
             </NavbarStyling>
               
               <NavbarStyling>
                <Astyle class="active" href = "github">
                  Github
                </Astyle>
               </NavbarStyling>

               <NavbarStyling>
               <Astyle class="active" href = "interest">
                  Interest
                </Astyle>
                </NavbarStyling>

                <NavbarStyling>
                <Astyle class="active" href = "resume">
                  Resume
                </Astyle>
                </NavbarStyling>
            
            </NavStyle>   
                
          </div>
        </ResponsiveStyle>
      </nav>
    );
  }
  export default Navbar;