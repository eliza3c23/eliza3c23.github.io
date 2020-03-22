import React from 'react';
import { useState, useEffect } from 'react';
import fetch from 'isomorphic-unfetch';
import styled from '@emotion/styled';

function TimeApi (){
    const [currentTime, setCurrentTime] = useState('');

    useEffect(() => {
        fetch('http://worldclockapi.com/api/json/pst/now')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setData(data);
        });
    },[]);
    
    const setData = ({currentDateTime}) => {
        setCurrentTime(currentDateTime);

    }

    return(
        <div>
        The local time is:{currentTime};
        
    </div>
    );

}
export default TimeApi;