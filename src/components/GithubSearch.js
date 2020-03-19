/** @jsx jsx */
import { useState, useEffect } from 'react';
import fetch from 'isomorphic-unfetch';
import styled from '@emotion/styled';
import { jsx } from '@emotion/core';
import { Card, Image, Form } from 'semantic-ui-react';

const GitResult = styled.div`
    margin-left:500px;
    padding: 10px 20px;
    border: 1px solid #eee;
    border-radius: 5px;
    background-color: #E2E2E2;
`;
const ErrorContainer = styled.div`
  padding: 10px;
  background-color: #ff7c7c;
  color: #fff;
`;
const GitCard = styled.div`

    margin-left:500px;
    padding: 10px 20px;
`;

function GithubSearch(){
    
    const [name, setName] = useState('');
    const [userName, setUsername] = useState('');
    const [repo, setRepos] = useState([]);
    const [description, setDescription] = useState('');
    const [userInput, setUserInput] = useState('');
    const [error, setError] = useState(null);

// Fetch my github data
   useEffect(()=>{
       fetch('https://api.github.com/users/eliza3c23')
       .then(res => res.json())
       .then(data => {
        //    console.log(data); Use to check if fetch sucessfully
           setData(data)
       });
   }, []);
   const setData = ({ name, login, avatar_url, public_repos }) => 
   {
       setName(name);
       setUsername(login);
       setRepos(public_repos);
       setDescription(avatar_url);
   }

   const handleGitSearch = (e) =>{
       setUserInput(e.target.value)
   }
   const handleSubmit = () =>{
       fetch(`https://api.github.com/users/${userInput}`)
       .then(res => res.json())
       .then(data => {
           if(data.message){
               setError(data.message)
           }
           else{
               setData(data);
               setError(null);
           }
           
       })
   }
return(
    <div>
    <h2>Github Repo</h2>
    <div className='search'>
       <Form onSubmit={handleSubmit}>
           <Form.Group>
               <Form.Input placeholder='Enter Github username' name ='github search' onChange={handleGitSearch}/>
               <Form.Button content = 'Search'/>
           </Form.Group>
       </Form>
    </div>
        {error && <ErrorContainer>Error!Unable to fetch repo data</ErrorContainer>}
        <GitCard>
        <Card>
            <Card.Content>
            <Card.Header>Eliza</Card.Header>
            <Card.Meta>
            <span className='date'>Github name:</span>
            </Card.Meta>
            <Card.Description>
            <a href= "https://github.com/eliza3c23">eliza3c23</a>
            </Card.Description>
            </Card.Content>
        </Card>

         <Card>
            <Image src={description}
            wrapped ui={false} />
            <Card.Content>
            <Card.Header>{name}</Card.Header>
            <Card.Meta>
            <span >User Name:{userName}</span>

            </Card.Meta>
            <Card.Description>
            <Card.Content>
            <tr>
                <th>
                    <td>Public repo:{repo}</td>
                </th>
            </tr>
            </Card.Content>
            </Card.Description>
            </Card.Content>
           
        </Card>

    </GitCard>
    
    </div>
);
}
export default GithubSearch;