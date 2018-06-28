import React from 'react';
import Star from './star';

const starRating = ({totalStars=5, starsSelected=0, onChange=f=>f})=>{
    return (
        <div className='starRating'> 
        {
            [...Array(totalStars)].map((n,i) => 
                <Star key={i} selected={i<starsSelected} onClick={() => onChange(i)}/>
        )          
        }      
        </div>
    )
}

export default starRating;