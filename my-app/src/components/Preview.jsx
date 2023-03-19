import React from 'react';
import Button from './UI/buttons/Button';

function Preview() {
    return ( 
        <div className="preview">
            <div className="title">Special premium account!</div>
            <p className="preview_paragraph">With a special premium account, you can do very interesting things!
By purchasing this account, special features will be activated for you that you will be amazed to see!</p>
            <div className="preview_buttons">
                <div>
                    <Button>Account purchase</Button>
                </div>
                <div style={{marginLeft: 10}}>
                    <Button>View features</Button>
                </div>
            </div>
        </div>
     );
}

export default Preview;