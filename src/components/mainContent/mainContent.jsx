import React from 'react';
import classes from './mainContent.module.css';

let MainContent = () => {
    return (
        <div className={classes.mainWindow}>
            <div className={classes.window}>
                <div className={classes.rightSide}>
                    <div className={classes.kitInfo}>
                        <h4>Информация о заказе:</h4>
                        <div className={classes.aside}>
                            <p>Заказчик: Покупатель Покупателевич</p>
                            <p>Email: <a href="mailto:amozik@yandex.ru">amozik@yandex.ru</a></p>
                            <address>Адрес: 115487, г Москва, ул Садовая Б., д 45</address>
                            <p>Телефон: +7 902 266-44-63</p>
                        </div>
                        <div className={classes.bside}>
                            <p>Исполнитель: Группа компаний Fulogy</p>
                            <p>Менеджер: Широков Евгений</p>
                            <p>Телефон: +7(499)116-34-00</p>
                            <p>Монтаж: Да</p>
                        </div>

                    </div>
                </div>
                <div className={classes.leftSide}>
                    <div className={classes.orderList}>
                        <h4>Состав комплекта: </h4>
                        <p>Светильник по вашему размеру - 2 шт </p>
                        <p>Блок питания 100 Вт. - 1 шт</p>
                        <p>Крепления - саморезы каждые 30 см</p>
                        <p>Комментарий: Можно мне гаечный ключ вместо отвертки</p>
                        <p> Конфигурация светильника (вариант 2): scheme</p>
                    </div>
                    <div className={classes.characteristic}>
                        <h4>Технические характеристики: </h4>
                        <p>Длина 1-го светильника (L1): 1375 мм</p>
                        <p>Длина 2-го светильника (L2): 2110 мм</p>
                        <p>Вид профиля: Накладной профиль с молочным рассеивателем</p>
                        <p>Лента: Светодиодная лента 24V SMD 2835 140LED/m 18W IP33 Day White LUX CRI 90</p>
                        <p>Суммарная потребляемая мощность: 63 Вт</p>
                        <p>Вывод питающего кабеля из светильника: через заглушку</p>
                        <p>Стык светильников: под углом 45 градусов</p>
                        <p>Длина кабеля до блока питания (Lcb): 240 см</p>
                    </div>
                    <div className={classes.totalPrice}> ИТОГО: 14 000 РУБ. </div>
                </div>
            </div>
        </div>
    )
}

export default MainContent;