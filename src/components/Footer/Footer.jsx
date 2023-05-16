import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="main_footer_container">
        <div className="footer_item_container f1">
          <div className="footer_item fi1">
            <b>О компании</b>
            <p>Партнерская программа</p>
            <p>Вакансии</p>
          </div>
          <div className="footer_item fi2">
            <b>Меню</b>
            <p>Рассчет стоимости</p>
            <p>Услуги</p>
            <p>Виджеты</p>
            <p>Интеграции</p>
            <p>Наши клиенты</p>
          </div>
          <div className="footer_item fi3">
            <div>&nbsp;</div>
            <p>Кейсы</p>
            <p>Благодарственные письма</p>
            <p>Сертификаты</p>
            <p>Блог на YouTube</p>
            <p>Вопрос / Ответ</p>
          </div>
        </div>
        <div className="footer_item_container f2">
          <div className="footer_item fi4">
            <b>Контакты</b>
            <p>+7 555 555-55-55</p>
            <div className="icons">
              <div className="icon">Whatsup</div>
              <div className="icon">Telegram</div>
              <div className="icon">Viber</div>
            </div>
            <p>Москва, Путевой проезд 3с1, к 902</p>
            <br />
            <br />
            <p className="description">©WELBEX 2022. Все права защищены.</p>
            <p className="description">Политика конфиденциальности</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
