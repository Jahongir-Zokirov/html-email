import React from 'react';
import classes from './toUser.module.css';

let ToUser =() =>{
    return(
        <div className={classes.main}>
            <p>Здравствуйте, Покупатель Покупателевич!</p>
            <p>Ваш заказ <span className={classes.sellNumber}>№ T-RP/00129</span>  оформлен</p>
            <p>Спасибо, что выбрали нас! В ближайшее время с Вами свяжется менеджер для подтверждения заказа.</p>
        </div>
    )
}

export default ToUser;