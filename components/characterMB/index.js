
import clsx from "clsx"
import React, { Component } from "react";
import Slider from "react-slick";
import style from "./characterMB.module.scss"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
const urlGunner = "assets/Gunner_Metagunner.webp"
const urlScout = "assets/Scout_Metagunner.webp"
const urlSniper = "assets/Sniper_Metagunner.webp"
const urlSpecial_force = "assets/Special-force_Metagunner.webp"
const urlDestroyer = "assets/Destroyer_Metagunner.webp"
const urlMedic = "assets/Medic_Metagunner.webp"
const urlOfficer = "assets/Officer_Metagunner.webp"
const urlCHARACTER = "assets/CHARACTER_Metagunner.webp"


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{...style,position: 'absolute',top: '50%',right: 0,width: '11%',height: '100%'}}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{...style,position: 'absolute',top: '50%',left: 0,zIndex:1,width: '11%',height: '100%'}}
      onClick={onClick}
    />
  );
}
export default class AsNavFor extends Component {
  render() {
    const settings1 = {
      dots: true,
      infinite:true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };
    return (
      <section className={style.character} id="character">
        <div className={clsx('container',style.characterContainer)}>
          <div className={style.charactertitle}>
            <img src={urlCHARACTER} alt=""/>
            <p>The 15 characters of MetaGunner are divided into seven types of troops</p>
          </div>
        </div>
        <Slider
          ref={slider => (this.slider1 = slider)}
          {...settings1}
        >
          <div className={style.characterSecondSlider}>
                <div className={style.characterSecondSliderTitle}>
                    <h2>Gunner</h2>
                    <span>The Gunner is a well-trained Navy SEAL that can improvise, adapt, and overcome any situation. He is a real weapon-savvy and can make the most of everything around him to finish a job.</span>
                </div>
                <img src={urlGunner} alt=""/>
          </div>
          <div className={style.characterSecondSlider}>
                <div className={style.characterSecondSliderTitle}>
                    <h2>Scout</h2>
                    <span>The scout is an expert on gathering information on the enemy lands. He is a master of army-styled ninjutsu who always comes with a plan and leaves a place with many dead bodies.</span>
                </div>
                <img src={urlScout} alt=""/>
          </div>
          <div className={style.characterSecondSlider}>
                <div className={style.characterSecondSliderTitle}>
                    <h2>Sniper</h2>
                    <span>{`The Sniper is rumored to be a ghost. No one has ever seen him, and no one wants to be his enemy because you will never know when he's going to get you. His targets never survive.`}</span>
                </div>
                <img src={urlSniper} alt=""/>
          </div>
          <div className={style.characterSecondSlider}>
                <div className={style.characterSecondSliderTitle}>
                    <h2>Special Force</h2>
                    <span>The Special Force is an elite trooper specializing in large-scale tasks and always completing them thoroughly. He can deliver every lethal method that you can think of to kill a man.</span>
                </div>
                <img src={urlSpecial_force} alt=""/>
          </div>
          <div className={style.characterSecondSlider}>
                <div className={style.characterSecondSliderTitle}>
                <h2>Destroyer</h2>
                    <span>The Destroyer is a heavy-built six-foot-tall man who loves big guns and explosives. His enemies may outrun him, but they cannot outrun his grenades.</span>
                </div>
                <img src={urlDestroyer} alt=""/>
          </div>
          <div className={style.characterSecondSlider}>
                <div className={style.characterSecondSliderTitle}>
                    <h2>Medic</h2>
                    <span>The Medic is an extremely experienced battlefield doctor, but do not make the mistake of underestimating his fighting skills. He brings people back from the brink of death, yet he also does a perfect job of sending one to hell.</span>
                </div>
                <img src={urlMedic} alt=""/>
          </div>
          <div className={style.characterSecondSlider}>
                <div className={style.characterSecondSliderTitle}>
                    <h2>Officer</h2>
                    <span>The Officer is a respectful but ruthless soldier that holds a record of bringing 21 terrorists to justice by himself.</span>
                </div>
                <img src={urlOfficer} alt=""/>
          </div>
        </Slider>
      </section>
    );
  }
}