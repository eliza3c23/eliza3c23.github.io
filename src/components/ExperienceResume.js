import React, { Component }  from 'react';
import { Section, Table } from './ResumeSection';
import job from '../data/experience';

function Experience(){
    return(
        <Section
            gridCol="span 3"
            headingBackground="maroon"
            headingColor="white" >
            <h2>Experience</h2>
                {job.map(job => 
                <Table>
                    <tr>
                        <th>{job.employer}</th>
                        <th>{job.location}</th>
                    </tr>
                    <tr>
                        <th>{job.position}</th>
                        <th>{job.duration}</th>
                    </tr>
                    <tr>
                        <td>
                            <ul>
                                {job.respons.map(res => <li>{res}</li>)}
                            </ul>
                        </td>
                    </tr>
                </Table>
            )}
        </Section>
    );
}
export default Experience;