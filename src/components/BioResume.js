/** @jsx jsx */
import styled from "@emotion/styled";
import { css, jsx } from "@emotion/core";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import Htb from '../images/htb.png';

import { Section } from './ResumeSection';

const PersonalData = {
  email: 'nipe@oregonstate.edu'
}

const BioTable = styled.table`
    td {
        padding: 1px 7px;
        &:first-of-type {
        text-align: center;
        margin-left: 20px;
        }
      color: black;
      a {
        text-decoration: none;
        }
    }
`;
function BioResume(){
    return(
        <Section
            gridCol="1"
            headingBackground="teal"
            headingColor="white">
        <h2>Bio</h2>
        <BioTable>
          <td>Eliza Nip</td>
        <tr>
          <td>
          <a href={`mailto:${PersonalData.email}`}> {PersonalData.email}</a>
          <strong style={{ color: '#D73F09' }}>
              <br/>Oregon State University
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <a href="https://www.linkedin.com/in/eliza-n-b8656188/">
            <LinkedInIcon fontSize="large"/>
            </a>
          </td>
          <td>
            <a href="https://github.com/eliza3c23/">
            <GitHubIcon fontSize="large"/>
            </a>
          </td>
          <td>
            <a href="https://www.hackthebox.eu/profile/276232">
              <img src={Htb}
                height ={40}
                width ={40}
              />
            </a>
          </td>
        </tr>
        </BioTable>
        </Section>
    );
}
export default BioResume;