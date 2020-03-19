import React from 'react';
import { css, jsx } from "@emotion/core";
import styled from '@emotion/styled';

const SectionBox = styled.section`
  margin-top: 30px;
  padding: 10px 20px;
  border: 1px solid #eee;
  border-radius: 5px;
  background-color: #E2E2E2;
  color:black;
`;


function Review({id, businessName, location, star, review, photoUrl}){
    return(
        <SectionBox>
        <div className="rv">
            <th>Review:{id}</th><br/>
            <th>{businessName}</th>
            <div>{location}</div>
            <div>Score:{star}</div>
            <div>{review}</div>
            <div className ="image">
                <img
                    height ={200}
                    width ={200}
                    src ={photoUrl}/>
            </div>
        </div>
        </SectionBox>
    );
}
export default Review;