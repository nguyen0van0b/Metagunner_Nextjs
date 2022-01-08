
import clsx from "clsx"
import React, { Component } from "react";
import Slider from "react-slick";
import style from "./characterMB.module.scss"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
const url1 = "assets/Gunner.webp"
const url2 = "assets/Scout.webp"
const url3 = "assets/Sniper.webp"
const url4 = "assets/special-force.webp"
const url5 = "assets/destroyer.webp"
const url6 = "assets/Medic.webp"
const url7 = "assets/Officer.webp"
const urlCHARACTER = "assets/CHARACTER.webp"


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
                    <span>A well-trained Navy SEAL that can improvise, adapt, and overcome any situations. He is a real weapon-savvy and can make the most of everything around him to finish a job</span>
                </div>
                <img src={url1} alt=""/>
          </div>
          <div className={style.characterSecondSlider}>
                <div className={style.characterSecondSliderTitle}>
                    <h2>Scout</h2>
                    <span>The scout is an expert on gathering information on the enemy lands. He is a master of army-styled ninjutsu who always come with a plan and always leave a place with many dead bodies</span>
                </div>
                <img src={url2} alt=""/>
          </div>
          <div className={style.characterSecondSlider}>
                <div className={style.characterSecondSliderTitle}>
                    <h2>Sniper</h2>
                    <span>{`No one has ever seen him, and no one wants to be his enemy because you will never know when he's gonna get you. His targets never survive, but the witnesses said there was a whistle before the kill.`}</span>
                </div>
                <img src={url3} alt=""/>
          </div>
          <div className={style.characterSecondSlider}>
                <div className={style.characterSecondSliderTitle}>
                    <h2>Special Force</h2>
                    <span>An elite trooper specializes in large-scale tasks and always complete them thoroughly. He can deliver every methods that you can possibly think of to kill a man</span>
                </div>
                <img src={url4} alt=""/>
          </div>
          <div className={style.characterSecondSlider}>
                <div className={style.characterSecondSliderTitle}>
                <h2>Destroyer</h2>
                    <span>The Destroyer is a heavy-built six-foot tall man who loves big guns and explosives. His enemies may outrun him, but they cannot outrun his grenades</span>
                </div>
                <img src={url5} alt=""/>
          </div>
          
          <div className={style.characterSecondSlider}>
                <div className={style.characterSecondSliderTitle}>
                    <h2>Medic</h2>
                    <span>He is an extremely experienced battlefield doctor, but do not make the mistake of underestimate his skills. He brings people back from the brink of death, yet he also does a perfect job of sending one to hell.</span>
                </div>
                <img src={url6} alt=""/>
          </div>
          <div className={style.characterSecondSlider}>
                <div className={style.characterSecondSliderTitle}>
                    <h2>Officer</h2>
                    <span>A respectful but ruthless soldier that hold a record of bring 21 terrorists to justice by himself</span>
                </div>
                <img src={url7} alt=""/>
          </div>
        </Slider>
      </section>
    );
  }
}