import React from 'react';
import Color from './color';

const ColorList = ({colors=[], onRate=f=>f, removeColor=f=>f}) => {
    return (
        <div className="color-list">
            {(colors.length === 0) ?
                 <p>No colors added</p> :
            colors.map((color,i) => 
                <Color key={color.id} removeColor={() => removeColor(color.id)} onRate={(rating) =>onRate(color.id, rating)} {...color}/>   
            )}
        </div>
    )
}

export default ColorList;