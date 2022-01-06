import { useEffect } from "react";
import style from "./about.module.scss";
import clsx from "clsx";
const urlimg5 = "/assets/metagunner-namngang.png";
const urlImgBg = "/assets/banner-9.png";

function About() {
  useEffect(() => {
    let div = document.getElementById("playnow");
    div.onmouseover = function () {
      div.innerHTML = "Coming Soon";
    };
    div.onmouseout = function () {
      div.innerHTML = "Play Now";
    };
  });
  return (
    <section className={style.about} id="about">
      <div className={clsx("container", style.container)}>
        <img src={urlImgBg} className={style.imgBg} alt="" />
        <div className={style.aboutWrapper}>
          <img src={urlimg5} alt="" />
          <p data-aos="zoom-in" data-aos-delay="200">
            {" "}
            A world where you can immerse yourself in battles located in a
            barren wilderness inhabited by monsters. Grab your friends and get
            ready to earn valuable rewards and enjoy the moment after stressful
            hours of work.
          </p>
          <a
            href="https://gleam.io/6ZTmw/metagunner-first-airdrop-event"
            className={clsx("btn btnPrimary", style.btnMB)}
            target="_blank"
            rel="noreferrer"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            Airdrop
          </a>
          <a
            className={clsx("btn btnSecondary", style.btnMB)}
            target="_blank"
            rel="noreferrer"
            href="#"
            data-aos="zoom-in"
            data-aos-delay="400"
            id="playnow"
          >
            Play Now
          </a>
        </div>
      </div>
    </section>
  );
}
export default About;
