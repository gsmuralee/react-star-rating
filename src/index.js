import React from 'react';
import ReactDOM from 'react-dom';
import StarRating from './starRating'
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const onChange= (i) =>  alert(i)

ReactDOM.render(
    <StarRating onChange={onChange}/>, 
    document.getElementById('root')
);
registerServiceWorker();
