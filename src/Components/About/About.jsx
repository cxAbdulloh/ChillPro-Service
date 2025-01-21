import React from 'react'
import './About.css'

const About = () => {
  return (
    <>
    <div className="aboutTop">
    <h1 style={{fontWeight:"500"}}>Нам можно доверять!</h1>    
    </div>
    
    <div className="aboutContainer">
        <div className="gridColumsTop">
            <div className="item">
                <h4 style={{color:"#323232"}}>Работаем ежедневно</h4>
                <p className='gridDescription'>Мы ремонтируем бытовую технику для Вас ежедневно: 24/7.</p>
            </div>
            <div className="item">
                <h4 style={{color:"#323232"}}>Запчасти в наличии</h4>
                Собственный склад запчастей, поставки без посредников, гарантия производителя.
                </div>
            <div className="item">
                <h4 style={{color:"#323232"}}>Ремонт на дому</h4>
                <p>Мы ремонтируем бытовую технику на дому. Не увозим в мастерскую.</p>
                </div>
        </div>
        <div className="gridColumsBottom">
            <div className="itemBottom">
                <h4>Гарантируем качество</h4>
                <p>Оригинальные
                запчасти</p>
            </div>
            <div className="itemBottom">
                <h4>Оплата по факту</h4>
                <p>Гибкая ценовая
                политика</p>
            </div>
            <div className="itemBottom">
                <h4>Выезд в день заявки</h4>
                Оперативная помощь – срочный выезд мастера по Ташкенту, в день заявки
            </div>
        </div>
    </div>
    </>
  )
}

export default About