import React from 'react';
import ButtonBuy from '../buttons/ButtonBuy';
import classes from './CardSales.module.css'

function CardSales() {
    return ( 
            <div className={classes.card}>
                <div className="card_titles">
                    <div>all smth</div>
                    <div>period</div>
                </div>
                <div className="card_buybutton">
                    <div className={classes.cost}>100</div>
                    <ButtonBuy>see info</ButtonBuy>
                </div>
            </div>
     );
}

export default CardSales;