import React from 'react';

const ColorList = (colors=[]) => {
    return (
        <div className="color-list">
            {(colors.length == 0) ?
                 <p>No colors added"</p> :
            colors.map((n,i) => 
                <Color key={i} />   
            )}
        </div>
    )
}