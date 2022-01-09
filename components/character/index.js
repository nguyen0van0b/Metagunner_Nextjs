import clsx from "clsx";
import React, { Component } from "react";
import Slider from "react-slick";
import style from "./character.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const urlScout = "/assets/Scout_Metagunner.mp4";
const urlOfficer = "/assets/Officer_Metagunner.mp4";
const urlSniper = "/assets/Sniper_Metagunner.mp4";
const urlSpecial_Force = "/assets/Special-Force_Metagunner.mp4";
const urlDestroyer = "/assets/Destroyer_Metagunner.mp4";
const urlGunner = "/assets/Gunner_Metagunner.mp4";
const urlMedic = "/assets/Medic_Metagunner.mp4";
const urlCHARACTER = "/assets/CHARACTER_Metagunner.webp";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        position: "absolute",
        top: "50%",
        right: 0,
        width: "11%",
        height: "100%",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        position: "absolute",
        top: "50%",
        left: 0,
        zIndex: 1,
        width: "11%",
        height: "100%",
      }}
      onClick={onClick}
    />
  );
}
export default class AsNavFor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null,
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2,
    });
  }

  render() {
    const settings1 = {
      infinite: true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    };
    // const settings2 = {
    //   slidesToShow: 7,
    //   infinite:true,
    //   nextArrow: <SampleNextArrow />,
    //   prevArrow: <SamplePrevArrow />
    // };
    return (
      <section className={style.character} id="character">
        <div className={clsx("container", style.characterContainer)}>
          <div className={style.charactertitle}>
            <img src={urlCHARACTER} alt="" />
            <p>
              The 15 characters of MetaGunner are divided into seven types of
              troops
            </p>
          </div>
        </div>
        <Slider
          asNavFor={this.state.nav2}
          ref={(slider) => (this.slider1 = slider)}
          {...settings1}
        >
          <div className={style.characterSecondSlider}>
            <div className={style.characterSecondSliderTitle}>
              <h2>Gunner</h2>
              <span>
                A well-trained Navy SEAL that can improvise, adapt, and overcome
                any situations. He is a real weapon-savvy and can make the most
                of everything around him to finish a job
              </span>
            </div>
            <video
              src={urlGunner}
              autoPlay="autoplay"
              muted="muted"
              loop="loop"
            ></video>
          </div>
          <div className={style.characterSecondSlider}>
            <div className={style.characterSecondSliderTitle}>
              <h2>Scout</h2>
              <span>
                The scout is an expert on gathering information on the enemy
                lands. He is a master of army-styled ninjutsu who always come
                with a plan and always leave a place with many dead bodies
              </span>
            </div>
            <video
              src={urlScout}
              autoPlay="autoplay"
              muted="muted"
              loop="loop"
            ></video>
          </div>
          <div className={style.characterSecondSlider}>
            <div className={style.characterSecondSliderTitle}>
              <h2>Sniper</h2>
              <span>{`No one has ever seen him, and no one wants to be his enemy because you will never know when he's gonna get you. His targets never survive, but the witnesses said there was a whistle before the kill.`}</span>
            </div>
            <video
              src={urlSniper}
              autoPlay="autoplay"
              muted="muted"
              loop="loop"
            ></video>
          </div>
          <div className={style.characterSecondSlider}>
            <div className={style.characterSecondSliderTitle}>
              <h2>Special Force</h2>
              <span>
                An elite trooper specializes in large-scale tasks and always
                complete them thoroughly. He can deliver every methods that you
                can possibly think of to kill a man
              </span>
            </div>
            <video
              src={urlSpecial_Force}
              autoPlay="autoplay"
              muted="muted"
              loop="loop"
            ></video>
          </div>
          <div className={style.characterSecondSlider}>
            <div className={style.characterSecondSliderTitle}>
              <h2>Destroyer</h2>
              <span>
                The Destroyer is a heavy-built six-foot tall man who loves big
                guns and explosives. His enemies may outrun him, but they cannot
                outrun his grenades
              </span>
            </div>
            <video
              src={urlDestroyer}
              autoPlay="autoplay"
              muted="muted"
              loop="loop"
            ></video>
          </div>

          <div className={style.characterSecondSlider}>
            <div className={style.characterSecondSliderTitle}>
              <h2>Medic</h2>
              <span>
                He is an extremely experienced battlefield doctor, but do not
                make the mistake of underestimate his skills. He brings people
                back from the brink of death, yet he also does a perfect job of
                sending one to hell.
              </span>
            </div>
            <video
              src={urlMedic}
              autoPlay="autoplay"
              muted="muted"
              loop="loop"
            ></video>
          </div>
          <div className={style.characterSecondSlider}>
            <div className={style.characterSecondSliderTitle}>
              <h2>Officer</h2>
              <span>
                A respectful but ruthless soldier that hold a record of bring 21
                terrorists to justice by himself
              </span>
            </div>
            <video
              src={urlOfficer}
              autoPlay="autoplay"
              muted="muted"
              loop="loop"
            ></video>
          </div>
        </Slider>
      </section>
    );
  }
}
