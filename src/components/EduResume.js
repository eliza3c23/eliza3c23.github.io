import React, { Component }  from 'react';
import { Section, Table } from './ResumeSection';

function Education(){
    return(
        <Section
            gridCol = "2"
            headingBackground="#D73F09"
            headingColor="white">
        <h2>Education</h2>
        <Table>
            <tr>
                <th>Oregon State University </th>
                <th>Corvallis, OR</th>
            </tr>
            <tr>
                <th>BS in Computer Science</th>
                <th>Dec 2020</th>
            </tr>
            <tr>
            <th>Focus: Web Dev, Security</th>
            </tr>
        </Table>
    </Section>
    );
}
export default Education;