import React from "react";
import "./Body.css";

const Body = () => {
  return (
    <div className="main_body_container">
      <div className="body_container">
        <div className="main_left_container">
          <div className="body_container_left">
            <h2>Зарабатывайте</h2>
            <h2>больше</h2>
            <b>c WELBEX</b>
            <br />
            <br />
            <p>развиваем и контролируем</p>
            <p>продажи за вас</p>
          </div>
        </div>
        <div className="main_right_container">
          <div className="body_container_right">
            <div className="main_item">
              <div className="main_item_block">
                <div className="textblock">
                  Вместе с <b>&nbsp;Бесплатной</b>
                </div>
                <div className="textblock">
                  <b>консультацией</b>&nbsp; мы дарим:
                </div>
              </div>
            </div>
            <div className="main_container_items">
              <div className="second_container_items">
                <div className="container_items">
                  <b>Виджеты</b>
                  <p className="text_container_block"> 3D готовых решений</p>
                </div>
                <div className="container_items">
                  <b>Skype аудит</b>
                  <p className="text_container_block">
                    {" "}
                    отдела продаж и CRM системы
                  </p>
                </div>
              </div>
              <div className="second_container_items second2">
                <div className="container_items">
                  <b>Dashboard</b>
                  <p className="text_container_block">
                    {" "}
                    с показателями вашего бизнеса
                  </p>
                </div>
                <div className="container_items">
                  <b>35 дней</b>
                  <p className="text_container_block"> Использования CRM</p>
                </div>
              </div>
            </div>
            <div className="btn_container">
              <div className="ball3"></div><button className="btn">Получить консультацию</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
