import React from 'react';
import styled from '@emotion/styled';
import { Section } from './ResumeSection';

const SkillsTable = styled.table`
  th {
    text-align: right;
  }
  th, td {
    padding: 5px 10px;
    color: black;
  }
`;
function Skill(){
    return(
        <Section
        gridCol="3"
        headingBackground="royalblue"
        headingColor="white"
        >
        <h2>Skill</h2>
        <SkillsTable>
            <tr>
                <th>Foregin Languages</th>
                <td>English, Cantonese, Mandarin</td>
            </tr>
            <tr>
                <th>Programming Languages</th>
                <td>Python, Javascript, C/C++, SQL, R</td>
            </tr>
            <tr>
                <th>OS environment</th>
                <td>MacOS, Windows</td>
            </tr>
            <tr>
                <th>Software</th>
                <td>Microsoft Office, R, Wiresharks, Postman, Vmware, Adobe Photoshop</td>
            </tr>
        </SkillsTable>
        </Section>
    );
}
export default Skill