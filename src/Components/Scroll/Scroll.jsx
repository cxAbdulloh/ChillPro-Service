import React from "react";
import "./Scroll.css";
import { assets } from "../../assets/assets";

const Scroll = () => {
  return (
    <>
      <div className="scrollText">
        Мы ремонтируем и обслуживаем<span style={{color:"#2887ff"}}>все марки бытовой техники</span> 
      </div>
      <div className="scrollContainer">
        
        <div className="item2">
          <img src={assets.photo_2} alt="" className="scrollImage" />
        </div>
        <div className="item3">
          <img src={assets.photo_3} alt="" className="scrollImage3" />
        </div>
        <div className="item4">
          <img src={assets.photo_4} alt="" className="scrollImage" />
        </div>
        <div className="item5">
          <img src={assets.photo_5} alt="" className="scrollImage5" />
        </div>
        <div className="item6">
          <img src={assets.photo_6} alt="" className="scrollImage" />
        </div>
        <div className="item7">
          <img src={assets.photo_7} alt="" className="scrollImage" />
        </div>
        <div className="item8">
          <img src={assets.photo_8} alt="" className="scrollImage" />
        </div>
        <div className="item9">
          <img src={assets.photo_9} alt="" className="scrollImage" />
        </div>
        <div className="item10">
          <img src={assets.photo_10} alt="" className="scrollImage10" />
        </div>
      </div>
    </>
  );
};

export default Scroll;
