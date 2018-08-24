import React from 'react';
import ReactDOM from 'react-dom';
import Display from './children'
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const onChange= (i) =>  alert(i)
const age = 22
ReactDOM.render(     
        <Display ifTruthy={age >= 21}> 
           <h1>You can enter</h1> 
        </Display>,
    document.getElementById('root')
 )
registerServiceWorker();
