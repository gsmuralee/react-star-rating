import React from 'react';
import Star from './star';

const starRating = ({totalStars=5, starsSelected=0, onRate=f=>f})=>{

    return (
        <div className='starRating'> 
        {
            [...Array(totalStars)].map((n,i) => 
                <Star key={i} selected={i<starsSelected} onClick={() => onRate(i+1)} />
        )          
        }      
        </div>
    )
}

export default starRating;