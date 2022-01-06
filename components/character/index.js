// import urlgif from "../../media/1-unscreen.gif"
// import url1 from "../../media/1.png"
// import url1 from "../../media/Gunner.png"
// import url2 from "../../media/Scout.png"
// import url3 from "../../media/Sniper.png"
// import url4 from "../../media/Special_force.png"
// import url5 from "../../media/Picture1.png"
// import url6 from "../../media/Medic.png"
// import url7 from "../../media/Officer.png"
import clsx from "clsx";
import React, { Component } from "react";
import Slider from "react-slick";
import style from "./character.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const urlvideo1 = "/assets/0001.mp4";
const urlvideo2 = "/assets/0002.mp4";
const urlvideo3 = "/assets/0003.mp4";
const urlvideo4 = "/assets/0004.mp4";
const urlvideo5 = "/assets/0005.mp4";
const urlvideo6 = "/assets/0006.mp4";
const urlvideo7 = "/assets/0007.mp4";
const urlCHARACTER = "/assets/CHARACTER.png";

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
              src={urlvideo6}
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
              src={urlvideo1}
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
              src={urlvideo3}
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
              src={urlvideo4}
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
              src={urlvideo5}
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
              src={urlvideo7}
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
              src={urlvideo2}
              autoPlay="autoplay"
              muted="muted"
              loop="loop"
            ></video>
          </div>
        </Slider>
        {/* <Slider
          asNavFor={this.state.nav1}
          ref={slider => (this.slider2 = slider)}
          slidesToShow={4}
          swipeToSlide={true}
          focusOnSelect={true}
          variableWidth= {true}
          className={style.characterFirstSlider}
          {...settings2}
        >
          <div style={{width:'calc(100% / 10 )'}}>
                <img src={url1} alt=""/>
          </div>
          <div style={{width:'calc(100% / 10 )'}}>
                <img src={url2} alt=""/>
          </div>
          <div style={{width:'calc(100% / 10 )'}}>
                <img src={url3} alt=""/>
          </div>
          <div style={{width:'calc(100% / 10 )'}}>
                <img src={url4} alt=""/>
          </div>
          <div style={{width:'calc(100% / 10 )'}}>
                <img src={url5} alt=""/>
          </div>
          <div style={{width:'calc(100% / 10 )'}}>
                <img src={url6} alt=""/>
          </div>
          <div style={{width:'calc(100% / 10 )'}}>
                <img src={url7} alt=""/>
          </div>
        </Slider> */}
      </section>
    );
  }
}
