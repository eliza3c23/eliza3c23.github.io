import React from 'react'
import { Card, Icon, Image, Form } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
// import hp from '../images/hero_sp.jpg'
import styled from '@emotion/styled'
import { css, jsx } from "@emotion/core";
import GithubSearch from '../components/GithubSearch';


// UI template for react, looks really cool!

const cardGit = styled.div`
    display: flex;
    justify-content: center;
`;


function GithubCard(){
    return(

     <cardGit>  
        <Card>
            {/* <Image src={hp}
            wrapped ui={false} /> */}
            <Card.Content>
            {/* <Card.Header>{name}</Card.Header> */}
            <Card.Meta>
            <span className='date'>2015</span>
            </Card.Meta>
            <Card.Description>
            {/* Github username:{login} */}
            </Card.Description>
            </Card.Content>
            <Card.Content extra>
            <a>
                <Icon name='user' />
                {/* Repos:{public_repos} */}
            </a>
            </Card.Content>
        </Card>
    </cardGit>
    );
}

export default GithubCard;