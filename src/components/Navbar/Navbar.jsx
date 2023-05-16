import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="main_navbar_container">
      <div className="navbar_container">
        <div className="navbar_container_left">
          <div className="navbar_logo item">
            <div>логотип</div>
            <div className="navbar_logo_item_text">
              крупный интегратор CRM в Росcии и ещё 8 странах
            </div>
          </div>
          <div className="navbar_item item1">Услуги</div>
          <div className="navbar_item item2">Виджеты</div>
          <div className="navbar_two_items">
            <div className="navbar_item item">Интеграции</div>
          </div>
          <div className="navbar_item item3">Кейсы</div>
          <div className="navbar_item item4">Сертификаты</div>
        </div>
        <div className="navbar_container_right">
          <div className="navbar_number item">+7 555 555-11-55</div>
          <div className="navbar_icon item">Telegram</div>
          <div className="navbar_icon item">Viber</div>
          <div className="navbar_icon item">Whatsup</div>
        </div>
        <div className="second_ball"></div>
        <div className="first_ball"></div>
      </div>
    </div>
  );
};

export default Navbar;
