import React from "react";
import classes from "./Button.module.css"

function Button(props) {
    return ( 
        <div className={classes.wraper}>
            <button className={classes.btn_buy}>{props.children}</button>
        </div>
     );
}

export default Button;