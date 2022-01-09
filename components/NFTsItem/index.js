import clsx from "clsx"
import React, { Component } from "react";
import Slider from "react-slick";
import style from "./NFTsItem.module.scss"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// Character Card
const urlKrato = "/assets/Krato_Metagunner.webp"
const urlZero = "/assets/Zero_Metagunner.webp"
const urlLutz = "/assets/Lutz_Metagunner.webp"
const urlJames = "/assets/James_Metagunner.webp"
const urlDante = "/assets/Dante_Metagunner.webp"
const urlHawk_Eyes = "/assets/Hawk_Eyes_Metagunner.webp"
const urlMad_Dog = "/assets/Mad_Dog_Metagunner.webp"
const urlFenix = "/assets/Fenix_Metagunner.webp"
const urlReaper = "/assets/Reaper_Metagunner.webp"
const urlJack = "/assets/Jack_Metagunner.webp"
const urlSurg = "/assets/Surg_Metagunner.webp"
const urlAdolfer = "/assets/Adolfer_Metagunner.webp"
const urlLeon_K = "/assets/Leon_K_Metagunner.webp"
const urlLorda_Ark = "/assets/Lorda_Ark_Metagunner.webp"
const urlEnzo = "/assets/Enzo_Metagunner.webp"
// Weapon Card
const urlhandgun = "/assets/handgun_1_Metagunner.webp"
const urlrevolver = "/assets/revolver_2_Metagunner.webp"
const urlassault_rifle = "/assets/assault_rifle_3_Metagunner.webp"
const urlFlamethrower = "/assets/flamethrower_4_Metagunner.webp"
const urlHeavy_machine = "/assets/heavy_machine_5_Metagunner.webp"
const urlGrenade_launcher = "/assets/grenade_launcher_1_Metagunner.webp"
const urlShotgun = "/assets/shotgun_2_Metagunner.webp"
const urlRocket_launcher = "/assets/rocket_launcher_3_Metagunner.webp"
const urlSubmachine = "/assets/submachine_4_Metagunner.webp"
const urlSniper_rifle = "/assets/sniper_rifle_5_Metagunner.webp"

const urlCHARACTER = "/assets/Character-Card_Metagunner.webp"
const urlWeapon = "/assets/Weapon-Card_Metagunner.webp"

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{...style,position: 'absolute',top: '50%',right: '-10%',width: '11%',height: '100%'}}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{...style,position: 'absolute',top: '50%',left: '-10%',zIndex:1,width: '11%',height: '100%'}}
      onClick={onClick}
    />
  );
}
export default class AsNavFor extends Component {
   render() {
    const settings = {
      slidesToShow: 6,
      infinite:true,
      slidesToScroll: 1,
      swipeToSlide: true,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            }
          ]
    };
    return (
      <section className={style.NFTsItem} id="NFTsItem">
        <div className={clsx('container',style.NFTsItemContainer)}>
          <div className={style.NFTsItemTitle}>
            <img src={urlCHARACTER} alt=""/>
          </div>
        </div>
        <Slider
          {...settings}
          className={style.NFTsItemSlider}
        >
          <div>
                <img src={urlKrato} alt=""/>
          </div>
          <div>
                <img src={urlAdolfer} alt=""/>
          </div>
          <div>
                <img src={urlJames} alt=""/>
          </div>
          <div>
                <img src={urlSurg} alt=""/>
          </div>
          <div>
                <img src={urlDante} alt=""/>
          </div>
          <div>
                <img src={urlReaper} alt=""/>
          </div>
          <div>
                <img src={urlZero} alt=""/>
          </div>
          <div>
                <img src={urlLutz} alt=""/>
          </div>
          <div>
                <img src={urlFenix} alt=""/>
          </div>
          <div>
                <img src={urlMad_Dog} alt=""/>
          </div>
          <div>
                <img src={urlJack} alt=""/>
          </div>
          <div>
                <img src={urlEnzo} alt=""/>
          </div>
          <div>
                <img src={urlHawk_Eyes} alt=""/>
          </div>
          <div>
                <img src={urlLeon_K} alt=""/>
          </div>
          <div>
                <img src={urlLorda_Ark} alt=""/>
          </div>
        </Slider>
        <div className={clsx('container',style.NFTsItemContainer)}>
          <div className={style.NFTsItemTitle}>
            <img src={urlWeapon} alt=""/>
          </div>
        </div>
        <Slider
          {...settings}
          className={clsx(style.NFTsItemSlider,style.NFTsItemSliderWeapon)}
        >
          <div>
                <img src={urlhandgun} alt=""/>
          </div>
          <div>
                <img src={urlrevolver} alt=""/>
          </div>
          <div>
                <img src={urlassault_rifle} alt=""/>
          </div>
          <div>
                <img src={urlFlamethrower} alt=""/>
          </div>
          <div>
                <img src={urlHeavy_machine} alt=""/>
          </div>
          <div>
                <img src={urlGrenade_launcher} alt=""/>
          </div>
          <div>
                <img src={urlShotgun} alt=""/>
          </div>
          <div>
                <img src={urlRocket_launcher} alt=""/>
          </div>
          <div>
                <img src={urlSubmachine} alt=""/>
          </div>
          <div>
                <img src={urlSniper_rifle} alt=""/>
          </div>
        </Slider>
      </section>
    );
  }
}