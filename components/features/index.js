import style from "./features.module.scss";
import clsx from "clsx";
const urlFEATURES = "/assets/GAME-FEATURES.png";
const urlImgCam = "/assets/CampaignMode.jpg";
const urlImgArena = "/assets/Arena_Mode.jpg";
const urlImgUpgrade = "/assets/FEATURES4.jpg";
const urlImgRank = "/assets/RANKING.png";

function Features() {
  return (
    <section className={style.features} id="features">
      <div className="container">
        <div className={style.featuresTitle}>
          {/* <h2 className={style.title} data-aos="fade-up" data-aos-once="true">GAME<span> FEATURES</span></h2> */}
          <img
            src={urlFEATURES}
            alt=""
            data-aos="fade-up"
            data-aos-once="true"
          />
        </div>
        <div className={style.featuresWrapper}>
          <div
            className={clsx(style.featureCard, style.featureCardOne)}
            data-aos="fade-right"
            data-aos-once="true"
            data-aos-delay="300"
            data-aos-duration="500"
          >
            <div className={style.featureCardBottom}>
              <div className={style.featureCardBottomTitle}>
                <h3>
                  <span>Campaign</span>
                </h3>
                <p>
                  This mode is the main feature of MetaGunner, where players
                  battle alien monsters to receive valuable rewards. Players
                  embark on exciting adventures and play as soldiers armed with
                  weapons to fight monsters in deadly lands.
                </p>
              </div>
            </div>
            <div className={style.featureCardTop}>
              <div className={style.featureCardTopImg}>
                <img src={urlImgCam} alt="SHOWROOM" />
              </div>
            </div>
          </div>
          <div
            className={clsx(style.featureCard, style.featureCardTwo)}
            data-aos="fade-right"
            data-aos-once="true"
            data-aos-delay="300"
            data-aos-duration="500"
          >
            <div className={style.featureCardTop}>
              <div className={style.featureCardTopImg}>
                <img src={urlImgArena} alt="SHOWROOM" />
              </div>
            </div>
            <div className={style.featureCardBottom}>
              <div className={style.featureCardBottomTitle}>
                <h3>
                  <span>Arena</span>
                </h3>
                <p>
                  Arena Mode consists of two different sub-modes: Battle Royale
                  and Team Fire. Battle Royale is where soldiers join in the
                  deadliest battles to determine the greatest warrior. TeamFire
                  is the place for teams of five to combat and decide which team
                  is the strongest of all.{" "}
                </p>
              </div>
            </div>
          </div>
          <div
            className={clsx(style.featureCard, style.featureCardThree)}
            data-aos="fade-right"
            data-aos-once="true"
            data-aos-delay="600"
            data-aos-duration="500"
          >
            <div className={style.featureCardBottom}>
              <div className={style.featureCardBottomTitle}>
                <h3>
                  <span>Upgrade</span>
                </h3>
                <p>
                  {`Upgrade is a feature that allows players to increase the level
                  and attribute points of weapons. Players need to own an
                  upgrade item (Wrench) and pay a small fee corresponding to the
                  weapon's level to upgrade. Depending on the level, the upgrade
                  has different success rates.`}
                </p>
              </div>
            </div>
            <div className={style.featureCardTop}>
              <div className={style.featureCardTopImg}>
                <img src={urlImgUpgrade} alt="SHOWROOM" />
              </div>
            </div>
          </div>
          <div
            className={clsx(style.featureCard, style.featureCardFour)}
            data-aos="fade-right"
            data-aos-once="true"
            data-aos-delay="900"
            data-aos-duration="500"
          >
            <div className={style.featureCardTop}>
              <div className={style.featureCardTopImg}>
                <img src={urlImgRank} alt="SHOWROOM" />
              </div>
            </div>
            <div className={style.featureCardBottom}>
              <div className={style.featureCardBottomTitle}>
                <h3>
                  <span>Leaderboard</span>
                </h3>
                <p>
                  The leaderboard is a ranking system in which players are
                  assessed based on their achievements in MetaGunner.
                  Leaderboard helps increase competition among players and
                  create positive challenges, forcing them to play hard to gain
                  significant achievements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Features;
