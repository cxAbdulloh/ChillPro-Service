import React from 'react'
import './Map.css'

const Map = () => {

  return (
    <>
    <div className="mapContainer">
      <div className="mapRight" data-aos="fade-right">
      <iframe src="https://yandex.com/map-widget/v1/?um=constructor%3A7de492f6c71b8a581a78a5efd958baaddea6759c378dda47a8d6cbbf53c66f20&amp;source=constructor" width="793" height="571" frameborder="0"></iframe>
      </div>
      <div className="mapLeft">
        <div className="mapText" data-aos="fade-left">
            <div className="url">
              <p className='mapDescription'>Наш адрес</p>
            <ul>
                <li className='mapUrl'>Ташкент, просп. Ханабадтепа</li>
            </ul>  
            </div>
            <div className="url">
              <p className='mapDescription'>Номер телефона</p>
            <ul>
                <li className='mapUrl'>+998 33 151 17 17</li>
            </ul>  
            </div>
            <div className="url">
              <p className='mapDescription'>График работы</p>
            <ul>
                <li className='mapUrl'> 24/7</li>
            </ul>  
            </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Map