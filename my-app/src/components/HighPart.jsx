import React from 'react';
import Button from './UI/buttons/Button';

function HighPart() {
    return ( 
        <div className="high_part">
            <div className="high_title">Hello, John!</div>
            <div className="buttons">
                <div>
                    <Button style = {{margin: 10}} >can’t find something? search it here!</Button>
                </div>
                <div style ={{marginLeft: 10}}>
                    <Button>make a new product</Button>
                </div>
            </div>
        </div>
     );
}

export default HighPart;